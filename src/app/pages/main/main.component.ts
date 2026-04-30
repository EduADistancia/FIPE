import { Component, inject, ViewChild } from '@angular/core';
import { HeaderActivityComponent } from "../../components/header-activity/header-activity.component";
import { ActivatedRoute, Router } from '@angular/router';
import { ACTIVITIES } from '../../shared/data/activity.data';
import { CasesComponent } from "../../components/types/cases/cases.component";
import { QuiztfComponent } from "../../components/types/quiztf/quiztf.component";
import { ResultComponent } from "../../components/result/result.component";
import { QuizmoComponent } from '../../components/types/quizmo/quizmo.component';
import { GroupTableComponent } from '../../components/types/group-table/group-table.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderActivityComponent, CasesComponent, 
    QuiztfComponent, ResultComponent,
    QuizmoComponent, GroupTableComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @ViewChild('result') result!: ResultComponent;

  dataActivity: any = null;
  passingScore: number = 0;
  totalScore: number = 0;

  approved: boolean = false;
  finalScore: number = 0;

  private idAccess: string | null = null;
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.idAccess = params.get('id_access');

      if (this.idAccess) {
        this.getData(this.idAccess);
      }

      if (!this.idAccess || !this.dataActivity) {
        this.router.navigateByUrl('/error404');
        return;
      }

      this.passingScore = this.dataActivity.passingScore;

      if (this.dataActivity.type === "cases") {
        for (let i=0; i<this.dataActivity.cases.length; i++) {
          this.totalScore += this.dataActivity.cases[i].score;
        }
      }
      else if (this.dataActivity.type === "true-false"){
        this.totalScore = this.dataActivity.questions.length;
      }
    });
  }

  getData(idAccess: string) {
    const activities = ACTIVITIES;

    this.dataActivity = 
      activities.cases.find(a => a.idAccess === idAccess) || 
      activities.quizTF.find(a => a.idAccess === idAccess) ||
      activities.quizMO.find(a => a.idAccess === idAccess) ||
      activities.groupTable.find(a => a.idAccess === idAccess) ||
      null;

  }

  getResult(result: any) {
    this.approved = result.approved;
    this.finalScore = result.finalScore;
    this.result.showResult();
  }
}
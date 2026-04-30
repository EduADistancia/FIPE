import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Badget, Case, Feedback } from '../../shared/base/activity.types';
import { ScoreScormService } from '../../services/score-scorm.service';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  constructor(
    private scormService: ScoreScormService
  ) {}

  @Input() cases!: Case[];
  @Input() finalScore!: number;
  @Input() totalScore!: number;
  @Input() passingScore!: number;
  @Input() approved!: boolean;
  @Input() monocase!: boolean;
  @Input() feedback?: Feedback | null;
  @Input() badget?: Badget | null;

  @ViewChild('result') result!: ElementRef<HTMLDivElement>;

  isIframe: boolean = true;

  ngOnInit() {
    if (window.parent === window)
      this.isIframe = false;
  }

  showResult() {
    this.scormService.addScore(this.finalScore);
    this.scormService.sendResult(this.finalScore >= this.passingScore);
    this.result.nativeElement.classList.remove('hidden');
    this.result.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  close() {
    window.parent.parent.close()
  }
}

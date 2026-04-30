import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Feedback, GroupTableItem } from '../../../shared/base/activity.types';
import { GroupTableService } from '../../../services/group-table.service';

@Component({
  selector: 'app-group-table',
  imports: [],
  templateUrl: './group-table.component.html',
  styleUrl: './group-table.component.css'
})
export class GroupTableComponent {

  constructor(
    private groupTableServivce: GroupTableService
  ) { }

  @Input('labels') 
    labels!: { 
        key:string; 
        label:string;
    }[];

  @Input('items') items!: GroupTableItem[];
  @Input('feedback') feedback!: Feedback;

  @ViewChild('result') result!: ElementRef<HTMLDivElement>;
  @ViewChild('warning') warning!: ElementRef<HTMLDivElement>;
  @ViewChild('cmdButton') cmdButton!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    setTimeout(
      () => this.groupTableServivce.activateAreas(), 
      300
    );
  }

  checkResults() {
    let resolved = true;

    const completed = document.querySelectorAll('.drop-area');

    let totalOptions = this.items.length;
    let responses = 0;

    completed.forEach(c => {
      let resArea = c.querySelectorAll('p').length;
      responses += resArea;
    });

    if (totalOptions !== responses) {
      this.warning.nativeElement.classList.remove('hidden');
      return;
    }

    this.warning.nativeElement.classList.add('hidden');

    completed.forEach(c => {
      c.childNodes.forEach(fraseNode => {
        if (!(fraseNode instanceof HTMLElement)) {
          this.warning.nativeElement.classList.remove('hidden');
          return;
        }

        const keyLabel = fraseNode.getAttribute('name');

        if (keyLabel !== (c as HTMLElement).id) {
          fraseNode.querySelector('.result')?.append(this.addCheck(false));
          resolved = false;
        }
        else {
          fraseNode.querySelector('.result')?.append(this.addCheck(true));
        }

        fraseNode.draggable = false;
      })
    });

    this.cmdButton.nativeElement.classList.add('hidden');

    if (resolved) {
      this.feedback.resultOk?.forEach(f =>{
        let pText = document.createElement('p');
        pText.textContent = f;
        this.result.nativeElement.append(pText);
      });
      
      this.result.nativeElement.classList.add('answerCorrect');
    }
    else {
      this.feedback.resultNotOk?.forEach(f =>{
        let pText = document.createElement('p');
        pText.textContent = f;
        this.result.nativeElement.append(pText);
      });

      this.result.nativeElement.classList.add('answerIncorrect');
    }

    this.result.nativeElement.classList.remove('hidden')
  }

  private addCheck(correct: boolean): string {
    return correct ? '✔️' : '❌';
  }
}

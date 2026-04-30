import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { QuestionTF } from '../../../shared/base/activity.types';

@Component({
  selector: 'app-quiztf',
  imports: [],
  templateUrl: './quiztf.component.html',
  styleUrl: './quiztf.component.css'
})
export class QuiztfComponent {

  @ViewChild('warning') warning!: ElementRef<HTMLDivElement>;
  @ViewChild('cmdButton') cmdButton!: ElementRef<HTMLDivElement>;

  @Input('questions') questions!: QuestionTF[];


  totalAnswers: number = 0;

  checkAnswers() {
    this.totalAnswers = this.questions.length;

    const selected = document.querySelectorAll('input[type="radio"]:checked');

    if (this.totalAnswers !== selected.length) {
      this.warning.nativeElement.classList.remove('hidden');
      this.warning.nativeElement.classList.add('warning');
      return;
    }

    for (let i=0; i<selected.length; i++){
      let input = selected[i].getAttribute('value');
      let answer = String(this.questions[i].answer.correct); 
      
      let feedback;

      if (input == answer) {
        selected[i].parentElement!.classList.add('answerCorrect');
        feedback = document.querySelector(`#justify-t-${i}`);
      }
      else {
        selected[i].parentElement!.classList.add('answerIncorrect');
        feedback = document.querySelector(`#justify-f-${i}`);
      }
      
      feedback!.classList.remove('hidden');
    }

    document.querySelectorAll('input[type="radio"]')
            .forEach(i => i.setAttribute('disabled', 'true'));
    
    this.cmdButton.nativeElement.classList.add('hidden');
  }
}
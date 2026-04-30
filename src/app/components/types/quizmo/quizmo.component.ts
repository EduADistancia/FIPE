import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { QuestionMO } from '../../../shared/base/activity.types';

@Component({
  selector: 'app-quizmo',
  imports: [],
  templateUrl: './quizmo.component.html',
  styleUrl: './quizmo.component.css'
})
export class QuizmoComponent {
  @ViewChild('warning') warning!: ElementRef<HTMLDivElement>;
  @ViewChild('cmdButton') cmdButton!: ElementRef<HTMLDivElement>;

  @Input('questions') questions!: QuestionMO[];

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
      let input = selected[i].id;
      let optionIndex = Number(input.replace('t', ''));
      let target = this.questions[i].options[optionIndex];

      if (target.isCorrect) {
        selected[i].parentElement!.classList.add('answerCorrect');
      }
      else {
        selected[i].parentElement!.classList.add('answerIncorrect');
      }
      
      let feedback = document.querySelector(`#justify-q${i}`);
      let justification = feedback?.querySelector('.justify');
      
      if (justification) {
        justification.textContent = target.justification;
      }

      feedback!.classList.remove('hidden');
    }

    document.querySelectorAll('input[type="radio"]')
            .forEach(i => i.setAttribute('disabled', 'true'));
    
    this.cmdButton.nativeElement.classList.add('hidden');
  }
}

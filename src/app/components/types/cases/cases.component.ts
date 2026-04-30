import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Case } from '../../../shared/base/activity.types';
import { ResultComponent } from '../../result/result.component';
import { ShuffleService } from '../../../services/shuffle.service';

@Component({
  selector: 'app-cases',
  imports: [],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {

  constructor(
    public shuffleService: ShuffleService
  ) { }

  @ViewChild('result') result!: ResultComponent;
  @ViewChild('warning') warning!: ElementRef<HTMLDivElement>;
  @ViewChild('cmdButton') cmdButton!: ElementRef<HTMLDivElement>;

  @Input() cases!: Case[];
  @Input() passingScore!: number;
  @Input() monocase!: boolean;

  @Output() approved = new EventEmitter<{finalScore: number, approved: boolean}>();

  finalScore: number = 0;
  totalAnswers: number = 0;

  ngOnInit() {
    this.shuffleOptions();
  }

  shuffleOptions() {
    this.cases.forEach(c => {
      c.questions.forEach(q => {
        q.options = this.shuffleService.shuffleArray(q.options);
      });
    });
  }

  checkAnswers() {
    this.finalScore = 0;
    this.totalAnswers = 0;

    this.cases.forEach(c => {
      this.totalAnswers += c.questions.length;
    });

    const selected = document.querySelectorAll('input[type="radio"]:checked');

    if (this.totalAnswers !== selected.length) {
      this.warning.nativeElement.classList.remove('hidden');
      this.warning.nativeElement.classList.add('warning');
      return;
    }

    if (!this.monocase) {
      this.cases.forEach(c => {
        let caseOk = true;
        
        c.questions.forEach(q => {
          for (let i=0; i<selected.length; i++){
            const optionSelected = 
              q.options.find(o => o.answer == selected[i].getAttribute('value')) ||
              null;
            if (optionSelected) {
              if (!optionSelected.isCorrect) {
                caseOk = false;
                selected[i].parentElement?.classList.add('answerIncorrect');
              }
              else {
                selected[i].parentElement?.classList.add('answerCorrect');
              }
            }
          }
  
        });
  
        if (caseOk) {
          this.finalScore += c.score;
        }
      });
    }
    else {
      const auxQuestions = this.cases[0].questions
      
      for(let i=0; i<selected.length; i++){
        let answer = selected[i].getAttribute('value');
        let correct = auxQuestions[i].options.find(o => o.answer === answer);

        if (correct?.isCorrect) {
          this.finalScore++;
          selected[i].parentElement?.classList.add('answerCorrect');
        }
        else {
          selected[i].parentElement?.classList.add('answerIncorrect');
        }

      }
    }

    this.cmdButton.nativeElement.classList.add('hidden');
    this.warning.nativeElement.classList.remove('warning');
    this.warning.nativeElement.classList.add('hidden');

    const allInputs = document.querySelectorAll<HTMLInputElement>('input[type="radio"]');
    allInputs.forEach(i  => {
      i.disabled = true;
      i.parentElement?.classList.add('disabled');
    });

    this.approved.emit({
      finalScore: this.finalScore,
      approved: this.finalScore >= this.passingScore
    });
  }
}

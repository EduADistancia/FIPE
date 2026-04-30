import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreScormService {
  
  private score: number = 0;

  addScore(scoreItem: number) {
    this.score += scoreItem;
  }

  getActualScore() {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }

  sendResult(completed: boolean) {
    if (window.parent === window) {
      console.warn('No está dentro de un SCORM iframe. Resultado no enviado.');
      return;
    }
    const valueSend = {
      score: this.getActualScore(),
      completed: completed,
    };

    window.parent.postMessage({ type: 'score', value: valueSend }, '*');
    this.resetScore();
    console.log('Resultado enviado!');
  }
}

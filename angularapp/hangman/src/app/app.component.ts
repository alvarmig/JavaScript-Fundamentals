import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  word = 'AGUACATE';
  hiddenWord = '';

  tries = 0;
  win = false;
  lose = false;

  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    
    this.hiddenWord = '_ '.repeat( this.word.length );
  }

  verify( letter ) {

    this.charExists( letter );
    const hiddenWordsArr = this.hiddenWord.split(' ');

    for( var i = 0; i < this.word.length; i++ ) {
      if (this.word[i] === letter) {
        hiddenWordsArr[i] = letter;
      }
    }
    this.hiddenWord = hiddenWordsArr.join(' ');
    this.verifyWin();
  }

  verifyWin() {
    const wordArr = this.hiddenWord.split(' ');
    const evaluateWord = wordArr.join('');

    if( evaluateWord === this.word ) {
      this.win = true;
      console.log('User WON');
    }
 
    if( this.tries >= 9 ) {
      this.lose = true;
      console.log('User LOOSE');
    }
  }
  charExists( letter ) {
    if( this.word.indexOf( letter ) >= 0 ) {
    } else {
      this.tries++;
    }
  }
}

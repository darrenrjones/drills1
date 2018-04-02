'use strict';

function decode (str) {
  let codedArray = str.split(' ');
  let decodedLetters = [];

  for (let i=0; i< codedArray.length; i++) {
    if (codedArray[i][0] === 'a' ) {
      decodedLetters.push(codedArray[i][1]);
    }
    if (codedArray[i][0] === 'b' ) {
      decodedLetters.push(codedArray[i][2]);
    }
    if (codedArray[i][0] === 'c' ) {
      decodedLetters.push(codedArray[i][3]);
    }
    if (codedArray[i][0] === 'd' ) {
      decodedLetters.push(codedArray[i][4]);
    }
    else {
      decodedLetters.push(' ');
    }

  }
  console.log(decodedLetters.join(''));
}

decode('craft block argon meter bells brown croon droop');

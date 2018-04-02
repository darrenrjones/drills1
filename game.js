'use strict';

function game(userInput) {
    
  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(randomNo, userInput);
  if (userInput === 1) {
    switch(randomNo) {
    case 1: 
      return 'Tie!';
      break;
    case 2:
      return 'Human wins!';
      break;
    case 3:
      return 'Computers conquer all!';
      break;
    } 
  }
  if (userInput === 2) {
    switch(randomNo) {
    case 1:
      return 'Computers conquer all!';
      break;
    case 2:
      return 'Tie!';
      break;
    case 3:
      return 'Human wins!';
      break;
    } 
  }
  if (userInput === 3) {
    switch(randomNo) {
    case 1:
      return 'Human wins!';
      break;
    case 2:
      return 'Computers conquer all!';
      break;
    case 3:
      return 'Tie!';
      break;
    } 
  }
  
  else {
    return 'Yoda is not a valid hand sign in this game'; 
  }  

}


console.log(game(1));
console.log(game(2));
console.log(game(3));
console.log(game(10));



// rock = 1


// scissors = 2
// paper = 3
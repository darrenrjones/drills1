'use strict';

// const rawInput = prompt("Rock, Paper, or Scissors?");

// function convertInput(rawInput) {
//     if (rawInput === "rock") {
//         userInput = 1;
//     }

//     if (rawInput === 'paper' {
//         userInput === 2;
//     }
//     if (rawInput === 'scissors') {

//     }
// }



function game() {
  let userInput = parseInt(prompt('1 for Rock, 2 for paper, 3 for scissors?'));
  
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
console.log(userInput);
}

console.log(game());

// rock = 1


// scissors = 2
// paper = 3
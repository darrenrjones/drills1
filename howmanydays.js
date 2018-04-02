'use strict';

function howManyDays(month, leapYear = false){


  if ( leapYear && month === 'February') {
    return `${month} has 29 days`;
  }

  switch(month) {
  case 'September': 
  case 'April':
  case 'June':
  case 'November': 
    return `${month} has 30 days`;
    break;    
  case 'January': 
  case 'March':
  case 'May':
  case 'July': 
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days`;
    break;
  default:
    return `${month} has 28 days`;
  }


}

console.log(howManyDays('February',true));
'use strict';

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if ( num > 0){
    console.log('To infinity');
  } else if ( num < 0 ) {
    console.log('To negative infinity');  
  } else {
    console.log('Staying home');
  }    
}

beyond(Infinity);
beyond(-231);
beyond(666);
beyond(0);
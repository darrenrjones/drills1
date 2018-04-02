'use strict';
function whoAmI (name, age) {  
  
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${age}`);
}

whoAmI('Chris', 29);

function yearOfBirth(age) {
  let yob = 2018 - age;
  console.log(yob);
}

yearOfBirth(29);

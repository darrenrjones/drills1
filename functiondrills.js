'use strict';
function whoAmI (name, age) {  

  if (!name || !age) {
    throw new Error('can not have empty field');
  }    

  if (typeof name !== 'string' || typeof age !== 'number') {
    throw new Error('name must be text/ age must be number');
  }

  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${age}`);
}



whoAmI('Steve',"29");

function yearOfBirth(age) {
  if ( age < 0) {
    throw new Error('can\'t be negative!');
  }

  let yob = 2018 - age;
  console.log(yob);
}

yearOfBirth(-29);

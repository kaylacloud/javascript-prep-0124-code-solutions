// create your loops here.
function whileLoop1() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }

  return newArray;
}
let resultOfWhileLoop1 = 'whileLoop1 output';

console.log(resultOfWhileLoop1, whileLoop1());

function whileLoop2() {
  const newArray2 = [];
  let k = 0;
  while (k < 20) {
    newArray2.push(k);
    k += 2;
  }
  return newArray2;
}
let resultofWhileLoop2 = 'whileLoop output';

console.log(resultofWhileLoop2, whileLoop2());

function forLoop1() {
  const newArray3 = [];
  for (let j = 0; j < 10; j++) {
    newArray3.push(j);
    console.log(j);
  }
  return newArray3;
}
let resultsOfLoop1 = 'for Loop1 output';

console.log(resultsOfLoop1, forLoop1());

function forLoop2() {
  const string = ' Time till explosion ';
  for (let f = 100; f > 0; f--) {
    console.log(string + f + '!');
  }
  return string;
}

let resultOfLoop2 = 'for Loop2 output';

console.log(resultOfLoop2, forLoop2());

function forInLoop1(object) {
  const newArray4 = [];
  for (const key in object) {
    newArray4.push(key);
  }
  return newArray4;
}

const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('for in loop 1 output', forInLoop1(object));

function forInLoop2(object) {
  const newArray5 = [];
  for (const key in object) {
    newArray5.push(key);
  }
  return newArray5;
}

console.log('for in Loop 2 output', Object.values(object));

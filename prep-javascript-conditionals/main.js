/* Your JS goes in this file */
let age= "22";
function isAdult(age) {
 let conditional;
if (age < 18) {
conditional= false;
} else {conditional= true;
}
return conditional;
}
var isAdultResult= isAdult(age);
console.log(isAdultResult);


let student1Score= "71";
function didStudentPass(student1Score) {
  let condition;
  if (student1Score >= 70) {condition= true;
  } else {condition = false;
  }
  return condition;
}
var didStudentPassResult= didStudentPass(student1Score);
console.log(didStudentPassResult);

let student2Score= "90";
function gradeCalculator(student2Score) {
let condition1 =("f","D","C","B","A","A++" );
if (student2Score< 60)
{
  condition1=F;
}
else if (student2Score<70) {condition1= "D";
}
else if (student2Score <80){condition1 = "C";
}
else if (student2Score<90){condition1= "B";
}
else if (student2Score<100) {condition1= "A";
}
else if (student2Score>= 100) {condition1 = "A++";
}
return condition1
}
var gradeCalculatorResult= gradeCalculator (student2Score);
console.log(gradeCalculatorResult);

let season= 'summer';
function seasonMessenger(season) {
  let conditon2 = ('it\'s hot today', 'the flower\'s are blooming', 'the leave\'s are changing colors', 'it\'s cold today','please enter a valid season');


 if (season === 'summer')
{
  condition2= 'it\'s hot today';
}
else if (season === 'spring')
{
  condition2= 'the flower\'s are blooming';
}
else if (season=== 'autumn')
{
  condition2= 'the leave\'s are changing colors';
}
else if (season==='winter')
{
  condition2= 'it\'s cold today';
}
else if (season=== 'invalid season')
{
 condition2= 'please enter a valid season';
}
return condition2
 }
var seasonMessengerResult= seasonMessenger(season);
console.log (seasonMessengerResult);

let dayOfTheWeek= 'friday';
function dayDetector (dayOfTheWeek) {
let condition3= ('have a good weekend!');
let condition4= ('It\'s a weekday !');
if (dayOfTheWeek = 'monday')
{
condtion3= 'It\'s a weekday!';
}
else if (dayOfTheWeek= 'tuesday')
{
  condition3= 'It\'s a weekday!';
}
else if (dayOfTheWeek= 'wednesday')
{
  condtion3= 'It\'s a weekday!';
}
else if (dayOfTheWeek= 'thursday')
{
  conditon3= 'It\'s a weekday!';
}
else if (dayOfTheWeek= 'friday')
{
  condtion3= 'It\'s a weekday!';
}
else if (dayOfTheWeek= 'saturday')
{
  condition4= 'have a good weekend!';
}
else if (dayOfTheWeek= 'sunday')
{
  condtion4='have a good weekend!';
}
return condition3
return condition4
}

var dayDetectorResult= dayDetector (dayOfTheWeek);
console.log(dayDetectorResult);

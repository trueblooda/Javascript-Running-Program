var prompt = require('syncprompt');

//userName === Jane
userName = prompt('What is your Name?\n');
console.log('Hello', userName);
question = prompt('What would you like to ask the magic 8-Ball?\n')
let randomNumber = Math.floor(Math.random()*8 + 1);
eightBall = randomNumber;
if (eightBall === 1){
  console.log('It is certain')
}else if
(eightBall === 2){
  console.log('it is decidedly so')
}else if    
(eightBall === 3){
  console.log('Reply hazy try again')
}else if
(eightBall === 4){
  console.log('Cannot predict now')
}else if
(eightBall === 5){
  console.log('Do not count on it')
}else if
(eightBall === 6){
  console.log('My sources say no')
}else if
(eightBall === 7){
  console.log('Outlook not so good')
}else if
 (eightBall ===8){
  console.log('Signs point to yes')
}else{
  console.log('Bro what the fuck did you do you broke it come on man')
}
var input = require('readline-sync');
var alphabet = input.question('Enter any alphabet: ');
console.log('With Even Numbers: ')
for (let i = 100; i < 110; i+=2){
        console.log(`${alphabet}${i}`);
    }
console.log('With Odd Numbers: ')
for (let i = 101; i < 111; i+=2) {
        console.log(`${alphabet}${i}`);
    
}
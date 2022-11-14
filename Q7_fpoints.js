const read = require('readline-sync')

let name = read.question('Enter passenger name: ');
let miles = read.question('Enter the total time travelled: ');
let  points;

if(miles>=10000 & miles < 20000){
console.log("10 flyer points for travelling " + miles + " miles.")
}
if(miles>=20000 & miles < 50000){
    console.log("20 flyer points for travelling " + miles + " miles.")
    }
if(miles>=50000 & miles < 100000){
        console.log("30 flyer points for travelling " + miles + " miles.")
    }
if(miles>=100000){
        console.log("50 flyer points for travelling " + miles + " miles.")
    }
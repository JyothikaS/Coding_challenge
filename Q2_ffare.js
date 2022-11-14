const read = require('readline-sync')

let fare = read.question('Enter the flight fare: ');
let bt = read.question('Enter the booking time in 24hr: ');
fr = parseInt(fare);

if(bt>=6 & bt <9){
totf = fr + (fr*10/100)
console.log("After adding 10% to " + fr + ": " + totf)
}
if(bt>=9 & bt <17){
    totf = fr + (fr*20/100)
    console.log("After adding 20% to " + fr + ": " + totf)
    }
if (bt >= 17 & bt < 23) {
    totf = fr + (fr * 7 / 100)
    console.log("After adding 7% to " + fr + ": " + totf)
}
if (bt >= 23 & bt < 6) {
    totf = fr + (fr * 5 / 100)
    console.log("After adding 5% to " + fr + ": " + totf)
}

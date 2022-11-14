const read = require('readline-sync')

let fare = [];
let dest = [];
//let full = [];
l = 3;
 for (let i = 0; i < l; i++) {
    let inp = read.question('Enter the flight fare: ');
    let dfare = parseFloat(inp)
    fare.push(dfare);
    let des = read.question('Enter the destination: ');
    dest.push(des);
}
console.log("\nFares: " + fare) 
console.log("\nDestination: " + dest) 

for (let i = 0; i < l; i++) {
    let nw = fare.push(dest[i]);
}
console.log(" ")
console.log("After merging Destination and Fares: ")
console.log(fare)


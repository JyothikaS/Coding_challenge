const read = require('readline-sync')

let fare = [];
let dest = [];
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


let find = read.question("Enter a number below " + l +": ");

    console.log("The fare for destination " + dest[find] + " is " + fare[find])

    console.log()



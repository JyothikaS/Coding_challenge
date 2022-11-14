const read = require('readline-sync')

// let fno = []
// let n = 5;
// for (let i = 0; i < n ; i++) {
    
//     let inp = read.question('Enter the flight number: ');
//     fno.push(inp)
// }
// console.log(fno)

var fnos = 0;
var fno = [];
console.log("Enter the flight number: ")
while (true) {
    fnos = read.question();
    if (fnos == "q") {
        break;
    }
    else {
        fno.push(fnos)
    }
}
console.log(fno);
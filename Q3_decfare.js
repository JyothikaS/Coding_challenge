const read = require('readline-sync')

let fare = [];
 for (let i = 0; i < 3; i++) {
    let inp = read.question('Enter the flight fare: ');
    let dfare = parseFloat(inp)
    fare.push(dfare);
}
console.log("\nFares: " + fare) 

 //Ascending order
 for (let i = 0; i < fare.length; i++) { 
    for (let j = 0; j < fare.length-i-1; j++) { 
        if(fare[j] > fare[j+1])
        { 
            var temp = fare[j] 
            fare[j] = fare[j + 1] 
            fare[j+1] = temp 
        } 
    }  
} 
console.log(" "); 
console.log("Ascending order: " + fare); 

//Descending order

for (let i = 0; i < fare.length; i++) {
    for (let j = 0; j < fare.length - i - 1; j++) {
        if (fare[j] < fare[j + 1]) {
            var temp = fare[j]
            fare[j] = fare[j + 1]
            fare[j + 1] = temp
       }
    }
}
console.log(" "); 
console.log("Descending order: " + fare); 

//search
let search=0;
    let elmnt = read.question('Enter the name to search: ');
    for(i = 0; i < fare.length; i++){
       
            if(elmnt == fare[i])
           {
            search=1;
            break;
            // console.log(sname + " found");
           }
           else{
            search=0;
           // console.log(sname + " not found");
           }
            
        }
        if(search == 1){
          console.log(elmnt +" found.")
            }
            else{
            console.log(elmnt +" not found.")
            }

 //min and max fare
 let min;
 
 for (let i = 0; i < fare.length; i++) {
    for (let j = 0; j < fare.length; j++) {
        if (fare[j] < fare[i]) {
            min = fare[j]
      //   max = fare[i]
       }
    }
    
}
console.log("Minimum value is: " +min)

//max
for(let i = 0; i < fare.length; i++)
{
    for(j = 0; j < fare.length-i ; j++)
    {
        // var max=flight[i];
        if(fare[j]  >fare[i]){
          max = fare[j];
        }
        else{
            max = fare[i]
        }
}
}console.log("maximum fare is : "+max)

// console.log("Maxmum value is: " +max)

//duplicate elements
for (let i = 0; i < fare.length; i++) {
    for (let j = i+1; j < fare.length; j++) {
        if (fare[i] == fare[j]) {
            //names[j]=false
            console.log("Repeated entries: " + fare[j])
        }
    }
}
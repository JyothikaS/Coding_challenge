const read = require('readline-sync')
let names = [];
let asc = [];
 for (let i = 0; i < 3; i++) {
    let inp = read.question('Enter the passenger name: ');
    names.push(inp);
}
 console.log(names)

 // ascending
//  for (let j = 0; j < names.length; j++) {
        
//     asc.push()
//  }
 
//descending

// bubble sorting 
for (let i = 0; i < names.length; i++) { 
    for (let j = 0; j < names.length-i-1; j++) { 
        if(names[j] > names[j+1])
        { 
            var temp = names[j] 
            names[j] = names[j + 1] 
            names[j+1] = temp 
        } 
    }  
} 
console.log("Ascending order: "); 
console.log(names); 
// descending order of array 

for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names.length - i - 1; j++) {
        if (names[j] < names[j + 1]) {
            var temp = names[j]
            names[j] = names[j + 1]
            names[j + 1] = temp
       }
    }
}
console.log("Descending order: ");
console.log(names);
 
 
//search
let search=0;
    let sname = read.question('Enter the name to search: ');
    for(i = 0; i < names.length; i++){
       
            if(sname == names[i])
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
          console.log(sname +" found.")
            }
            else{
            console.log(sname +" not found.")
            }
 
// length of names
console.log("\nLength of names: ")
let ilen;
for (let i = 0; i < names.length; i++) {
   ilen = names[i].length
   process.stdout.write( names[i]+" = "+`${ilen} ` )
}
console.log("\n")


//duplicates 
for (let i = 0; i < names.length; i++) {
    for (let j = i+1; j < names.length; j++) {
        if (names[i] == names[j]) {
            //names[j]=false
            console.log("Repeated entries: " + names[j])
        }
    }
}
//split by space
console.log("\n")
console.log("Split at space.")
names.forEach((i)=> {
    var nwnames = i.split(' ')
    nwnames.forEach((item)=> {
        process.stdout.write(`${item}, `)
    })
})

//take names
//  const read = require('readline-sync')
//  let names = [];
//   for (let i = 0; i < 10; i++) {
//      let inp = read.question('Enter the passenger name: ');
//      names.push(inp);
//   }
//   console.log(names)


    

 
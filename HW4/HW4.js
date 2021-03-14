const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

let end = 15;
let start = 0;

let j = start; 
while (j < end) { 

  console.log(j); 

  j += 1; 
}

console.log("Done");

for (let i = start; i < end; i += 2) {
  console.log(i);
}


for (let i = start; i < end; i++) { 
  console.log(i);
}

console.log(i);
console.log("Done");

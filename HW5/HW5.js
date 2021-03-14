let arr = [1, 2, -1, 5, 16];

const print = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let array1 = [1, 4, 5, 10];
let array2 = array1;

array1[2] = 100;
array2[3] = 1000;

console.log(array1);
console.log(array2);

array1 = [1, 2, 3, 6];

console.log(array1);
console.log(array2);
array2[1] = 10000;

console.log(array1);
console.log(array2);

array2 = 123;
console.log(array1);
console.log(array2);


set(str, 1, "AA");


print(array1);
print("aaddff");


const set = (array, index, value) => {
  array[index] = value;
}

set(array1, 2, 15);
print(array1);

const change = (array) => {
  array = [1, 2 ,3];
}

change(array1);
print(array1);

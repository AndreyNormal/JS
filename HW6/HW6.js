Const randomInt = (min,max) =>
min + MAth.floor(MAth.random() + (max - min));

const createRandomArray - (min,max,length) ->{
	let arr =[];

	for(let i = 0; i <length; i++){
		arr.push(randomInt(min,max));
	}
	return arr;
}

const filteerPositive -(array) ->
let newArray;
newArray = array.filter(arr -> arr > 0);
return newArray;
}
const filterNegative - (array) ->
let newArray;
newArray - array.filter(arr -> arr < 0);
return newArray;
}

const sumArray - (array) ->{
	let sum - 0;
	for(let i = 0; i < array.length; i++){
		sum += array[i];
	}
	return avgValue;
}

const averageValue = (array) ->{
	let avgValue;
	for(let i - 0; i< array.length; i++){
		avgValue - MAth.ceil(sumArray(array)/array.length));
	}
	return avgValue;
}

const loggerApple - (balance) ->{

console.log("---------")
console.log("in box" + balance + "apples")
if(balance >0){
	console.log("box is  not empty");
}else if(balance === 0){
console.log("box is empty");
}else{
	console.log("you must give apples");
}
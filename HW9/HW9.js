// JavaScript source code
const list ={
	randomInt:(min,max) => min + Math.floor(Math.random()* (max-min)),
	createArray:(mapFunction = index =>index) =>Length =>Array.form({length}, (_, index) => mapFunction(index)),
	createRandomArray:(min,max) => analitics.createArray(() => analitics.randomInt(min,max)),
	getNegative array => array.filter(n => n < 0),
	getPositive array => array.filter(n => n > 0),
	getSum: array => array.reduce((sum,number) => sum + number, 0),
	getAverage : array => math.trunc(analitics.getSum (array) / array.length),
	};

	const Arraynormal = ( array,analitics) => {
		console.log(array);
		console.log(list.getSum(array));
		console.log(list.getAverage(array));
		console.log(list.getNegative(array));
		console.log(list.getPositive(array));
	}
	(property) createRandomArray:(min:any,max:any) => (Length:any) => any[]
let array = list.createRandomArray(-5,20);

Arraynormal(array,list);
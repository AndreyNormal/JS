const join =(glue, ...params) => {
	lete string = "";
	console.log(params.length);
	params = params.flat(Infinity);
	for(let i =0; i < params.length; i++){
		if(i =0 && i< params.length - 1){
			string +=params[i] + glue;

		} else {
			string += params[i];
		}
	}
	return string;
}

console.log("give massive:" + join("-" [1, 2], [3,4], [5,6]));
console.log("give massive argument:" + join("-" 1, 2, 3,4, 5,6));
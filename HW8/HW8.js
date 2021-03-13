
const reduce = (array) => {
  let accumulator = "";

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = str + element + ((index < array.length - 1) ? glue : "") 
    accumulator += result;
  }

  return accumulator;
}


const join2 = (glue, array) => 
  array.reduce(
    (str, element, index) => str + element + ((index < array.length - 1) ? glue : ""), 
    ""
  );

console.log(join2("--", array));



const map = (array) => {
  let mappedArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = doSomething(element);
    mappedArray.push(result);
  }

  return mappedArray;
}

const map = (array, operation) => 
  array.reduce((mapped, element, index) => mapped.push(operation(element, index)), [])




const filter = (array) => {
  let filterArray = []; 

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = predicat(element);
    if (result) {
      filterArray.push(element); 
    }
  }

  return filterArray;
}

const map = (array, predicate) => 
  array.reduce((filtered, element, index) => {
    if (predicate(element, index)) {
      filtered.push(element); 
    } 
    return filtered;
  }, []);



array.filter(predicate)


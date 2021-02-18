 console.log('Welcome to 30DaysOfJavaScript');

 // Creating an array using split

  let js = 'Python'
  console.log(js.split(''));

  const companies = 'Facebook, Google, Microsoft, IBM, Oracle, Amazon'
  console.log(companies.split(','));


  const fruit = ['Banana', 'orange', 'citron']
  let indexOgth = fruit.length - 1
  let index = fruit.indexOf('Banana');
  
  console.log(fruit);
  console.log(index);
  console.log(fruit[indexOgth]); 
  console.log(fruit[0]);

const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya',]
countries[0] = 'Afganistan';
let lastindex = countries.length - 1;
countries[lastindex] = 'korea';

console.log(countries);
console.log(countries.includes("Afganistan"));
console.log(countries.includes("Albania"));


const numbers = [1,2,3,4,5]
console.log(numbers.toString());
console.log(numbers.slice());
console.log(numbers.splice());
console.log(numbers.splice(0,1));

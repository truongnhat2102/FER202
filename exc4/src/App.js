import './App.css';

var people1 = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 }
]

let searchFirstTeen = () => {
  for (let human of people1) {
    if (human.age >= 10 && human.age <= 20) {
      console.log(human);
      return human.name;
    }
  }
}

let searchAllTeens = () => {
  let teens = "";
  for (let human of people1) {
    if (human.age >= 10 && human.age <= 20) {
      teens += human.name + ", ";
    }
  }
  return teens;
}

let checkAllTeen = () => {
  for (let human of people1) {
    if (human.age <= 10 || human.age >= 20) {
      return false;
    }
  }
  return true;
}

let checkExistTeen = () => {
  for (let human of people1) {
    if (human.age >= 10 || human.age <= 20) {
      return true;
    }
  }
  return false;
}

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

let printCompany = () => {
  let result = "";
  companies.forEach(company => {
    result += "{ name: " + company.name + ", category: " + company.category + ", start: " + company.start + ", end: " + company.end + " }<br></br>";
  });
  return result;
}

let searchCompanySoon = () => {
  let result = "";
  companies.forEach(company => {
    if (company.start > 1987) {
      result += company.name + ", ";
    }
  });
  if (result == "") {
    result = "Can not found"
  }
  return result;
}

let searchCompanyByCategory = () => {
  const retailCompanies = companies.filter(company => company.category === 'Retail');
  let result = "";
  retailCompanies.forEach(company => {
    result += "{ name: " + company.name + ", category: " + company.category + ", start: " + company.start + ", end: " + company.end + " }<br></br>";
  });
  return result;
}

let sortAscEndDate = () => {
  const sortedCompanies = companies.sort((company1, company2) => company1.end - company2.end);
  let result = "";
  sortedCompanies.forEach(company => {
    result += "{ name: " + company.name + ", category: " + company.category + ", start: " + company.start + ", end: " + company.end + " }<br></br>";
  });
  return result;
}

let sortDescAge = () => {
  const sortedCompaniesbyAge = ages.sort((company1, company2) => company2.age - company1.age);
  let result = "";
  sortedCompaniesbyAge.forEach(company => {
    result += "{ name: " + company.name + ", category: " + company.category + ", start: " + company.start + ", end: " + company.end + " }<br></br>";
  });
  return result;
}

//Print the sum if you add all the ages using reduce
const sum3 = ages.reduce((acc, value) => acc + value, 0);
console.log(sum3)
// Create a function that takes an unknown number of arguments that are numbers and return their sum

function sum4(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(`Sum: ${sum4(1, 2, 3, 4, 5)}`); // Output: 15
// •	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, 
// if the argument is an array, it should add its values to the array that will be returned by the function
function combieneAndFlaten(...args){
  const result =[]
  for (const arg of args){
    if(Array.isArray(arg)){
      result.push(...arg)
    } else{
      result.push(arg)
    }
  }
  return result
}
const date = combieneAndFlaten(1,2,3,4,"Hello",5,6)
console.log(date)
//•	Destructuring the property street in a variable named street from the object person
const { address: { street } } = person;

console.log(street); // Output: Lalaland 12
//•	Write a function that every time you call it, it returns a number that increments starting from 0
function getNextNumber() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  }
}
const numberGenerator = getNextNumber();
console.log(numberGenerator()); // Output: 1
console.log(numberGenerator()); // Output: 2
console.log(numberGenerator()); // Output: 3
//•	Create a function that destructors the query parameters of a URL and adds them in an object as key value pairs and then returns the object
function getQueryParamsFromUrl(url) {
  if (!url || !url.includes('?')) {
    return {};
  }
  const queryString = url.split('?')[1];
  const params = new URLSearchParams(queryString);
  const queryParams = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }

  return queryParams;
}
const url = "https://www.example.com/search?q=javascript&sort=newest";
const queryParams = getQueryParamsFromUrl(url);
console.log(queryParams); // Output: { q: "javascript", sort: "newest" }

// require4
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `Rectangle [length=${this.length}, width=${this.width}]`;
  }
}


class Triangle extends Rectangle {
  constructor(length, width, height) {
    super(length, width); 
    this.height = height;
  }

  getArea() {
    return (this.length * this.height) / 2; 
  }

  toString() {
    return `Triangle [length=${this.length}, width=${this.width}, height=${this.height}]`;
  }
}

// Usage example
const rectangle = new Rectangle(5, 4);
console.log(rectangle.getArea()); // Output: 20
console.log(rectangle.toString()); // Output: Rectangle [length=5, width=4]

const triangle = new Triangle(3, 4, 6);
console.log(triangle.getArea()); // Output: 9
console.log(triangle.toString()); // Output: Triangle [length=3, width=4, height=6]


function App() {
  return (
    <>
      <div>
        <h1>Require 1</h1>
        <p style={{ color: 'black' }}>
          Find the first person off the people array is teenager: {searchFirstTeen()} <br></br>
          Find the all person of the people array is teenager: {searchAllTeens()} <br></br>
          Check if every person of the people array is teenager , which should return true or false: {checkAllTeen().toString()} <br></br>
          Checks if any person of the people array is teenager, which should return true or false: {checkExistTeen().toString()} <br></br>
        </p>
        <h1>Require 2</h1>
        <p style={{ color: 'black' }}>

        </p>
        <h1>Require 3</h1>
        <p style={{ color: 'black' }}>
          Print the name of each company using forEach:
          {printCompany()} <br></br>
          Print the name of each company that started after 1987: {searchCompanySoon}<br></br>
          Search company with category 'Reatil': {searchCompanyByCategory()}<br></br>
          Sort the companies based on their end date in ascending order: {sortAscEndDate()}<br></br>
          Sort the companies based on their age in descending  order: {sortDescAge()}
        </p>
      </div>
    </>

  );
}

export default App;

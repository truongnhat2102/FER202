import './App.css';

// let square = (num) => {
//   return num*num;
// }

// let person = {
//   name: 'John Cena',
//   age: 24,
//   greet: function() {
//     console.log(`Hello ${this.name} `)
//     if (this.age > 25) {
//       console.log('You are too old')
//       return;
//     }
//     console.log('You are too young')
//   }
// }
//  person.greet()


// let sum = (...nums) => {
//   let sum = 0
//   for(let num of nums){
//     if (num % 2 === 0) {
//       sum += num
//     }
    
//   }
//   return 'Total: '+ sum
// }

// creating a promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      resolve(randomNum);
    } else {
      reject('Error: Random number is greater than 0.5');
    }
  }, 2000)
});

// Handling promises
myPromise
.then(result => {
  console.log('Success', result);
})
.catch(error => {
  console.log('Error: ', error);
})
// chaining promises


function App() {
  return (
    <>
      
    </>
  );
}

export default App;

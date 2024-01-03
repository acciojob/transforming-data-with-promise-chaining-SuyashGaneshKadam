// Select elements 
const input = document.getElementById('ip');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// Add event listener
btn.addEventListener('click', () => {

  // Get input value
  let number = parseInt(input.value);

  // Chain promises
  firstPromise(number)
    .then(num => secondPromise(num)) 
    .then(num => thirdPromise(num))
    .then(num => fourthPromise(num))
    .then(num => fifthPromise(num))
    .then(finalResult => {
      output.textContent = `Final Result: ${finalResult}`; 
    })
    .catch(err => {
      console.error(err);
      output.textContent = 'Error!'; 
    });
});

// Promise functions
const LONG_DELAY = 4000;
const SHORT_DELAY = 2000; 

function firstPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      output.textContent = `Result: ${num}`;
      resolve(num);
    }, LONG_DELAY);
  });
}

function secondPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      output.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  });
}

function thirdPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num * 2;
      output.textContent = `Result: ${result}`;
      resolve(result); 
    }, 1000);
  });
}

function fourthPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num - 3;
      output.textContent = `Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

function fifthPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num / 2;
      output.textContent = `Result: ${result}`;
      resolve(result);
    }, 1000);
  }); 
}
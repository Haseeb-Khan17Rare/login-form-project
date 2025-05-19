// const form = document.getElementById('bmi-form');
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const height = document.getElementById('height').value;
//   const weight = document.getElementById('weight').value;
//   const result = document.getElementById('bmi-result');

//   if (height === '' || height <= 0 || isNaN(height)) {
//     result.innerHTML = 'Please enter a valid height.';
//   }
//   else if (weight === '' || weight <= 0 || isNaN(weight)) {
//     result.innerHTML = 'Please enter a valid weight.';
//   }
//   else {
//     const bmi = weight / ((height / 100) ** 2);
//     result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
//   }
// });


// const clock = document.getElementById('clock')
// setInterval(function () {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// },1000)



// let btn = document.getElementById('btn');
// let outputtext = document.getElementById('outputtext');

// // Correct: Use Math (capital M)
// let number = Math.floor(Math.random() * 100) + 1;

// btn.addEventListener('click', function () {
//   // Correct: use .value instead of .ariaValueMax
//   let input = document.getElementById('userinput').value;

//   // Convert string input to number
//   input = parseInt(input);

//   // Check for NaN or invalid input
//   if (isNaN(input)) {
//     outputtext.innerHTML = "⛔ Please enter a valid number!";
//     return;
//   }

//   // Correct: outputtext instead of undefined variable 'output'
//   if (input === number) {
//     outputtext.innerHTML = `🎉 You guessed right! The number was ${number}`;
//   } else if (input < number) {
//     outputtext.innerHTML = `📈 You guessed too low!`;
//   } else {
//     outputtext.innerHTML = `📉 You guessed too high!`;
//   }
// });

const Input = document.getElementById('input');
const Button = document.getElementById('submit');
const body = document.querySelector('body');

// Listen for keypress event on the input field
Input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    Input.value = "You Pressed Enter"; // Update value when Enter is pressed
  } else {
    Input.value = "You Did Not Press Enter"; // Update value for other keys
  }
});

// Listen for button click to change background color
Button.addEventListener('click', function () {
  body.style.backgroundColor = 'green'; // Change background color to green
});

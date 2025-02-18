# Decimal to Binary Converter with Call Stack Animation

## Overview

This project is a JavaScript-based web application that converts a decimal number to binary using recursion. It includes an animation to visually demonstrate how recursion works with a call stack.

## Features

- Converts decimal numbers to binary using recursion.
- Provides an animated visualization of how recursion processes the conversion.
- Includes input validation to ensure proper user input.

## Technologies Used

- HTML
- CSS
- JavaScript

## File Structure

```
- index.html  (HTML structure for input and result display)
- styles.css  (CSS for styling the UI and animations)
- script.js   (JavaScript logic for conversion and animations)
```

## How It Works

1. **User Input:** The user enters a decimal number in an input field.
2. **Validation:** The script checks if the input is a valid non-negative number.
3. **Conversion:** The `decimalToBinary` function recursively converts the number to binary.
4. **Animation:** If the input is `5`, an animation visually represents how recursion works.
5. **Output:** The final binary result is displayed.

## Code Explanation

### Global Variables

```js
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');
```

These variables store references to the HTML elements for user interaction and display.

### Recursion Function

```js
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};
```

- **Base Case:** If the input is `0` or `1`, return it as a string.
- **Recursive Case:** Divide the number by `2`, recursively call the function, and append the remainder.

### Call Stack Animation

```js
const showAnimation = () => {
  result.innerText = 'Call Stack Animation';
  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `<p id="${obj.inputVal}" class="animation-frame">decimalToBinary(${obj.inputVal})</p>`;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });
  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};
```

- This function animates the recursive calls and their return process.

### Input Validation & Execution

```js
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert('Please provide a decimal number greater than or equal to 0');
    return;
  }
  if (inputInt === 5) {
    showAnimation();
    return;
  }
  result.textContent = decimalToBinary(inputInt);
  numberInput.value = '';
};
```

- Ensures input is a valid non-negative integer before processing.

### Event Listeners

```js
convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkUserInput();
  }
});
```

- Triggers conversion when the user clicks the button or presses `Enter`.

## How to Use

1. Open `index.html` in a web browser.
2. Enter a decimal number in the input field.
3. Click the "Convert" button or press `Enter`.
4. See the binary conversion and animation (if applicable).

## Future Improvements

- Enhance UI with better animations.
- Support for larger numbers with optimized recursion.
- Dark mode toggle.

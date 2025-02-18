

// declare global variables
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// add animation data array
const animationData = [
    {
        inputVal: 5,
        addElDelay: 1000
    },
    {
        inputVal: 2,
        addElDelay: 1500
    },
    {
        inputVal: 1,
        addElDelay: 2000
    }
];
// recursion basics 
/*
const countDownAndUp = (number) => {
    console.log(number);

    if (number === 0) {
        console.log("Reached the base case");
        return;
    } else {
        countDownAndUp(number - 1);
        console.log(number);
    }
};

countDownAndUp(3);
*/

// function to convert decimal to binary
const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
}

// function to animate the result
const showAnimation = () => {
    setTimeout(() => console.log("Eli"), 500)
    setTimeout(() => {
        console.log("Kobby")
    }, 1000)
    setTimeout(() => {
        console.log("Ackah")
    }, 1500)
}

// function to check the value in the number input
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value)

    if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    if (inputInt === 5) {
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
}


// add event listeners to convertBtn and numberInput
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
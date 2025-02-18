// declare global variables
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// function to convert decimal to binary
const decimalToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];


    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }

    console.log("Inputs:", inputs);
    console.log("Quotients:", quotients);
    console.log("Remainders:", remainders);

    result.innerText = `${remainders.reverse().join("")}`
}

// function to check the value in the number input
const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
}


// add event listeners to convertBtn and numberInput
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
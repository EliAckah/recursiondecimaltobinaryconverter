// declare global variables
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// function to check the value in the number input
const checkUserInput = () => {
    if (!numberInput.value) {

    }
    console.log(numberInput.value);
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
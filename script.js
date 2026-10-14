const arrayContainer = document.getElementById("array-container");
const generateBtn = document.getElementById("generate-btn");

let num = [];

function generateArray() {
    // Clear the previous bars
    arrayContainer.innerHTML = "";

    // Generate 5 random numbers
    num = [];

    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 200) + 1;
        num.push(randomNum);
    }

    // Display the new array
    arrangeNum();
}

function arrangeNum() {
    for (let i = 0; i < num.length; i++) {
        const bar = document.createElement("div");

        bar.style.height = num[i] + "px";
        bar.classList.add("bar");

        arrayContainer.appendChild(bar);
    }
}

// Generate a new array when the button is clicked
generateBtn.addEventListener("click", generateArray);

// Display an array when the page first loads
generateArray();

function bubbleSort() {
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length - i - 1; j++) {

            if (num[j] > num[j + 1]) {
                // Store the left number temporarily
                const temp = num[j];

                // Move the right number to the left
                num[j] = num[j + 1];

                // Move the stored number to the right
                num[j + 1] = temp;
            }
        }
    }

    console.log(num);
}
const arrayContainer = document.getElementById("array-container");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

let num = [];
let isSorting = false;

// Generate a random array
function generateArray() {
    if (isSorting) return;

    arrayContainer.innerHTML = "";
    num = [];

    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 200) + 1;
        num.push(randomNum);
    }

    arrangeNum();
}

// Display the array as bars
function arrangeNum() {
    arrayContainer.innerHTML = "";

    for (let i = 0; i < num.length; i++) {
        const bar = document.createElement("div");

        bar.style.height = num[i] + "px";
        bar.classList.add("bar");

        arrayContainer.appendChild(bar);
    }
}

// Pause the algorithm to make animations visible
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Bubble Sort with animation
async function bubbleSort() {
    if (isSorting) return;

    isSorting = true;
    generateBtn.disabled = true;
    sortBtn.disabled = true;

    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length - i - 1; j++) {
            // Highlight the two bars being compared
            bars[j].style.backgroundColor = "orange";
            bars[j + 1].style.backgroundColor = "orange";

            await sleep(1000);

            if (num[j] > num[j + 1]) {
                // Swap the values in the array
                const temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;

                // Update the heights of the bars
                bars[j].style.height = num[j] + "px";
                bars[j + 1].style.height = num[j + 1] + "px";
            }

            // Restore the original bar color
            bars[j].style.backgroundColor = "#0f766e";
            bars[j + 1].style.backgroundColor = "#0f766e";
        }
    }

    // Mark all bars as sorted
    bars.forEach(bar => {
        bar.style.backgroundColor = "#22c55e";
    });

    isSorting = false;
    generateBtn.disabled = false;
    sortBtn.disabled = false;
}

// Button events
generateBtn.addEventListener("click", generateArray);
sortBtn.addEventListener("click", bubbleSort);

// Generate the initial array
generateArray();
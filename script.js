const quoteText = document.getElementById("quoteText");
const quotes = [
    "Stay strong!",
    "Keep going!",
    "You're doing amazing!",
    "Don't give up!",
    "Every step counts!"
];
quoteText.innerText = quotes[Math.floor(Math.random() * quotes.length)];

function addEntry() {
    const steps = document.getElementById("steps").value;
    const calories = document.getElementById("calories").value;

    if (steps && calories) {
        const listItem = document.createElement("li");
        listItem.innerText = `You walked ${steps} steps and burned ${calories} calories.`;
        document.getElementById("entryList").appendChild(listItem);

        document.getElementById("steps").value = "";
        document.getElementById("calories").value = "";
    }
}

function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("bmiResult");

    if (height && weight) {
        const h = height / 100;
        const bmi = (weight / (h * h)).toFixed(1);
        let status = "";

        if (bmi < 18.5) status = "Underweight";
        else if (bmi < 25) status = "Normal";
        else if (bmi < 30) status = "Overweight";
        else status = "Obese";

        result.innerText = `Your BMI is ${bmi} (${status})`;
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

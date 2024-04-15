// 1. Locate the Element(s)
let square = document.getElementById('square');
let words = document.getElementById('words');

// 2. Write the functionality needed when the event occurs
function changeColour(colour) {
    square.style.background = colour;
}

function greeting() {
    console.log("Welcome to Flatland");
    words.innerHTML = "Welcome to Flatland.<br> I am Square!";
}

function showMessage() {
    let message = "Build a " + createBuzzwordPhrase();
    words.innerHTML = message;
}

function createBuzzwordPhrase() {
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}

// 3. Link the element and event to the functionality
//    i.e add an event listener
square.addEventListener('click', (event) => showMessage());
square.addEventListener('mouseover', (event) => changeColour('grey'));
square.addEventListener('mouseout', (event) => changeColour('red'));

document.onload = greeting();

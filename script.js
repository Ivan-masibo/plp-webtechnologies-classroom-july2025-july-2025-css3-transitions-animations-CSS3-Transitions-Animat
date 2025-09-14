// functions with scope, parameters and return values

// global variable to store tasks
let animationState = false;

// function with parameters and return value
function toggleAnimation(elementId, action) {
    const element = document.getElementById(elementId);
    if (element) {
        if (action === 'start') {
            element.classList.add('move');
            animationState = true;
            return 'Animation started!';
        } else if (action === 'reset') {
            element.classList.remove('move');
            animationState = false;
            return 'Animation reset!';
        } else {
            return 'Invalid action!';
        }
    } else {
        return 'Element not found!';
    }
}

// local scope example
function logAnimationMessage(message) {
    let localMessage = `Status: ${message}`;
    console.log(localMessage);
}

// Event listeners for buttons
document.getElementById('animateBtn').addEventListener('click', () => {
    const result = toggleAnimation('animatedBox', 'start');
    logAnimationMessage(result);
    document.getElementById('status').innerText = result;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    const result = toggleAnimation('animatedBox', 'reset');
    logAnimationMessage(result);
    document.getElementById('status').innerText = result;
});

// Flip card with JS
document.getElementById('flipCardBtn').addEventListener('click', () => {
    document.getElementById('card').classList.toggle('flip');
});
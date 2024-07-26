let delay = 5; // in seconds
delay *= 1000; // converted to milliseconds

// setInterval for random number generation
setInterval(() => {
    const randomNumber = Math.random();
    console.log(`Random number: ${randomNumber}`);
}, delay);

let timeRemaining = delay;

// setInterval for time remaining
setInterval(() => {
    timeRemaining -= 1000;
    if(timeRemaining <= 0) {
        timeRemaining = delay;
    }
    else {
        console.log(`Time remaining: ${timeRemaining / 1000} seconds`);
    }
}, 1000);
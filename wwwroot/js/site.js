// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//-------------------------------- start of file  ------------------------------------// 

// Click counter game: Click the button to start a 30-second timer and count clicks.
// Timer starts on first click. Displays total clicks when time is up.

document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const clickButton = document.getElementById('clickButton');
    const counter = document.getElementById('counter');
    const timer = document.getElementById('timer');
    
    // Initialize variables
    let clicks = 0;
    let timeLeft = 30;
    let timerInterval;
    let started = false;

    // Add click event listener to button
    clickButton.addEventListener('click', function() {
        // Start timer on first click
        if (!started) {
            started = true;
            // Set up countdown timer
            timerInterval = setInterval(function() {
                timeLeft--;
                timer.textContent = 'Time left: ' + timeLeft + 's';
                // When timer reaches zero
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    clickButton.disabled = true;
                    counter.textContent = 'Total Clicks: ' + clicks;
                }
            }, 1000); // Update every second
        }
        // Increment click count
        clicks++;
        counter.textContent = 'Clicks: ' + clicks;
    });
});
//------------------------------------- end of file  ---------------------------------------------//
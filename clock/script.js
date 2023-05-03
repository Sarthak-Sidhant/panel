// Get the clock elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

// Get the timer elements
const timerHoursElement = document.getElementById('timer-hours');
const timerMinutesElement = document.getElementById('timer-minutes');
const timerSecondsElement = document.getElementById('timer-seconds');
const startTimerButton = document.getElementById('start-timer-button');
const pauseTimerButton = document.getElementById('pause-timer-button');
const stopTimerButton = document.getElementById('stop-timer-button');

// Get the stopwatch elements
const stopwatchElement = document.getElementById('stopwatch');
const startStopwatchButton = document.getElementById('start-stopwatch-button');
const pauseStopwatchButton = document.getElementById('pause-stopwatch-button');
const resetStopwatchButton = document.getElementById('reset-stopwatch-button');

// Get the alarm elements
const alarmHoursElement = document.getElementById('alarm-hours');
const alarmMinutesElement = document.getElementById('alarm-minutes');
const setAlarmButton = document.getElementById('set-alarm-button');
const cancelAlarmButton = document.getElementById('cancel-alarm-button');

// Display the current date and time
displayDateTime();

// Update the clock every second
setInterval(displayDateTime, 1000);

// Set up the timer event listeners
startTimerButton.addEventListener('click', startTimer);
pauseTimerButton.addEventListener('click', pauseTimer);
stopTimerButton.addEventListener('click', stopTimer);

// Set up the stopwatch event listeners
startStopwatchButton.addEventListener('click', startStopwatch);
pauseStopwatchButton.addEventListener('click', pauseStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

// Set up the alarm event listeners
setAlarmButton.addEventListener('click', setAlarm);
cancelAlarmButton.addEventListener('click', cancelAlarm);

// Clock and date functions
function displayDateTime() {
  // Get the current date and time
  const currentDateTime = new Date();

  // Display the current time
  hoursElement.textContent = currentDateTime.getHours().toString().padStart(2, '0');
  minutesElement.textContent = currentDateTime.getMinutes().toString().padStart(2, '0');
  secondsElement.textContent = currentDateTime.getSeconds().toString().padStart(2, '0');

  // Display the current date
  dayElement.textContent = currentDateTime.getDate().toString().padStart(2, '0');
  monthElement.textContent = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
  yearElement.textContent = currentDateTime.getFullYear();
}

// Timer function
let timerId;
let timerDuration;

function startTimer() {
  const hours = Number(timerHoursElement.value);
  const minutes = Number(timerMinutesElement.value);
  const seconds = Number(timerSecondsElement.value);

  // Calculate the timer duration in milliseconds
  timerDuration = ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;

  // Start the timer
  timerId = setInterval(updateTimer, 1000);

  // Disable the timer inputs and the start button
  timerHoursElement.disabled = true;
  timerMinutesElement.disabled = true;
  timerSecondsElement.disabled = true;
  startTimerButton.disabled = true;
}

function pauseTimer() {
  // Pause the timer
  clearInterval(timerId);

  // Enable the stop button and disable the pause button
  stopTimerButton.disabled = false;
  pauseTimerButton.disabled = true;
}

function stopTimer() {
  // Stop the timer and reset
  function updateTimer() {
    // Subtract one second from the timer duration
    timerDuration -= 1000;
    
    if (timerDuration <= 0) {
    // Stop the timer and play the alarm sound
    clearInterval(timerId);
    playAlarm();
    // Enable the timer inputs and the start button
timerHoursElement.disabled = false;
timerMinutesElement.disabled = false;
timerSecondsElement.disabled = false;
startTimerButton.disabled = false;
} else {
    // Display the remaining time
    const remainingHours = Math.floor(timerDuration / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((timerDuration % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((timerDuration % (1000 * 60)) / 1000);
    timerHoursElement.value = remainingHours.toString().padStart(2, '0');
timerMinutesElement.value = remainingMinutes.toString().padStart(2, '0');
timerSecondsElement.value = remainingSeconds.toString().padStart(2, '0');
}
}
// Stopwatch function
let stopwatchId;
let stopwatchStartTime;
let stopwatchElapsedTime = 0;

function startStopwatch() {
// Start the stopwatch
stopwatchStartTime = Date.now() - stopwatchElapsedTime;
stopwatchId = setInterval(updateStopwatch, 10);

// Disable the start button and enable the pause button
startStopwatchButton.disabled = true;
pauseStopwatchButton.disabled = false;
}

function pauseStopwatch() {
// Pause the stopwatch
clearInterval(stopwatchId);

// Enable the start button and disable the pause button
startStopwatchButton.disabled = false;
pauseStopwatchButton.disabled = true;
}

function resetStopwatch() {
// Stop the stopwatch and reset the elapsed time
clearInterval(stopwatchId);
stopwatchElapsedTime = 0;

// Reset the stopwatch display
stopwatchElement.textContent = '00:00:00.000';

// Enable the start button and disable the pause button
startStopwatchButton.disabled = false;
pauseStopwatchButton.disabled = true;
}

function updateStopwatch() {
// Calculate the elapsed time
stopwatchElapsedTime = Date.now() - stopwatchStartTime;

// Convert the elapsed time to hours, minutes, seconds, and milliseconds
const hours = Math.floor(stopwatchElapsedTime / (1000 * 60 * 60));
const minutes = Math.floor((stopwatchElapsedTime % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((stopwatchElapsedTime % (1000 * 60)) / 1000);
const milliseconds = Math.floor(stopwatchElapsedTime % 1000);

// Display the elapsed time
stopwatchElement.textContent = ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')};
}
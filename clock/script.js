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
const startTimerButton = document.getElementById('start-timer');
const pauseTimerButton = document.getElementById('pause-timer');
const stopTimerButton = document.getElementById('stop-timer');

// Get the stopwatch elements
const stopwatchElement = document.getElementById('stopwatch');
const startStopwatchButton = document.getElementById('start-stopwatch');
const pauseStopwatchButton = document.getElementById('pause-stopwatch');
const resetStopwatchButton = document.getElementById('reset-stopwatch');
const stopwatchHoursElement = document.getElementById('sw-hours');
const stopwatchMinutesElement = document.getElementById('sw-minutes');
const stopwatchSecondsElement = document.getElementById('sw-seconds');
const stopwatchMillisecondsElement = document.getElementById('sw-milliseconds');

// Get the alarm elements
const alarmHoursElement = document.getElementById('alarm-hours');
const alarmMinutesElement = document.getElementById('alarm-minutes');
const setAlarmButton = document.getElementById('set-alarm-button');
const cancelAlarmButton = document.getElementById('cancel-alarm-button');

setInterval(updateTimer, 10);
setInterval(updateStopwatch, 10);

let timerTotalTime = null 
let isTimerRunning = false 
let timerTimeRan = null 
let timerMs = 0

let isStopwatchRunning = false
let stopwatchTimeRan = null 

function updateTimer() {
	if (isTimerRunning) {
		timerTimeRan += 10
		if (timerShouldStop()) {
			stopTimer()
		}
		// console.log("Hours: " + timerHoursElement.value)
		// console.log("Minutes: " + timerMinutesElement.value)
		// console.log("Seconds: " + timerSecondsElement.value)
		updateTimerValues(timerTimeRan)
	}
}

function updateStopwatch() {
	if (isStopwatchRunning) {
		stopwatchTimeRan += 10
		console.log("stopwatchTimeRan: " + stopwatchTimeRan)
		updateStopwatchValues(stopwatchTimeRan)
	}
}

function updateStopwatchValues(elapsedTimeInMs) {
	const [hours, minutes, seconds, milliseconds] = getHrMinSecMs(elapsedTimeInMs)

	console.log("Hours: " + hours)
	console.log("Minutes: " + minutes)
	console.log("Seconds: " + seconds)
	console.log("Milliseconds: " + milliseconds)
	console.log("Is disabled: " + stopwatchMillisecondsElement.disabled)
	stopwatchHoursElement.value   = hours.toString().padStart(2, '0')
	stopwatchMinutesElement.value = minutes.toString().padStart(2, '0')
	stopwatchSecondsElement.value = seconds.toString().padStart(2, '0')
	stopwatchMillisecondsElement.value = milliseconds.toString().padStart(3, '0')
}

let startStopwatch = function() {
	if (stopwatchTimeRan === null) {
		stopwatchTimeRan = 0
	}
	isStopwatchRunning = true
	setStopwatchToDisabled()
}

let pauseStopwatch = function() {
	isStopwatchRunning = false
	setStopwatchToEnabled()
}

let resetStopwatch = function() {
	isStopwatchRunning = false
	stopwatchTimeRan = 0
	setStopwatchToEnabled()
}

function updateTimerValues(elapsedTimeInMs) {
	timerTimeLeft = timerTotalTime - elapsedTimeInMs
	const [hours, minutes, seconds, milliseconds] = getHrMinSecMs(timerTimeLeft)

	timerHoursElement.value   = Number(hours).toString().padStart(2, '0')
	timerMinutesElement.value = Number(minutes).toString().padStart(2, '0')
	timerSecondsElement.value = Number(seconds).toString().padStart(2, '0')
	timerMs = Number(milliseconds)
}

function startTimer() {
	if (timerTimeRan === null) {
		timerTimeRan = 0
	}
	timerTotalTime = getMsFromHoursMinSecMs(getTimerValues()[0], getTimerValues()[1], getTimerValues()[2], timerMs)
	isTimerRunning = true
  setTimerToDisabled()
}

function pauseTimer() {
	isTimerRunning = false
	setTimerToEnabled()
}

function stopTimer() {
	isTimerRunning = false
	timerTimeRan = totalTimerTime
	setTimerToEnabled()
}

/* 
Misc utility things 
*/

function getHrMinSecMs(elapsedTime) {
	return [
		Math.floor((elapsedTime / (1000 * 60 * 60)) % 24),
		Math.floor((elapsedTime / (1000 * 60)) % 60),
		Math.floor((elapsedTime / 1000) % 60),
		Math.floor(elapsedTime % 1000)
	]
}

function getMsFromHoursMinSecMs(hours, minutes, seconds, milliseconds) {
	return (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000) + milliseconds
}

function timerShouldStop() {
	return timerTimeRan >= timerTotalTime
}

function setTimerToDisabled() {
	timerHoursElement.disabled = true
	timerMinutesElement.disabled = true
	timerSecondsElement.disabled = true
}

function setTimerToEnabled() {
	timerHoursElement.disabled = false
	timerMinutesElement.disabled = false
	timerSecondsElement.disabled = false
}

function setStopwatchToDisabled() {
	stopwatchHoursElement.disabled = true
	stopwatchMinutesElement.disabled = true
	stopwatchSecondsElement.disabled = true
	stopwatchMillisecondsElement.disabled = true
}

function setStopwatchToEnabled() {
	stopwatchHoursElement.disabled = false
	stopwatchMinutesElement.disabled = false
	stopwatchSecondsElement.disabled = false
	stopwatchMillisecondsElement.disabled = false
}

function getTimerValues() {
	return [
		timerHoursElement.value,
		timerMinutesElement.value,
		timerSecondsElement.value,
		timerMs
	]
}

/*

*/

// Display the current date and time
displayDateTime();

// Update the clock every second
setInterval(displayDateTime, 1000);

// Set up the timer event listeners
// startTimerButton.addEventListener('click', startTimer);
// pauseTimerButton.addEventListener('click', pauseTimer);
// stopTimerButton.addEventListener('click', stopTimer);

// // Set up the alarm event listeners
// setAlarmButton.addEventListener('click', setAlarm);
// cancelAlarmButton.addEventListener('click', cancelAlarm);



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









// Alarm function
let alarmId;

function setAlarm() {
  const hours = Number(alarmHoursElement.value);
  const minutes = Number(alarmMinutesElement.value);

  // Get the current date and time
  const currentDateTime = new Date();

  // Calculate the alarm time
  let alarmTime = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), hours, minutes, 0, 0);

  if (alarmTime <= currentDateTime) {
    // If the alarm time is in the past, add one day to the alarm time
    alarmTime.setDate(alarmTime.getDate() + 1);
  }

  // Calculate the time difference between the current time and the alarm time
  const timeDifference = alarmTime - currentDateTime;

  // Display the time remaining until the alarm goes off
  const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  alarmMessageElement.textContent = "Alarm set for ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}. Time remaining: ${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')"
};

// What is this code for?
/*
// Start the alarm timer
alarmId = setTimeout(() => {
  playAlarm();
  alarmMessageElement.textContent = '';
}, timeDifference);
*/

function stopAlarm() {
  // Stop the alarm timer
  clearTimeout(alarmId);

  // Reset the alarm message
  alarmMessageElement.textContent = '';
}

function playAlarm() {
  // Play the alarm sound
	// TODO: `alarmAudio` is not defined
  // alarmAudio.play();
}

// Add event listeners to the timer inputs and buttons
// timerHoursElement.addEventListener('input', validateTimerInput);
// timerMinutesElement.addEventListener('input', validateTimerInput);
// timerSecondsElement.addEventListener('input', validateTimerInput);
startTimerButton.addEventListener('click', startTimer);
pauseTimerButton.addEventListener('click', pauseTimer);
stopTimerButton.addEventListener('click', stopTimer);

// Add event listeners to the stopwatch buttons
startStopwatchButton.addEventListener('click', startStopwatch);
pauseStopwatchButton.addEventListener('click', pauseStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

// Add event listeners to the alarm inputs and buttons
//alarmHoursElement.addEventListener('input', validateAlarmInput);
//alarmMinutesElement.addEventListener('input', validateAlarmInput);
//setAlarmButton.addEventListener('click', setAlarm);
//stopAlarmButton.addEventListener('click', stopAlarm);

// Initialize the clock
updateTimer();

// Update the clock every second
setInterval(updateTimer, 1000);
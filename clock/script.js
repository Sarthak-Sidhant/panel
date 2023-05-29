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
const fiveMinutesInMs = 60000 * 5

setInterval(updateTimerAndStopwatch, 10)

function updateTimerAndStopwatch() {
	updateTimer()
	updateStopwatch()
}

let timerTimeLeft = fiveMinutesInMs
let isTimerRunning = false 

let stopwatchTimeRan = 0 
let isStopwatchRunning = false

setTimerToEnabled()
setStopwatchToEnabled()

function updateTimerValuesFromMs() {
	const [hours, minutes, seconds, milliseconds] = convertMsToTime(timerTimeLeft)
	timerHoursElement.value   = hours.toString().padStart(2, '0')
	timerMinutesElement.value = minutes.toString().padStart(2, '0')
	timerSecondsElement.value = seconds.toString().padStart(2, '0')
}

function updateStopwatchValuesFromMs() {
	const [hours, minutes, seconds, milliseconds] = convertMsToTime(stopwatchTimeRan)
	stopwatchHoursElement.value   = hours.toString().padStart(2, '0')
	stopwatchMinutesElement.value = minutes.toString().padStart(2, '0')
	stopwatchSecondsElement.value = seconds.toString().padStart(2, '0')
	stopwatchMillisecondsElement.value = milliseconds.toString().padStart(3, '0')
}

updateTimerValuesFromMs()
updateStopwatchValuesFromMs()

function updateTimer() {
	if (isTimerRunning == true) {
		timerTimeLeft -= 10
		if (timerShouldStop()) {
			stopTimer()
		}
		updateTimerValuesFromMs()
	}
}

function updateStopwatch() {
	if (isStopwatchRunning == true) {
		stopwatchTimeRan += 10
	}
	updateStopwatchValuesFromMs()
}

let startStopwatch = function() {
	isStopwatchRunning = true
}

let pauseStopwatch = function() {
	isStopwatchRunning = false
}

let resetStopwatch = function() {
	pauseStopwatch()
	stopwatchTimeRan = 0
}

function startTimer() {
	isTimerRunning = true
	setTimerToDisabled()
}

function pauseTimer() {
	isTimerRunning = false
	setTimerToEnabled()
}

function stopTimer() {
	isTimerRunning = false
	resetTimer()
	setTimerToEnabled()
}

function resetTimer() {
	timerTimeLeft = fiveMinutesInMs
	updateTimerValuesFromMs()
}

function updateTimerHours() {
	const [hours, minutes, seconds, milliseconds] = convertMsToTime(timerTimeLeft)
	timerTimeLeft = convertTimeToMs(timerHoursElement.value, minutes, seconds, milliseconds)
}

function updateTimerMinutes() {
	const [hours, minutes, seconds, milliseconds] = convertMsToTime(timerTimeLeft)
	timerTimeLeft = convertTimeToMs(hours, timerMinutesElement.value, seconds, milliseconds)
}

function updateTimerSeconds() {
	const [hours, minutes, seconds, milliseconds] = convertMsToTime(timerTimeLeft)
	timerTimeLeft = convertTimeToMs(hours, minutes, timerSecondsElement.value, milliseconds)
}

function convertMsToTime(ms) {
  let hours = Math.floor(ms / 3600000);
  let minutes = Math.floor((ms % 3600000) / 60000);
  let seconds = Math.floor(((ms % 3600000) % 60000) / 1000);
  let milliseconds = Math.floor(((ms % 3600000) % 60000) % 1000);
  return [hours, minutes, seconds, milliseconds];
}

function convertTimeToMs(hours, minutes, seconds, milliseconds) {
	return hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds
}

function timerShouldStop() {
	return timerTimeLeft <= 0
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

function setStopwatchToEnabled() {
	stopwatchHoursElement.disabled = false
	stopwatchMinutesElement.disabled = false
	stopwatchSecondsElement.disabled = false
	stopwatchMillisecondsElement.disabled = false
}

// Display the current date and time
displayDateTime();

// Update the clock every second
setInterval(displayDateTime, 1000);

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
startTimerButton.addEventListener('click', startTimer);
pauseTimerButton.addEventListener('click', pauseTimer);
stopTimerButton.addEventListener('click', stopTimer);

// Add event listeners to the stopwatch buttons
startStopwatchButton.addEventListener('click', startStopwatch);
pauseStopwatchButton.addEventListener('click', pauseStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

timerHoursElement.addEventListener('input', updateTimerHours) 
timerMinutesElement.addEventListener('input', updateTimerMinutes) 
timerSecondsElement.addEventListener('input', updateTimerSeconds) 

// Add event listeners to the alarm inputs and buttons

// Initialize the clock
updateTimer();

// Update the clock every second
setInterval(updateTimer, 1000);
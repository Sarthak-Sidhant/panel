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
const stopwatchHoursElement = document.getElementById('sw-hours');
const stopwatchMinutesElement = document.getElementById('sw-minutes');
const stopwatchSecondsElement = document.getElementById('sw-seconds');
const stopwatchMillisecondsElement = document.getElementById('sw-milliseconds');
const startStopwatchButton = document.getElementById('start-stopwatch');
const pauseStopwatchButton = document.getElementById('pause-stopwatch');
const resetStopwatchButton = document.getElementById('reset-stopwatch');

// Get the alarms elements
const alarmInputElement = document.getElementById('alarm-time');
const setAlarmButton = document.getElementById('set-alarm');
const stopAlarmButton = document.getElementById('stop-alarm');

// Clock function
function clock() {
  const now = new// Get the current date and time
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
  // Stop the timer and reset the inputs
  clearInterval(timerId);
  timerHoursElement.value = '';
  timerMinutesElement.value = '';
  timerSecondsElement.value = '';
  
  // Enable the inputs and the start button
  timerHoursElement.disabled = false;
  timerMinutesElement.disabled = false;
  timerSecondsElement.disabled = false;
  startTimerButton.disabled = false;
  }
  
  function updateTimer() {
  // Calculate the remaining time
  timerDuration -= 1000;
  
  if (timerDuration <= 0) {
  // Stop the timer and play a sound
  clearInterval(timerId);
  const alarmSound = new Audio('alarm.mp3');
  alarmSound.play();

const videoElement = document.getElementById("video");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let mediaStream;
let mediaRecorder;
let recordedChunks = [];
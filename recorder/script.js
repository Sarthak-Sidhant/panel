const videoElement = document.getElementById("video");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let mediaStream;
let mediaRecorder;
let recordedChunks = [];

const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };
  
  const startRecording = async () => {
    try {
      mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
  
      mediaRecorder = new MediaRecorder(mediaStream, {
        mimeType: "video/webm",
      });
  

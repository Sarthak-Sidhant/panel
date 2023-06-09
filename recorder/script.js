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
  
      mediaRecorder.ondataavailable = handleDataAvailable;
  
      mediaRecorder.start();
  
      startButton.disabled = true;
      stopButton.disabled = false;
  
      videoElement.srcObject = mediaStream;
    } catch (error) {
      console.error("Error starting recording", error);
    }
  };
  
  const stopRecording = () => {
    mediaRecorder.stop();
    mediaStream.getTracks().forEach((track) => track.stop());
  
    startButton.disabled = false;
    stopButton.disabled = true;
  
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.webm";
    a.click();
  };
  
  startButton.addEventListener("click", startRecording);
  stopButton.addEventListener("click", stopRecording);

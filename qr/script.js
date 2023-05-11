// Import the QR code generator library
import QRCode from 'qrcode';

// Set variables for the input field and the QR code container
const inputField = document.getElementById('input');
const qrCodeContainer = document.getElementById('qrcode');

// Function to generate QR code
function generateQRCode() {
  const inputValue = inputField.value;
  if (inputValue) {
    // Generate QR code with the input value and display it in the container
    QRCode.toCanvas(qrCodeContainer, inputValue, function (error) {
      if (error) console.error(error);
    });
  }
}

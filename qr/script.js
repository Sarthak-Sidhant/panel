function generateQRCode() {
    var text = document.getElementById("text").value;
    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = ""; // Clear the previous QR code
    var qrcode = new QRCode(qrcodeElement, {
      text: text,
      size: 200,
      colorDark: "#000",
      colorLight: "#fff"
    });
  }
  
  document.getElementById("generate").addEventListener("click", generateQRCode);
  
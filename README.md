# QR Code Generator App

This is a simple web application that allows users to generate QR codes by entering text or a URL.
<img width="733" alt="Screenshot 2023-11-25 163217" src="https://github.com/Namancoder80/QR-Code-Generator-App/assets/96739382/1aec0717-bff0-4dd0-8350-fda487e4bf9e">

## HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QR-code-App</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <p>Enter your text or URL</p>
      <input type="text" placeholder="Enter text or url" id="qrText" />
      <div id="img-box">
        <img src="" id="qrImage" />
      </div>
      <button onclick="generateQRCode()">Generate QR Code</button>
    </div>
  </body>
</html>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  background-color: #262a2f;
}
.container {
  width: 400px;
  padding: 25px 50px;
  background-color: #ffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  border-radius: 10px;
}
.container p {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 8px;
}
.container input {
  width: 100%;
  hight: 50px;
  border: 1px solid #494eea;
  outline: 0;
  padding: 10px;
  margin: 10px 0 20px;
  border-radius: 5px;
}
.container button {
  width: 100%;
  height: 50px;
  background-color: #494eea;
  color: #ffff;
  border: 0;
  outline: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  font-weight: 500;
  cursor: pointer;
}
#img-box {
  width: 100px;
  border-radius: 5px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s;
}
#img-box img {
  width: 100px;
  padding: 10px;
}
#img-box.show-img {
  max-height: 300px;
  margin: 10px auto;
  border-radius: 1px solid #d1d1d1;
}
let imageBox = document.getElementById("img-box");
let qrCodeImage = document.getElementById("qrImage");
let qrCodeText = document.getElementById("qrText");

function generateQRCode() {
  if (qrCodeText.value.length > 0) {
    qrCodeImage.src =
      " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrCodeText.value;
    imageBox.classList.add("show-img");
  } else {
    alert("Please enter text to generate QR code.");
  }
}

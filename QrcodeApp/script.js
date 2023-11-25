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
    alert("Please enter text to co");
  }
}

document.getElementById("qrForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputType = document.getElementById("inputType").value;
    const inputValue = document.getElementById("inputValue").value;
    const qrContainer = document.getElementById("qrContainer");
    const qrCodeDiv = document.getElementById("qrCode");

    let qrData = "";

    // Handle QR Code data based on input type
    if (inputType === "mobile") {
        qrData = `tel:${inputValue}`;
    } else if (inputType === "link") {
        qrData = inputValue;
    } else if (inputType === "text") {
        qrData = inputValue;
    } else if (inputType === "payment") {
        qrData = `upi://pay?pa=${inputValue}&pn=User&mc=0000&mode=02&purpose=00`;
    }

    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    // Generate QR Code
    QRCode.toCanvas(qrCodeDiv, qrData, {
        width: 200,
        margin: 2,
    }, function (error) {
        if (error) console.error(error);
    });

    qrContainer.style.display = "block";
});
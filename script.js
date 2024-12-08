document.getElementById("qrForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const inputType = document.getElementById("inputType").value;
    const inputValue = document.getElementById("inputValue").value.trim();
    const qrContainer = document.getElementById("qrContainer");
    const qrCanvas = document.getElementById("qrCodeCanvas");

    if (!inputValue) {
        alert("Please enter a value to generate a QR Code.");
        return;
    }

    // Generate the QR data
    let qrData = "";
    if (inputType === "mobile") {
        qrData = `tel:${inputValue}`;
    } else if (inputType === "link") {
        qrData = inputValue.startsWith("http") ? inputValue : `https://${inputValue}`;
    } else if (inputType === "text") {
        qrData = inputValue;
    } else if (inputType === "payment") {
        qrData = `upi://pay?pa=${inputValue}&pn=User&mc=0000&mode=02&purpose=00`;
    }

    // Clear the previous QR code
    QRCode.toCanvas(qrCanvas, qrData, { width: 200, margin: 2 }, function (error) {
        if (error) {
            console.error("Error generating QR Code:", error);
            alert("Could not generate QR Code. Please try again.");
        } else {
            qrContainer.style.display = "block";
        }
    });
});

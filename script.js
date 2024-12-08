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

    // Generate QR Code and ensure it is displayed
    QRCode.toCanvas(qrCodeDiv, qrData, {
        width: 200, // Adjust the size of the QR code
        margin: 2,  // Add margin around the QR code
    }, function (error) {
        if (error) {
            console.error("QR Code generation failed:", error);
            alert("Failed to generate QR Code. Please try again.");
            return;
        }
        // Show the QR container once the QR code is generated successfully
        qrContainer.style.display = "block";
    });
});

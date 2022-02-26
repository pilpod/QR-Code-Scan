const scannerSection = document.getElementById("scanner_section");

function checkCompatibility() {
    const alertMessage = document.getElementById("alert_message");

    if (!("BarcodeDetector" in window)) {
        console.log("Barcode Detector is not supported by this browser.");
        alertMessage.innerHTML =
            "Barcode Detector is not supported by this browser.";
        alertMessage.hidden = false;
    } else {
        console.log("Barcode Detector supported!");

        alertMessage.innerHTML = "Barcode Detector supported!";
        alertMessage.hidden = false;

        createDetector();
    }
}

function createDetector() {
    // create new detector
    var barcodeDetector = new BarcodeDetector({
        formats: ["qr_code", "code_39", "codabar", "ean_13"],
    });
    return barcodeDetector;
}

export function initializeDetector() {
    checkCompatibility();
}
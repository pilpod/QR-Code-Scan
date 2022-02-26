import { video } from "./video.js";
const scannerSection = document.getElementById("scanner_section");

function checkCompatibility() {
    const alertMessage = document.getElementById("alert_message");

    if (!("BarcodeDetector" in window)) {
        console.log("Barcode Detector is not supported by this browser.");
        alertMessage.innerHTML =
            "Barcode Detector is not supported by this browser.";
        alertMessage.hidden = false;
        return false;
    } else {
        console.log("Barcode Detector supported!");

        alertMessage.innerHTML = "Barcode Detector supported!";
        alertMessage.hidden = false;

        return true;
    }
}

function createDetector() {
    // create new detector
    const barcodeDetector = new BarcodeDetector({
        formats: ["qr_code", "code_39", "codabar", "ean_13"],
    });

    return barcodeDetector;
}

function checkSupportedFormat() {
    // check supported types, not in use
    BarcodeDetector.getSupportedFormats()
        .then(supportedFormats => {
            supportedFormats.forEach(format => console.log(format));
        });
}

function detectCode() {
    const barcodeDetector = new BarcodeDetector({
        formats: ["qr_code", "code_39", "codabar", "ean_13"],
    });

    setInterval(() => {
        barcodeDetector.detect(video).then(codes => {
            // If no codes exit function
            if (codes.length === 0) return;

            for (const barcode of codes) {
                // Log the barcode to the console
                console.log(barcode);
            }
        }).catch(err => {
            // Log an error if one happens
            console.error(err);
        })
    }, 500)
}

export function initializeDetector() {
    if (checkCompatibility()) {
        detectCode()
    }
}
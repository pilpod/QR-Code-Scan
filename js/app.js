import { stream } from "./video.js";
import { initializeDetector } from "./detector.js";


function app() {
    stream();
    initializeDetector();
}

app();






const video = document.getElementById('video');

function checkMediaDevice() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const contrains = {
            video: true,
            audio: false
        }
        return contrains;
    }
}

function startVideoStream(contrains) {
    navigator.mediaDevices.getUserMedia(contrains).then(stream => video.srcObject = stream)
}

export function stream() {
    const contrains = checkMediaDevice();
    if(contrains) {
        startVideoStream(contrains);
    }
}
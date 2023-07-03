function registerDomEvents() {
    document.addEventListener('click', musicPlay);
}

function musicPlay() {
    document.getElementById('ambient').play();
}

registerDomEvents();

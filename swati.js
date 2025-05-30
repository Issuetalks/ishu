// Start muted (allowed by browsers)
bgMusic.muted = true;
bgMusic.play()
    .then(() => {
        // After play starts, try unmuting
        bgMusic.muted = false;
    })
    .catch(error => {
        // Show play button if failed
        playButton.style.display = "block";
    });
const playButton = document.getElementById("playButton");
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.5;
const playPromise = bgMusic.play();

if (playPromise !== undefined) {
    playPromise.catch(error => {

        playButton.style.display = "block";
    });
}

playButton.addEventListener("click", () => {
    bgMusic.play();
    playButton.textContent = "Music Playing...";
});
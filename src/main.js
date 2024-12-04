const button = document.getElementById("play-btn");
const audio = document.querySelector("audio");
const progress = document.querySelector("#progress");
const icon = document.querySelector("#icon");
let isPlaying = false;
audio.onloadeddata = function () {
  start();
};
function UpdateProgress() {
  progress.value = audio.currentTime;
}
function start() {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
}
start();
progress.addEventListener("change", (e) => {
  audio.currentTime = e.target.value;
});

function play() {
  audio.play();
  setInterval(UpdateProgress, 50);
}
function pause() {
  audio.pause();
}
button.addEventListener("click", (e) => {
  if (!isPlaying) {
    play();
    icon.src = "./src/assets/pause.svg";
    isPlaying = !isPlaying;
  } else {
    pause();
    icon.src = "./src/assets/play.svg";
    isPlaying = !isPlaying;
  }
});

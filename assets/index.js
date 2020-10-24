import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay()
] });

const buttonPlay = document.querySelector("#playButton");
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector("#muteButton");
buttonMute.onclick = () => player.toggleMute();

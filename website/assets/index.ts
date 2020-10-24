import MediaPlayer from '@sparragus/platzimediaplayer';
import AutoPlay from '@sparragus/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@sparragus/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@sparragus/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const buttonPlay: HTMLElement = document.querySelector('#playButton');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('#muteButton');
buttonMute.onclick = () => {
    if (player.media.muted) {
      player.unmute();
    } else {
      player.mute();
    }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .catch((err) => console.log(err.message));
}

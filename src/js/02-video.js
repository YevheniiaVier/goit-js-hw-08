import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const currentPlayPosition = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onTimeupdate(e) {
  if (e.seconds === e.duration) {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(e));
  }
}
if (currentPlayPosition.seconds) {
  player.setCurrentTime(currentPlayPosition.seconds).catch(error => {
    console.log('error:', error);
  });
}

player.on('timeupdate', throttle(onTimeupdate, 1000));

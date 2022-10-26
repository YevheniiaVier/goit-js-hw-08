import VimeoPlayer from '@vimeo/player';
// let throttle = require('lodash.throttle');
// console.log(Vimeo);
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const videoData = {};
const iframeRef = document.querySelector('#vimeo-player');
iframeRef.addEventListener('', {});

const onPlay = function ({ duration, percent, seconds }) {
  //   console.log(percent);
  videoData = [duration] = duration;
  videoData = [percent] = percent;
  videoData = [seconds] = seconds;
  console.log(videoData);
};
console.log(videoData);
player.on('timeupdate', onPlay);

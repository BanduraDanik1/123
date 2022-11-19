import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

const currentTimeVideo = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTimeVideo, function (seconds) {
  seconds = currentTimeVideo;
});
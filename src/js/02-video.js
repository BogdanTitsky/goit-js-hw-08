import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));

let currentTime;

player.on(
  'timeupdate',
  throttle(function (data) {
    currentTime = data.seconds;
    console.log(currentTime);

    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const DATA_TIME_STORAGE_KEY = 'videoplayer-current-time';
const ifremRef = document.querySelector('#vimeo-player');
const player = new Player(ifremRef);

onResumeVideo();

player.on('timeupdate', throttle(setDataTime, 1000));

function setDataTime(data) {
  localStorage.setItem(DATA_TIME_STORAGE_KEY, data.seconds);
}

function onResumeVideo() {
  const currentPlayerTime = localStorage.getItem(DATA_TIME_STORAGE_KEY);

  if (currentPlayerTime) {
    player.setCurrentTime(currentPlayerTime);
  }
}

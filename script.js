let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStopBtn').textContent = 'Start';
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('display').textContent =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

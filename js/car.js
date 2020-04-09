'use strict';

function carStartListener() {
  var randomNumber = Math.random();

  if (randomNumber > 0.5) {
    carStarted();
  } else {
    carCantBeStarted();
  }
}

function drawStatus(status) {
  statusLabel.innerHTML = status;
}

function devLog(message) {
  //console.log(message);
}

function carCantBeStarted() {
  devLog('Something wrong');
  drawStatus('Car can\'t be started. Try again!');
}

function carStarted() {
  devLog('Car have started');
  drawStatus('Car have started');
  gearBoxStarted();
  planedCrashStarted();
  devLog('We wait crash');
}

function gearBoxStarted() {
  var gearBoxValue = '1';
  gearBoxValueLabel.innerHTML = gearBoxValue;

  function incrementGearBoxValue() {
    if (gearBoxValue < 5) {
      gearBoxValue++;
      gearBoxValueLabel.innerHTML = gearBoxValue;
    }
  }
  gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000);
}

function planedCrashStarted() {
  function engineCrashed() {
    devLog('Engine crashed');
    drawStatus('Engine have crashed. Car stopped');
    startButton.classList.remove('hide');
    gearBoxValueLabel.innerHTML = 'N';
    window.clearInterval(gearBoxInterval);
  }
  window.setTimeout(engineCrashed, 3000);
}

var gearBoxInterval;
var startButton = document.querySelector('#start-car');
var statusLabel = document.querySelector('#status');
var gearBoxValueLabel = document.querySelector('#gear-box-value');
startButton.addEventListener('click', carStartListener);

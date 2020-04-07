function carStartListener() {
  var randomNumber = Math.random();

  if (randomNumber > 0.5) {
    alert('Car have started');
    startButton.classList.add('hide');

    function engineCrashed() {
      alert('Engine crashed');
      startButton.classList.remove('hide');
    }
    window.setTimeout(engineCrashed, 5000);
    alert('We wait crash');

  } else {
    alert('Something wrong');
  }
}

var startButton = document.querySelector('#start-csr');

startButton.addEventListener('click', carStartListener);

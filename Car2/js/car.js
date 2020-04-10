'use strict';

(function () {
  var garage = document.getElementById('garage');
  for (let i = 0; i < 1; i++) {
    var div = document.createElement('div');
    var id = 'car' + i;
    div.id = id;
    garage.appendChild(div);
    startCarProcess(id);
  }

  function startAllCarsListener() {
    alert('start All Cars');
  }

  var startAllCars = document.getElementById('startAllCars');
  startAllCars.addEventListener('click', startAllCarsListener);

})();

function random(min, max) {
  return isInteger(min + Math.random() * (max - min));
}

console.log(random(1, 5));
console.log(random(2, 10));
console.log(random(5, 8));

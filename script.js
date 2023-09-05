'use strict';

let digClock = document.getElementById('digital-clock');
let options = { weekday: 'short' };

const clock = function () {
  const d = new Date().toLocaleTimeString('en-GB', options);
  digClock.textContent = d;
  setTimeout(clock, 1000);
};
clock();

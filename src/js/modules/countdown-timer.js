import $ from 'jquery';
import 'jquery-countdown';

export function cuontdownTimer(){

  $('#getting-started').countdown(
    '2023/01/01', function (event) {
    $(this).html(event.strftime('<ul class="hero__time-list"><li class="hero__time-list-item"><p class="countdown-time">%D</p><p class="countdown-text">Дней</p></li><li class="hero__time-list-item"><p class="countdown-time">%H</p><p class="countdown-text">Часов</p></li><li class="hero__time-list-item"><p class="countdown-time">%M</p><p class="countdown-text">Минут</p></li><li class="hero__time-list-item"><p class="countdown-time">%S</p><p class="countdown-text">Секунд</p></li></ul>'));
  }
  );

// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline="January 01 2023 00:00:00 GMT+0300"; //for Ukraine
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
// initializeClock('countdown', deadline);

}

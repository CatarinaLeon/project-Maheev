// import $ from 'jquery'
// import 'flipclock'

// export function cuontdownTimer() {
//   // set time
// clock.setTime(220823);
// // countdown mode
// clock.setCountdown(true);
// // start the clock
//   clock.start();
  
//   $('.clock').FlipClock({
//     clockFace: 'DailyCounter',
//     autoStart: false,
//     callbacks: {
//       stop: function () {
//         $('.message').html('The clock has stopped!')
//       }
//     }
//   });
// }


// // Установите дату, до которой мы ведем обратный отсчет
// var countDownDate = new Date("July 15, 2023 04:00:00").getTime();

// // Обновляйте обратный отсчет каждые 1 секунду
// export var x = setInterval(function() {

//   // Получить сегодняшнюю дату и время
//   var now = new Date().getTime();
    
//   // Найдите расстояние между моментом сейчас и датой обратного отсчета
//   var distance = countDownDate - now;
    
//   // Расчеты времени для дней, часов, минут и секунд
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Выведите результат в виде элемента с id="demo"
//   document.getElementById("demo").innerHTML = days + "д " + hours + "ч "
//   + minutes + "м " + seconds + "с ";
    
//   // Если обратный отсчет закончился, напишите какой-нибудь текст
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

export function cuontdownTimer(){

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2023 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

}



// document.addEventListener('DOMContentLoaded', function() {
//   // конечная дата, например 1 июля 2021
//     const deadline = new Date(2023, 12, 01);
//     console.log('deadline', deadline)
//   // id таймера
//   let timerId = null;
//   // склонение числительных
//  function declensionNum(num, words) {
//     return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//   }
//   // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//  function countdownTimer() {
//     const diff = deadline - new Date();
//     if (diff <= 0) {
//       clearInterval(timerId);
//     }
//     const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//     const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//     const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//     const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//     $days.textContent = days < 10 ? '0' + days : days;
//     $hours.textContent = hours < 10 ? '0' + hours : hours;
//     $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//     $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//     $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//     $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//     $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//     $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//   }
//   // получаем элементы, содержащие компоненты даты
//   const $days = document.querySelector('.timer__days');
//   const $hours = document.querySelector('.timer__hours');
//   const $minutes = document.querySelector('.timer__minutes');
//     const $seconds = document.querySelector('.timer__seconds');
    
//   // вызываем функцию countdownTimer
//  countdownTimer();
//   // вызываем функцию countdownTimer каждую секунду
//   timerId = setInterval(countdownTimer, 1000);
// });
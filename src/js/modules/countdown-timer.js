import $ from 'jquery';
import 'jquery-countdown';

export function cuontdownTimer(){
  $('#getting-started').countdown(
    '2024/01/01', function (event) {
      $(this).html(event.strftime(
        `<ul class="hero__time-list">
          <li class="hero__time-list-item">
            <p class="countdown-time">%D</p>
            <p class="countdown-text">Дней</p>
          </li>
          <li class="hero__time-list-item">
            <p class="countdown-time">%H</p>
            <p class="countdown-text">Часов</p>
          </li>
          <li class="hero__time-list-item">
            <p class="countdown-time">%M</p>
            <p class="countdown-text">Минут</p>
          </li>
          <li class="hero__time-list-item">
            <p class="countdown-time">%S</p>
            <p class="countdown-text">Секунд</p>
          </li>
        </ul>`));
    }
  );
};

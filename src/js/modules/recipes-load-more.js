import $ from 'jquery';
import { galleryRecipes } from '../../data/recipes.js';

export function renderRecipes() {
const galleryContainer = document.querySelector('.recipes__list');

function renderImages() {
    const markup = galleryRecipes.map(
        ({ img_Mob_1x, img_Mob_2x, img_Desk_1x, img_Desk_2x, recipesImg, description, description_Alt }) =>
            `<li class="recipes__list-item">
                <picture>
                    <source srcset="
                    ${img_Desk_1x} 1x,
                    ${img_Desk_2x} 2x
                    " media="(min-width: 1200px)" />
                    <source srcset="
                    ${img_Mob_1x} 1x,
                    ${img_Mob_2x} 2x
                    " media="(min-width: 480px)" />
                    <img class="recipes__list-img" src=${recipesImg} alt='${description_Alt}'
                        width="140" height="140">
                </picture>
                <p class="recipes__list-text">${description}</p>
            </li>`
    )
        .join('');
        galleryContainer.insertAdjacentHTML('beforeend', markup);
}
renderImages();
}

export function buttonLoadMore() {
$(".recipes__list-item").slice(0, 8).show();
$(".recipes_btn").click(function (){
$(".recipes__list-item:hidden").slice(0, 8).slideDown();
    if ($(".recipes__list-item:hidden").length == 0) {
        $(".recipes_btn").fadeOut('slow')
    }
});
}
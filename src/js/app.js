//вывод всех функций в flsFunctions
import * as flsFunctions from "./modules/functions.js";
import * as flsMenu from "./modules/mob-menu.js";
import * as flsModal from "./modules/modal-rules.js";
import * as flsTimer from "./modules/countdown-timer.js";
import * as flsSlider from "./modules/products-slider.js";
import * as flsLoadMore from "./modules/recipes-load-more.js";


//проверка на поддержку Webp изображений и метка классов "webp" или "no-webp"
flsFunctions.isWebp();
flsMenu.mobMenu()
flsModal.modalRules()
flsTimer.cuontdownTimer()
flsSlider.slickSlider()
flsLoadMore.renderRecipes()
flsLoadMore.buttonLoadMore()
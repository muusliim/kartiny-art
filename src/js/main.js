import modals from "./modules/modals";
import slider from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};
    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', modalState);
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu','.burger');
    drop();

});

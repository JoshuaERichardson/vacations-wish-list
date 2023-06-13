import * as Button from "./buttons.js";
import * as Cards from "./cards.js";
import * as FormSubmit from "./formSubmit.js";
export { Button, Cards, FormSubmit };


// Scrolling JQuery to transition navbar to 'stick' to top of page past a certain scroll
$(window).scroll(function(){
    if ($(window).scrollTop() >= 1200) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});


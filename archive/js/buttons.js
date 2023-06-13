import * as FormSubmit from './formSubmit.js';
import * as Cards from './cards.js';


/**
 * button.js handles all buttons throughout page to include adding event listeners and routing to proper function
 */




/**
 * buttonAdd captures form data and sends to handleFormSubmit() in separate JS
 */
let buttonAdd = document.querySelector('#buttonAddToList');
buttonAdd.addEventListener(
    "click", 
    (e) => {
        e.preventDefault();
        (FormSubmit.handleFormSubmit())
    }
);





/**
 * buttonRemove is the delete button.
 * Initialized to null as the button is not on the screen at time of page load
 * makeRemoveClickable adds the listener at time of each card creation
 */
export function makeRemoveClickable(buttonRemove){
    console.log("buttonRemove:",buttonRemove)
    buttonRemove.addEventListener(
        "click",
        (e) => {
            Cards.removeThisCard(e)
        }
    )
}


/**
 * buttonEdit is the edit button.
 * Initialized to null as the button is not on the screen at time of page load
 * makeEditClickable() adds the listener at time of each card creation
 */
export function makeEditClickable(buttonEdit){
    buttonEdit.addEventListener(
        "click",
        (e) => {
            Cards.editThisCard(e)
        }
    )
}


export default { buttonAdd, makeRemoveClickable, makeEditClickable };
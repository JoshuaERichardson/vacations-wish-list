// import * as FormSubmit from './formSubmit.js';
// import * as Cards from './cards.js';


/**
 * buttonRemove is the delete button.
 * Initialized to null as the button is not on the screen at time of page load
 * makeRemoveClickable adds the listener at time of each card creation
 */

async function deleteCard(id){
    fetch('/vacationDB', {
        method: 'DELETE',
        body : 'placehold'
    })
}


async function makeRemoveClickable(buttonRemove){
    const container = document.querySelector('#cardContainer')
    
    

    buttonRemove.addEventListener(
        "click",
        (e) => {
            removeThisCard(e)
        }
    )
}


/**
 * buttonEdit is the edit button.
 * Initialized to null as the button is not on the screen at time of page load
 * makeEditClickable() adds the listener at time of each card creation
 */
function makeEditClickable(buttonEdit){
    buttonEdit.addEventListener(
        "click",
        (e) => {
            editThisCard(e)
        }
    )
}

module.exports = { deleteCard, makeEditClickable, makeRemoveClickable }
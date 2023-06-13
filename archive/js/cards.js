import { makeRemoveClickable, makeEditClickable } from "./buttons.js";
import { unsplashAPIGET } from "./APIs/unsplashAPI.js";

/**
 * createCard() handles making each destination card upon data form submit.
 */
export async function createCard(){
    let thisName = document.getElementById('destination_name').value;
    let thisLocation = document.getElementById('destination_location').value;
    let description = document.getElementById('destination_description').value;
    
    // unsplashAPIGET is an async function.  Await the answer for the API call before allowing to fill the photo information
    let photo = await unsplashAPIGET(thisName, thisLocation);
        

    // Create the edit button, make it clickable
    let buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn btn-warning';
    buttonEdit.id = 'buttonEdit';
    buttonEdit.innerHTML = "Edit";
    makeEditClickable(buttonEdit);
    
    // Create the delete button, make it clickable
    let buttonRemove = document.createElement('button');
    buttonRemove.className = 'btn btn-danger';
    buttonRemove.id = 'buttonRemove';
    buttonRemove.innerHTML = 'Remove';
    makeRemoveClickable(buttonRemove);

    // f string to create the HTML of each card
    let innerCard = 
        `<img src="${photo.urls.small}" class="card-img-top image" alt="Photo of Travel" />    
        <div class="card-body">      
            <h5 class="card-title" id="card-title">${thisName}</h5>      
            <p class="card-text" id="card-location">${thisLocation}</p>      
            <p class="card-text" id="card-description">${description}</p>
        </div>`
    ;
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card', 'col-md-3');
    cardContainer.innerHTML = innerCard;
    
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('d-flex', 'justify-content-around');
    buttonDiv.appendChild(buttonEdit);
    buttonDiv.appendChild(buttonRemove);

    cardContainer.appendChild(buttonDiv)
    document.querySelector("#destination_card_container").append(cardContainer);
}



export function removeThisCard(e){
        $(e.target.parentNode.parentNode).remove();
}

export function editThisCard(e){
    // Save all the original info
    let thisCard = e.target.parentNode.parentNode.childNodes[2].childNodes;
    console.log(thisCard)
    let title = thisCard[1];
    let location = thisCard[3];
    let description = thisCard[5];

    // Get new info from the user
    let newTitle = window.prompt("What would you like to rename the destination?");
    let newLocation = window.prompt("Where would you like to change the location to?");
    let newDescription = window.prompt("What is the new description?");

    // Save the information if necessary
    if(newTitle.length > 0 && newTitle.length != null){
        title.innerText = newTitle
    }
    if(newLocation.length > 0 && newLocation.length != null){
        location.innerText = newLocation
    }
    if(newDescription.length > 0 && newDescription.length != null){
        description.innerText = newDescription
    }
}

export default { createCard, removeThisCard, editThisCard };
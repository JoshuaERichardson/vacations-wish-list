import { createCard } from './cards.js';

function handleFormSubmit(){
    // Step 1: Data validation:
    let destinationVal = document.getElementById("destination_location").value //Helper
    let nameVal = document.getElementById("destination_name").value

    if(!nameVal || !destinationVal){
        let nameHTML = document.getElementById("destination_name_validation") //Helper
        let destinationHTML = document.getElementById("destination_location_validation") //Helper
        let errorMessage = "You failed to enter information in this field";
        if(!nameVal && !destinationVal){
            nameHTML.innerHTML = errorMessage;
            destinationHTML.innerHTML = errorMessage;
        } else if(!nameVal) {
            nameHTML.innerHTML = errorMessage;
            destinationHTML.innerHTML = "";
        } else if(!destinationVal){
            nameHTML.innerHTML = "";
            destinationHTML.innerHTML = errorMessage;
        }
    } else {
    // Step 2:  Handle the data:
        createCard();
    }
}


export { handleFormSubmit };





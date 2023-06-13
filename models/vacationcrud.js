const unsplashAPIGET = require('../public/javascripts/APIs/unsplashAPI');

const mongoose = require("mongoose");
const VacationModel = require("./vacationmodel");

async function saveVacation(body) {
  console.log(body);
  let photo = await unsplashAPIGET(body.destination_name, body.destination_location);
  const vacation = new VacationModel(body);
  vacation.destination_picture = photo.urls.small;
  await vacation.save();
}

async function deleteVacation(id){
  console.log('trying to delete')
  await VacationModel.findByIdAndDelete(id);
}

module.exports = {
  saveVacation,
  deleteVacation
};





const UserModel = require("./usermodel");

async function saveUser(locals) {
  console.log(locals);
  const user = new UserModel(locals);
  await user.save();
}

module.exports = {
  saveUser
};





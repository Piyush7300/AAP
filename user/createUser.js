const User = require("../schema/models");

async function createUser(data) {
  try {
    let checkCustomer = await User.findOne({email:data.email});
    if(checkCustomer){
        throw ("Email already exist ")
    }
    const createUser = await User.create(data);
    return createUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = createUser;

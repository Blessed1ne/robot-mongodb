// require the stuff
const mongoose = require("mongoose")
// do the stuff

// define the schema
const newRobotSchema = new mongoose.Schema({
  username: String,
  passowrd: String,
  name: String,
  skills: String,
  university: String,
  email: String,
  job: String,
  company: String,
  phonenumber: String,
})

const users = mongoose.model("users", newRobotSchema)
// create a model using that schema

// export the stuff
module.exports = users

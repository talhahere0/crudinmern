const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const UserData = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:String},
    address:{type:String}
})
autoIncrement.initialize(mongoose.connection)
UserData.plugin(autoIncrement.plugin,"Crudapp")

module.exports = new mongoose.model("Crudapp",UserData)
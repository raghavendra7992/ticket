const mongoose = require('mongoose'); // Erase if already required
const validate= require('validator');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        // minLength:[6,"password more than 5 characters and Less than 20 characters"],
        // maxLength:[20,"password more than 5 characters and less than 20 characters"]
    },
});


//Export the model
module.exports = mongoose.model('User', userSchema);
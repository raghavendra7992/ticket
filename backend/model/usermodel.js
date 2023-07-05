const mongoose = require('mongoose'); // Erase if already required
const validate= require('validator');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter ur name"],
        index:true,
    },
    email:{
        type:String,
        required:[true,"Please enter email address"],
        validate:[validate.isEmail,"please enter a valid email"],
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        minLength:[10,"please enter correct number"],
        maxLength:[10,"please enter correct number"],

        unique:true,
    },
    password:{
        type:String,
        required:true,
        // minLength:[6,"password more than 5 characters and Less than 20 characters"],
        // maxLength:[20,"password more than 5 characters and less than 20 characters"]
    },
},{
    timestamps:true,
});


//Export the model
module.exports = mongoose.model('User', userSchema);
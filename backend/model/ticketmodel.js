const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ticketSchema = new mongoose.Schema({
    departure:{
        type:String,
        required:true,
    },
    arrival:{
        type:String,
        required:true,
    },
    timming:{
        type:String,
        required:true,
    },
    stops:{
        type:[String],
        required:true,
    },
},{
    versionKey:false,
    timestamps:true,
});

//Export the model
module.exports = mongoose.model('ticket', ticketSchema);
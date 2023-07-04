const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var bookingSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,
  },
  route:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"bus",
    required:true,
  },
  departureDDate:{
    type:Date,
    required:true,
  },
  passanger:{
    type:Number,
    required:true,
  },
  seat:{
    type:[String],
    required:true,
  },
  status:{
    type:String,
    enum:["pending","confirmed","cancelled"],
    default:"",
  }
});

//Export the model
module.exports = mongoose.model('booking', bookingSchema);
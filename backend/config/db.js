const mongoose=require("mongoose");
require('dotenv').config()
console.log(process.env.mongo_url)
const connection=mongoose.connect(process.env.mongo_db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
    // Start your server or perform other operations
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Handle the error
  });
module.exports={connection};
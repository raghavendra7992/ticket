const express= require('express');
const cors= require('cors');
const {connection}= require('./config/db.js')
const user=require('./routes/userroute.js');
const Booking= require('./routes/bookingroute.js');
const tickets= require('./routes/ticketroute.js');
const payment=require("./routes/payment.js")
const app = express();
const morgan = require('morgan');
app.use(morgan("dev"));
app.use(express.json());
// app.use(cors({origin:"*"}))
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; style-src 'self' 'unsafe-inline';");
    next();
  });
app.use("/",user)


app.use('/booking',Booking)


app.use("/ticket",tickets)

app.use("/payment",payment)

app.get("/",(req, res) => {
    try{
        res.send("Api is working fine")
    }catch(err){
        res.send(err)
    }
})
app.listen(8080,async()=>{
    try{
        await connection;
        console.log("conected")
    }catch(err){
        console.log(err)
    }
console.log("port 8080")
})
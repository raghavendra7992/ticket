const express = require('express');
const { booking, getBooking, singleBooking, update, del } = require('../controller/booking');
const router = express.Router();

router.post("/booking",booking);
router.get("/getall",getBooking);
router.get("/booking/:id",singleBooking);
router.put("/booking/:id",update);
router.delete("/booking/:id",del);


module.exports =router;
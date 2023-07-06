const express = require("express")
const { createPayment, getPaymentById, updatePaymentStatus } = require("../controller/payment")

const router = express.Router()

router.post("/",createPayment)
router.get("/:id",getPaymentById);
router.put("/update/:id",updatePaymentStatus);




module.exports=router
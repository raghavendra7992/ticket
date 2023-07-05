const express = require("express")
const { createTicket, getAllTickets, updateTicketById } = require("../controller/ticket");
const { getCommentsById } = require("moongose/controller/comments_controller");

const router = express.Router()
router.post("/createticket",createTicket)
router.get("/getall",getAllTickets);
router.get("/ticket/:id",getCommentsById),
router.put("/update/:id",updateTicketById)


module.exports =router
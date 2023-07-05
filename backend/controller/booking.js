const BookingModel = require('../model/bookingmodel.js');

const argon = require("argon2");
const asyncHandler = require("express-async-handler");
const generateToken = require("../middleware/token.js");

const booking = asyncHandler(async (req, res) => {
    try {
        const { user, route, departureDate, passenger, seat, status } = req.body;
    
        const newBooking = await BookingModel.create({
          user,
          route,
          departureDate,
          passenger,
          seat,
          status,
        });
    
        res.status(201).json(newBooking);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create booking' });
      }
})
const getBooking = asyncHandler(async (req, res) => {
    try {
        const bookings = await BookingModel.find();
        res.json(bookings);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
      }
})

const singleBooking=asyncHandler(async(req,res)=>{
    try {
        const booking = await BookingModel.findById(req.params.id);
        if (!booking) {
          return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch booking' });
      }
})
const update=asyncHandler(async(req,res)=>{
    try {
        const booking = await BookingModel.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!booking) {
          return res.status(404).json({ error: 'Booking not found' });
        }
        res.json(booking);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update booking' });
      }
})
const del=asyncHandler(async(req,res)=>{
    try {
        const booking = await BookingModel.findByIdAndDelete(req.params.id);
        if (!booking) {
          return res.status(404).json({ error: 'Booking not found' });
        }
        res.json({ message: 'Booking deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete booking' });
      }
})
module.exports={
    booking,
    getBooking,
    update,
    del,
    singleBooking
}
const TicketModel = require('../model/ticketmodel.js');


// Controller function to create a new ticket
const createTicket = async (req, res) => {
  try {
    const { departure, arrival, timing, stops } = req.body;

    const newTicket = await TicketModel.create({
      departure,
      arrival,
      timing,
      stops,
    });

    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create ticket' });
  }
};

// Controller function to get all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await TicketModel.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
};

// Controller function to get a specific ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticketId = req.params.id;
    const ticket = await TicketModel.findById(ticketId);
    
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ticket' });
  }
};

// Controller function to update a ticket by ID
const updateTicketById = async (req, res) => {
  try {
    const ticketId = req.params.id;
    const updatedTicket = req.body;

    const ticket = await TicketModel.findByIdAndUpdate(
      ticketId,
      updatedTicket,
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update ticket' });
  }
};

// Controller function to delete a ticket by ID
const deleteTicketById = async (req, res) => {
  try {
    const ticketId = req.params.id;
    const ticket = await TicketModel.findByIdAndDelete(ticketId);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicketById,
  deleteTicketById,
};

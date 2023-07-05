import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import BookingPage from './component/BookingPage';
import PaymentPage from './component/PaymentPage';
import TicketListPage from './component/TicketListPage';
import LoginPage from './component/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/booking" element={<BookingPage/>} />
        <Route exact path="/payment" element={<PaymentPage/>} />
        <Route exact path="/tickets" element={<TicketListPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Hotels from "../Pages/Hotels";
import HotelDetails from "../Pages/HotelDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Payment from "../Pages/Payment";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotelDetails" element={<HotelDetails />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

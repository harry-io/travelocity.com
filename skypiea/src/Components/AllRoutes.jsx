import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Hotels from "../Pages/Hotels";
import HotelDetails from "../Pages/HotelDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Payment from "../Pages/Payment";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/hotels"
          element={
            <PrivateRoute>
              <Hotels />
            </PrivateRoute>
          }
        />
        <Route
          path="/hotelDetails"
          element={
            <PrivateRoute>
              <HotelDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

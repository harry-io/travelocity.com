import { NavLink } from "react-router-dom";
export default function C() {
  return (
    <div className="hoteldata_c">
      <div className="hoteldata_c_anon">
        <div>
          <NavLink>Stays</NavLink>
        </div>
        <div>
          <NavLink>Flights</NavLink>
        </div>
        <div>
          <NavLink>Cars</NavLink>
        </div>
        <div>
          <NavLink>Packages</NavLink>
        </div>
        <div>
          <NavLink>Things to do</NavLink>
        </div>
        <div>
          <NavLink>Cruises</NavLink>
        </div>
      </div>
      <div className="hoteldata_c_btn">
        <button>Reserve a room</button>
      </div>
    </div>
  );
}

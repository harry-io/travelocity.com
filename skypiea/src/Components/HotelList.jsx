import { useLocation } from "react-router-dom";
import HotelCard from "./HotelCard";

export default function HotelList({ data }) {
  const loc = useLocation();

  return (
    <div className="hotel_lists">
      {data.map((hotel) => (
        <HotelCard
          key={hotel.id}
          details={hotel}
          id={hotel.id}
          query={hotel.city}
        />
      ))}
    </div>
  );
}

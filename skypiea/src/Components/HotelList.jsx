import HotelCard from "./HotelCard";

export default function HotelList({ data }) {
  console.log(data);
  return (
    <div className="hotel_lists">
      {data.map((hotel) => (
        <HotelCard key={hotel.id} details={hotel} />
      ))}
    </div>
  );
}

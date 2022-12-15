import HotelCard from "./HotelCard";

export default function HotelList({ data }) {
  console.log(data);
  return (
    <>
      {data.map((hotel) => (
        <HotelCard details={hotel} />
      ))}
    </>
  );
}

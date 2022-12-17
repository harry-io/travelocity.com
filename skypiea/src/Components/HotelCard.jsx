import { useNavigate } from "react-router-dom";
import CarouselA from "./Carousel";

export default function HotelCard({ details, id, query }) {
  let navigate = useNavigate();
  return (
    <div className="hotelCard_main">
      <div className="carousel_lil">
        <CarouselA
          img1={details.img1}
          img2={details.img2}
          img3={details.img3}
          img4={details.img4}
        />
      </div>
      <div
        onClick={() => navigate("/HotelDetails", { state: { id, query } })}
        className="all_info"
      >
        <div className="heading_hotel">
          <h2>{details.heading1}</h2>
          <p>{details.city}</p>
        </div>
        <div className="details_hotel">
          <h4>{details.text1}</h4>
          <p>{details.text2}</p>
        </div>
        <div className="hotel_price">
          <p style={{ textDecoration: "line-through" }}>₹{details.price2}</p>
          <h3>{details.price1}</h3>
        </div>
        <div className="rating_and_taxes">
          <div className="ratings_hotel">
            <p style={{ marginRight: "5px" }}>{details.rating} </p>
            <p style={{ marginRight: "5px" }}>{details.review} </p>
            <p>{details.no_of_reviews}</p>
          </div>
          <div className="hotel_taxes">
            <p>Includs taxes and fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

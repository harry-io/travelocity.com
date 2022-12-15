import CarouselA from "./Carousel";

export default function HotelCard({ details }) {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid red",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="carousel_lil"
        style={{ width: "28%", border: "1px solid black" }}
      >
        <CarouselA />
      </div>
      <div
        className="all_info"
        style={{ width: "70%", border: "1px solid black" }}
      >
        <div>
          <h2>{details.heading1}</h2>
          <p>{details.city}</p>
        </div>
        <div>
          <h4>{details.text1}</h4>
          <p>{details.text2}</p>
        </div>
        <div
          style={{
            width: "100%",
            border: "1px solid red",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-end",
            height: "6%",
          }}
        >
          <p style={{ textDecoration: "line-through" }}>₹{details.price2}</p>
          <h3>{details.price1}</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid red",
          }}
        >
          <div style={{ display: "flex", width: "50%" }}>
            <p style={{ marginRight: "5px" }}>{details.rating} </p>
            <p style={{ marginRight: "5px" }}>{details.review} </p>
            <p>{details.no_of_reviews}</p>
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "flex-end",
            }}
          >
            <p>Includs taxes and fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

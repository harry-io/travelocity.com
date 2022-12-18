import {
  faArrowRight,
  faBed,
  faRuler,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselB from "./CarouselB";

export default function RoomCard({ data }) {
  const handleReserve = () => {
    localStorage.setItem("hotelReserved", JSON.stringify(data));
  };
  const img5 =
    "https://images.trvl-media.com/hotels/3000000/2710000/2703400/2703358/00a8ece2.jpg?impolicy=resizecrop&rw=455&ra=fit";
  return (
    <div className="room_cards">
      <div>
        <CarouselB
          img1={data.img1}
          img2={data.img2}
          img3={data.img3}
          img4={data.img4}
          img5={img5}
        />
      </div>
      <div className="other_room_info">
        <h3 style={{ marginBottom: "30px" }}>{data.heading1}</h3>
        <p>{data.rating} guest room rating</p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faRuler} />
          269 sq feet
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faUserFriends} />
          Sleeps {data.id}
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faBed} />
          {data.id} Twin Beds
        </p>
        <p
          style={{
            color: "#3498db",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          More details
          <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </div>
      <hr />

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>{data.price1}</h3>
          <p>includes taxes & fees</p>
        </div>
        <div>
          <p style={{ color: "red", fontSize: "x-small" }}>{data.heading3}</p>
          {/* <button onClick={() => nav("/payment")} className="reserve_btn">
            Reserve
          </button> */}
          <div className="reserve_btn" onClick={handleReserve}>
            <NavLink to={"/payment"}>Reserve</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBowlFood,
  faCoffee,
  faDumbbell,
  faHospital,
  faLocation,
  faLocationArrow,
  faPaw,
  faPlane,
  faSnowflake,
  faStar,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
export default function Overview({ data }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        margin: "auto",
      }}
    >
      <div style={{ width: "45%" }}>
        <h2>{data.heading1}</h2>
        <div style={{ color: "gold", display: "flex", gap: "10px" }}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <h4>Ratings : {data.rating}</h4>
        <p style={{ color: "#3498db", cursor: "pointer" }}>
          See all {data.no_of_reviews}
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
        </p>
        {/*  */}
        <div>
          <div className="c_details_right">
            <div className="c_details_right_sym">
              <FontAwesomeIcon icon={faWifi} />
              <p>Free WiFi</p>
            </div>
            <div className="c_details_right_sym">
              <FontAwesomeIcon icon={faBowlFood} />
              <p>Restaurant</p>
            </div>
          </div>
          <div className="c_details_right">
            <div className="c_details_right_sym">
              <FontAwesomeIcon icon={faPaw} />
              <p>Pet Friendly</p>
            </div>
            <div className="c_details_right_sym">
              <FontAwesomeIcon icon={faDumbbell} />
              <p>Gym</p>
            </div>
          </div>
          <div className="c_details_right">
            <div className="c_details_right_sym">
              <FontAwesomeIcon icon={faSnowflake} />
              <p>Air conditioning</p>
            </div>
            <div className="c_details_right_sym">
              <FontAwesomeIcon icon={faCoffee} />
              <p>Breakfast available</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div style={{ width: "40%" }}>
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=13&scale=&size=375x250&map_id=3b266eb50d2997c6&markers=icon:https://a.travel-assets.com/shopping-pwa/images/his-preview-marker.png%7C44.3949,9.00185&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=s7ltwp_Io6uBV9tAuDfQbBT5MO0="
          alt="img"
        />
        <div>
          <h3>Explore the area</h3>
        </div>
        <div>
          <div>
            <div className="c_details_right">
              <div className="c_details_right_sym">
                <FontAwesomeIcon icon={faHospital} />
                <p>Gaslini hospital</p>
              </div>
              <p>15 min drive</p>
            </div>
            <div className="c_details_right">
              <div className="c_details_right_sym">
                <FontAwesomeIcon icon={faHospital} />
                <p>Passeggiata di Anita Garibaldi</p>
              </div>
              <p>4 min drive</p>
            </div>
            <div className="c_details_right">
              <div className="c_details_right_sym">
                <FontAwesomeIcon icon={faLocationArrow} />
                <p>San Martino Polyclinic Hospital</p>
              </div>
              <p>8 min drive</p>
            </div>
            <div className="c_details_right">
              <div className="c_details_right_sym">
                <FontAwesomeIcon icon={faPlane} />
                <p>Genoa (GOA-Cristoforo Colombo)</p>
              </div>
              <p>25 min drive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

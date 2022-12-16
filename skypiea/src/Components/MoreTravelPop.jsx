import { Link } from "react-router-dom";
import {
  faBoxesPacking,
  faCar,
  faHotel,
  faList,
  faPlane,
  faShip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MoreTravelPop() {
  return (
    <div
      className="moreTravel_items"
      style={{
        position: "absolute",
        top: "60px",
        left: "17.5%",
        zIndex: 1,
        backgroundColor: "white",
        color: "black",
        width: "350px",
        borderRadius: "10px",
      }}
    >
      <div className="moreTravel_item">
        <div className="inner_item">
          <FontAwesomeIcon icon={faBoxesPacking} />
          <span>
            <Link>Packages</Link>
          </span>
        </div>
      </div>
      {/*  */}

      <div className="moreTravel_item">
        <div className="inner_item">
          <FontAwesomeIcon icon={faHotel} />
          <span>
            <Link>Stays</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <FontAwesomeIcon icon={faCar} />
          <span>
            <Link>Cars</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <FontAwesomeIcon icon={faPlane} />
          <span>
            <Link>Flights</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <FontAwesomeIcon icon={faShip} />
          <span>
            <Link>Cruises</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <FontAwesomeIcon icon={faList} />
          <span>
            <Link>Things to do</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <span>
            <Link>Trips for me</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <span>
            <Link>Disocover</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <span>
            <Link>Travel Deals</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <span>
            <Link>Get Inspired</Link>
          </span>
        </div>
      </div>
      {/*  */}
      <div className="moreTravel_item">
        <div className="inner_item">
          <span>
            <Link>Groups & meetings</Link>
          </span>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

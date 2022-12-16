import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/moreTravels.css";
import MoreTravelPop from "./MoreTravelPop";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function MoreTravel({ showMoreTravel, setShowMoreTravel }) {
  return (
    <div
      onClick={() => setShowMoreTravel(!showMoreTravel)}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "small",
      }}
    >
      <div
        onClick={() => setShowMoreTravel(!showMoreTravel)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <p>More Travel</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {/*  */}
      {showMoreTravel && <MoreTravelPop />}
    </div>
  );
}

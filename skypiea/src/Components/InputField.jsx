import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function InputField() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        margin: "auto",
        gap: "2%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid gray",
          flex: 3,
          gap: "10px",
          lineHeight: "0.3rem",
          cursor: "pointer",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div>
          <p style={{ fontSize: "small" }}>Going to</p>
          <p>Goa</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          border: "1px solid gray",
          justifyContent: "space-evenly",
          lineHeight: "0.3rem",
          cursor: "pointer",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <div style={{ fontSize: "large" }}>
          <FontAwesomeIcon icon={faCalendarDay} />
        </div>
        <div>
          <p style={{ fontSize: "small" }}>Check-in</p>
          <p>Dec 24</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid gray",
          flex: 1,
          justifyContent: "space-evenly",
          lineHeight: "0.3rem",
          cursor: "pointer",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
        </div>
        <div>
          <p style={{ fontSize: "small" }}>Check-out</p>
          <p>Jan 22</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid gray",
          flex: 2,
          justifyContent: "space-evenly",

          lineHeight: "0.3rem",
          cursor: "pointer",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>
          <p style={{ fontSize: "small" }}>Travelers</p>
          <p>1 room, 2 travelers</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "navy",
          width: "50px",
          height: "50px",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        <FontAwesomeIcon
          style={{ width: "50%", height: "50%", color: "white" }}
          icon={faMagnifyingGlass}
        />
      </div>
    </div>
  );
}

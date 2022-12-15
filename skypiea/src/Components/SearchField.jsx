import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function SearchField() {
  return (
    <div
      style={{
        position: "absolute",
        width: "90%",
        maxWidth: "1247px",
        backgroundColor: "white",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "40%",
          margin: "auto",
          textAlign: "center",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <NavLink>Stays</NavLink>
        <NavLink>Flights</NavLink>
        <NavLink>Cars</NavLink>
        <NavLink>Packages</NavLink>
        <NavLink>Things to do</NavLink>
        <NavLink>Cruises</NavLink>
      </div>
      <hr style={{ width: "95%" }} />
      <div
        style={{
          width: "90%",
          display: "flex",
          margin: "auto",
          gap: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid gray",
            flex: 3,
            cursor: "pointer",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: "90%",
              display: "flex",
              alignItems: "center",
              margin: "auto",
              gap: "3%",
              color: "gray",
            }}
          >
            <FontAwesomeIcon style={{ color: "navy" }} icon={faLocationDot} />

            <input
              type="text"
              placeholder={`Going to`}
              style={{
                width: "100%",
                margin: "auto",
                height: "80%",
                fontSize: "large",
                outline: "none",
                border: "none",
              }}
            />
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
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          marginBottom: "50px",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "navy",
            color: "white",
            padding: "1.4% 6%",
            borderRadius: "10px",
            fontSize: "medium",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./styles/searchField.css";
import { format } from "date-fns";

export default function SearchField() {
  const [location, setLocation] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //
  const navigate = useNavigate();
  //
  const handleStaysInput = () => {
    localStorage.setItem(
      "startDate",
      JSON.stringify(format(date[0].startDate, "dd/MM/yyy"))
    );
    localStorage.setItem(
      "endtDate",
      JSON.stringify(format(date[0].endDate, "dd/MM/yyy"))
    );
    navigate("/hotels", { state: { location, date, options } });
  };
  //
  const handleCounter = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  //
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
      <div id="anon_navbar_two">
        <div>
          <NavLink>Stays</NavLink>
        </div>
        <div>
          <NavLink>Flights</NavLink>
        </div>
        <div>
          <NavLink>Cars</NavLink>
        </div>
        <div>
          <NavLink>Packages</NavLink>
        </div>
        <div>
          <NavLink>Things to do</NavLink>
        </div>
        <div>
          <NavLink>Cruises</NavLink>
        </div>
      </div>
      <hr style={{ width: "95%", marginBottom: "20px" }} />
      <div
        className="main_input_field"
        style={{
          width: "90%",
          display: "grid",
          margin: "auto",
          gap: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid gray",
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
              height: "55px",
            }}
          >
            <FontAwesomeIcon style={{ color: "navy" }} icon={faLocationDot} />

            <input
              type="text"
              placeholder={`Going to`}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
          onClick={() => setOpenDate(!openDate)}
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            border: "1px solid gray",
            justifyContent: "space-evenly",
            lineHeight: "0.3rem",
            cursor: "pointer",
            borderRadius: "10px",
            height: "55px",
          }}
        >
          <div style={{ fontSize: "large" }}>
            <FontAwesomeIcon icon={faCalendarDay} />
          </div>
          <div style={{ height: "100%" }}>
            <p style={{ fontSize: "small" }}>Check-in</p>
            <span>{`${format(date[0].startDate, "dd/MM/yyy")}`}</span>
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date_pick"
            />
          )}
        </div>
        <div
          onClick={() => setOpenDate(!openDate)}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid gray",
            flex: 1,
            justifyContent: "space-evenly",
            lineHeight: "0.3rem",
            cursor: "pointer",
            borderRadius: "10px",
            height: "55px",
          }}
        >
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
          </div>
          <div style={{ height: "100%" }}>
            <p style={{ fontSize: "small" }}>Check-out</p>
            <span>{`${format(date[0].endDate, "dd/MM/yyy")}`}</span>
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
            height: "55px",
          }}
        >
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div style={{ height: "100%" }}>
            <p style={{ fontSize: "small" }}>Travelers</p>
            <span
              onClick={() => setOpenOptions(!openOptions)}
            >{`${options.adult} Adult, ${options.children} Children, ${options.room} Room`}</span>
            {openOptions && (
              <div className="options_menu">
                <div>
                  <h3>Travelers</h3>
                </div>
                <div className="optionItem_list">
                  <div className="optionItem">
                    <span className="option_text">Adult</span>
                    <div className="counter_div">
                      <button
                        disabled={options.adult <= 1}
                        className="optionButton"
                        onClick={() => handleCounter("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounter">{options.adult}</span>
                      <button
                        disabled={options.adult >= 14}
                        className="optionButton"
                        onClick={() => handleCounter("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="option_text">Children</span>
                    <div className="counter_div">
                      <button
                        disabled={options.children <= 0}
                        className="optionButton"
                        onClick={() => handleCounter("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounter">{options.children}</span>
                      <button
                        disabled={options.children == 14}
                        className="optionButton"
                        onClick={() => handleCounter("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="option_text">Room</span>
                    <div className="counter_div">
                      <button
                        disabled={options.room == 1}
                        className="optionButton"
                        onClick={() => handleCounter("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounter">{options.room}</span>
                      <button
                        disabled={options.room >= 6}
                        className="optionButton"
                        onClick={() => handleCounter("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpenOptions(false)}
                  className="options_done_btn"
                >
                  Done
                </button>
              </div>
            )}
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
          onClick={handleStaysInput}
          style={{
            border: "none",
            backgroundColor: "#3498db",
            color: "white",
            padding: "1.4% 6%",
            borderRadius: "10px",
            fontSize: "medium",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

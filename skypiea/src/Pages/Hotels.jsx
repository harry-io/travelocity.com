import Navbar from "../Components/Navbar";
import InputField from "../Components/InputField";
import "../Styles/hotels.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import HotelList from "../Components/HotelList";
import axios from "axios";

export default function Hotels() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("Goa");
  useEffect(() => {
    axios
      .get(`https://rose-repulsive-adder.cyclic.app/${query}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="hotels_main_div">
        {/*  */}
        <div className="hotels_subDiv_a">
          <div className="subDivA_input">
            <InputField />
          </div>
          <div className="subDivA_hotel_info">
            <div className="filters_map">FILTERS AND MAP</div>
            <div className="hotels_result">
              <div className="sort_hotels_n_Properties">
                <div style={{ lineHeight: "0rem", width: "60%" }}>
                  <p style={{ fontSize: "small" }}>211 properties</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2%",
                      marginTop: "-10px",
                    }}
                  >
                    <p>See how we pick our recommended properties</p>
                    <FontAwesomeIcon
                      icon={faInfo}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div style={{ width: "40%" }}>
                  <select name="SortBy" id="">
                    <option value="Recommended">Recommended</option>
                    <option value="Price">Price</option>
                    <option value="Distance from downtown">
                      Distance from downtown
                    </option>
                    <option value="Guest ratings + Our picks">
                      Guest ratings + Our picks
                    </option>
                    <option value="Price + Our picks">Price + Our picks</option>
                    <option value="Star ratings">Star ratings</option>
                  </select>
                </div>
              </div>
              <div className="hotels_append_div">
                <HotelList data={data} />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="hotels_subDiv_b">
          <img
            style={{ width: "100%" }}
            src="https://tpc.googlesyndication.com/simgad/18356432804528933170"
            alt="img"
          />
        </div>
        {/*  */}
      </div>
    </>
  );
}

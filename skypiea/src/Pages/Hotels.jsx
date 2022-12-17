import Navbar from "../Components/Navbar";
import InputField from "../Components/InputField";
import "../Styles/hotels.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import HotelList from "../Components/HotelList";
import axios from "axios";
import Loading from "../Components/Loading";
import { useLocation } from "react-router-dom";

export default function Hotels() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  function loadingTimer() {
    setLoading(false);
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rose-repulsive-adder.cyclic.app/${location.state.location}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setTimeout(loadingTimer, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                    <div
                      style={{
                        lineHeight: "0rem",
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{ fontSize: "small" }}
                      >{`${data.length} properties`}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2%",
                          marginTop: "-10px",
                        }}
                      >
                        <p style={{ color: "#000" }}>
                          See how we pick our recommended properties
                        </p>
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          style={{
                            cursor: "pointer",
                            fontSize: "small",
                            color: "#000",
                          }}
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
                        <option value="Price + Our picks">
                          Price + Our picks
                        </option>
                        <option value="Star ratings">Star ratings</option>
                      </select>
                    </div>
                  </div>
                  <div className="hotels_append_div">
                    <HotelList data={data} query={location.state.location} />
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
              <img
                style={{ width: "100%" }}
                src="https://tpc.googlesyndication.com/simgad/14452936892372484238"
                alt="img"
              />
            </div>
            {/*  */}
          </div>
        </>
      )}
    </>
  );
}

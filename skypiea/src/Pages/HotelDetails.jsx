import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import HotelData from "../Components/HotelData";
export default function HotelDetails() {
  const location = useLocation();

  //
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function loadingTimer() {
    setLoading(false);
  }
  useEffect(() => {
    axios
      .get(
        `https://rose-repulsive-adder.cyclic.app/${location.state.query}/${location.state.id}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setTimeout(loadingTimer, 1500);
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <HotelData data={data} />
        </div>
      )}
    </>
  );
}

// (<Navbar />), (<HotelData />)

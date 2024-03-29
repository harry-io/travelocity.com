import NavbarB from "../Components/NavbarB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import PaymentB from "../Components/PaymentB";
import PaymentC from "../Components/PaymentC";

import { useState } from "react";
import Pimportant from "../Components/Pimportant";
import Payemntmethod from "../Components/Payemntmethod";

export default function Payment() {
  const lsData1 = JSON.parse(localStorage.getItem("hotelDetails")) || [];
  const lsData2 = JSON.parse(localStorage.getItem("hotelReserved")) || [];
  const checkIn = JSON.parse(localStorage.getItem("startDate")) || [];
  const checkOut = JSON.parse(localStorage.getItem("endtDate")) || [];
  //
  const userData = JSON.parse(localStorage.getItem("user_data"));
  const userEmail = userData.email;
  function convert(price) {
    let str = "";
    price = price.split("");
    let count = 0;
    for (let i = 0; i < price.length; i++) {
      if (price[i] == "R" || price[i] == "s" || price[i] == ",") {
        count++;
      } else {
        str += price[i];
      }
    }
    return Number(str);
  }

  //
  let price = convert(lsData2.price1);
  const [amount, setAmount] = useState(price);
  console.log("shbch", price);

  //
  const [coupon, setCoupon] = useState("");
  const handleCouponSubmit = (event) => {
    event.preventDefault();
    if (coupon == "NEWUSER30") {
      price = price - (price * 30) / 100;
      setAmount(price);
      alert("COUPON APPLIED !");
      setCoupon("");
      document.getElementsByClassName("couponField").placeholder =
        "Coupon applied";
    } else {
      alert("INVALID COUPON !");
    }
  };
  //
  return (
    <>
      <NavbarB />
      {/* A */}
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          gap: "2%",
          lineHeight: "0rem",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        <h2>Secure booking — only takes 2 minutes!</h2>
        <div
          style={{
            fontSize: "small",
            display: "flex",
            alignItems: "center",
            gap: "1%",
            color: "green",
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
          <p>You've picked a winner! This hotel is rated 9.2/10.</p>
        </div>
      </div>
      {/* B */}
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          display: "flex",
          gap: "2%",
          justifyContent: "space-between",
        }}
      >
        {/*  */}
        <div
          style={{
            width: "70%",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: "white",
              marginBottom: "10px",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <div
              style={{
                width: "95%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                backgroundColor: "white",
                padding: "0.7% 0",
              }}
            >
              <div>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div
                style={{
                  lineHeight: "0.1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "small",
                  }}
                >
                  Signed in as
                </p>
                <p>{userEmail}</p>
              </div>
            </div>
          </div>
          {/*  */}
          <PaymentB />
          <PaymentC />
          <Payemntmethod />
          <Pimportant />

          {/*  */}
        </div>

        {/* part 2 (right)*/}
        <div
          style={{
            width: "30%",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "150px",
                position: "relative",
                marginBottom: "10px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(70%)",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  marginBottom: "5px",
                }}
                src={lsData1.img1}
                alt="img"
              />
              <h3
                style={{
                  position: "absolute",
                  top: 0,
                  left: "10px",
                  color: "rgb(255, 255, 255)",
                }}
              >
                {lsData1.heading1}
              </h3>
            </div>

            {/*  */}
            <div
              style={{
                width: "90%",
                margin: "auto",
                backgroundColor: "rgb(255,255,255)",
                padding: "4% 5%",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <p>
                {lsData1.rating} {lsData1.review} {lsData1.no_of_reviews}
              </p>
              <p style={{ color: "green", fontSize: "small" }}>
                Guests rated this property 8.8/10 for cleanliness
              </p>
              <p style={{ color: "grey", fontSize: "small" }}>
                1 Room: Standard Room, 1 King Bed, Non Smoking
              </p>
              <p style={{ color: "green", fontSize: "small" }}>
                {lsData1.text3}
              </p>
              <p style={{ color: "#000", fontSize: "small" }}>
                Check in : {checkIn}
              </p>
              <p style={{ color: "#000", fontSize: "small" }}>
                Check out : {checkOut}
              </p>
            </div>
          </div>
          {/* Price Details */}
          <div
            style={{
              backgroundColor: "rgb(255,255,255)",
              padding: "2% 0",
              marginTop: "20px",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <div style={{ width: "90%", margin: "auto" }}>
              <h3>Price details</h3>
            </div>
            <hr />
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>1 room x 1 night</p>
              <p>{`₹ ${amount}`}</p>
            </div>
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Taxes and fees</p>
              <p>{`₹ ${Math.floor((amount * 5) / 100)}`}</p>
            </div>
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Local tax</p>
              <p>{`₹ ${Math.floor((amount * 2) / 100)}`}</p>
            </div>
            <hr style={{ width: "90%", margin: "auto" }} />
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>Total</h4>
              {`₹${
                convert(lsData2.price1) +
                Math.floor((amount * 5) / 100) +
                Math.floor((price * 2) / 100)
              }`}
            </div>
            {/*  */}
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <p>Pay now</p>
              <p>{`₹${
                ((convert(lsData2.price1) +
                  Math.floor((price * 5) / 100) +
                  Math.floor((price * 2) / 100)) *
                  60) /
                100
              }`}</p>
            </div>
            {/*  */}
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "grey",
              }}
            >
              <p>Pay at property</p>
              <p>{`₹${
                ((convert(lsData2.price1) +
                  Math.floor((price * 5) / 100) +
                  Math.floor((price * 2) / 100)) *
                  40) /
                100
              }`}</p>
            </div>
            {/*  */}
            <form
              onSubmit={handleCouponSubmit}
              style={{ width: "90%", margin: "auto" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <p style={{ fontSize: "x-small", color: "#3498db" }}>
                  Apply coupon (If Any)
                </p>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  className="couponField"
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  style={{
                    height: "30px",
                    border: "3px solid #3498db",
                    borderRadius: "10px",
                    padding: "0 3%",
                    width: "60%",
                  }}
                />
                <input
                  style={{
                    height: "35px",
                    width: "30%",
                    border: "none",
                    backgroundColor: "#3489db",
                    borderRadius: "10px",
                    color: "rgb(255,255,255)",
                    cursor: "pointer",
                  }}
                  type="submit"
                />
              </div>
            </form>
            {/*  */}
            <div
              style={{
                width: "90%",
                margin: "auto",
                fontSize: "x-small",
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "justify",
              }}
            >
              Rates are quoted in Indian Rupees. Taxes and/or property-imposed
              fees of 5% will be collected by the property in Rupees. Taxes
              and/or fees due at the property are based on current exchange
              rates, which may vary at the time of travel.
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          fontSize: "small",
          color: "gray",
          marginBottom: "60px",
        }}
      >
        <p>
          © 2022 Travelscape LLC, an Expedia Group Company. All rights reserved.
        </p>
        <p>
          Travelocity, the Stars Design, and The Roaming Gnome Design are
          trademarks or registered trademarks of Travelscape LLC. CST#
          2056372-50.
        </p>
      </div>
    </>
  );
}

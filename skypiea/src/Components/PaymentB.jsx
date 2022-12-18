import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CountryCode from "../Components/CountryCode";
import { useState } from "react";

export default function PaymentB() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1% 0" }}>
        <div
          style={{
            width: "95%",
            margin: "auto",
            lineHeight: "0.1rem",
            marginBottom: "20px",
          }}
        >
          <h3>Who's checking in?</h3>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
              <h4>Room 1: </h4>
              <span>
                <p>1 Room: Standard Room, 1 King Bed, Non Smoking</p>
              </span>
            </div>
            <div
              style={{
                width: "90%",
                height: "20px",
                display: "flex",
                alignItems: "center",
                gap: "2%",
                justifyContent: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2%",
                  height: "20px",
                  fontSize: "small",
                  width: "15%",
                  color: "green",
                  fontWeight: "600",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>Free parking</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2%",
                  fontSize: "1vw",
                  width: "15%",
                  fontSize: "small",
                  color: "green",
                  fontWeight: "600",
                  height: "20px",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
                <p>Free WiFi</p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div style={{ width: "100%" }} className="payment_info_input">
          <form style={{ width: "95%", margin: "auto" }}>
            <label htmlFor="" style={{ fontSize: "small" }}>
              Traveler name
              <span style={{ color: "red" }} class="required">
                *
              </span>
            </label>

            <div
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                gap: "2%",
                marginBottom: "20px",
              }}
            >
              <input
                style={{
                  flex: 1,
                  padding: "1% 1%",
                  borderRadius: "5px",
                  height: "30px",
                  outline: "1px solid #3498db",
                  border: "none",
                }}
                type="text"
                placeholder="First Name"
              />
              <input
                style={{
                  flex: 1,
                  padding: "1% 1%",
                  borderRadius: "5px",
                  height: "30px",
                  outline: "1px solid #3498db",
                  border: "none",
                }}
                type="text"
                placeholder="Last name"
              />
            </div>
            <label htmlFor="" style={{ fontSize: "small" }}>
              Mobile phone number
              <span style={{ color: "red" }} class="required">
                *
              </span>
            </label>
            <div
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                gap: "2%",
              }}
            >
              <CountryCode />
              <input
                style={{
                  flex: 2,
                  padding: "1% 1%",
                  borderRadius: "5px",
                  height: "30px",
                  outline: "1px solid #3498db",
                  border: "none",
                }}
                type="number"
                name=""
                id=""
                placeholder="So the property can reach you"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
                marginBottom: "20px",
              }}
            >
              <input type="checkbox" name="hbfhb" id="" />
              <label htmlFor="" style={{ fontSize: "small" }}>
                Receive text alerts about this trip. Message and data rates may
                apply.
              </label>
            </div>
          </form>
        </div>
        {/*  */}
      </div>
    </>
  );
}

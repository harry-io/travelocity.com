import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDollar, faMessage, faPen } from "@fortawesome/free-solid-svg-icons";

export default function E() {
  return (
    <>
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        <h1>Here to help keep you on the move</h1>
      </div>
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2%",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            justifyContent: "space-evenly",
            lineHeight: "0.5rem",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <div style={{ width: "80%", margin: "auto" }}>
            <h3>Change or cancel a trip</h3>
            <p style={{ fontSize: "small" }}>
              Make updates to your itenerary or cancel a booking
            </p>
          </div>

          <div
            style={{
              width: "10%",
              margin: "auto",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            justifyContent: "space-evenly",
            lineHeight: "0.5rem",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <div style={{ width: "80%", margin: "auto" }}>
            <h3>Use a credit or coupon</h3>
            <p style={{ fontSize: "small" }}>
              Apply a coupon code or credit to a new trip
            </p>
          </div>

          <div
            style={{
              width: "10%",
              margin: "auto",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faDollar} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            justifyContent: "space-evenly",
            lineHeight: "0.5rem",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <div style={{ width: "80%", margin: "auto" }}>
            <h3>Track your refnd</h3>
            <p style={{ fontSize: "small" }}>
              Check the status of a refund currently in progress
            </p>
          </div>

          <div
            style={{
              width: "10%",
              margin: "auto",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faMessage} />
          </div>
        </div>
      </div>
    </>
  );
}

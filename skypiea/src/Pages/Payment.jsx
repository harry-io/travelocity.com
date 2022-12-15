import NavbarB from "../Components/NavbarB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Payment() {
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
          lineHeight: "1rem",
          marginBottom: "20px",
        }}
      >
        <h3>Secure booking — only takes 2 minutes!</h3>
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
        }}
      >
        <div
          style={{
            width: "65%",
            backgroundColor: "white",
            padding: "0.7% 0",
          }}
        >
          <div
            style={{
              width: "95%",
              margin: "auto",

              display: "flex",
              alignItems: "center",
              gap: "1rem",
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
              <p>Email address</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "25%",
            border: "1px solid black",
          }}
        ></div>
      </div>
    </>
  );
}

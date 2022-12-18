import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavB() {
  return (
    <>
      <div
        className="nav_c"
        style={{ backgroundColor: "#3498db", width: "100%" }}
      >
        {/*  */}
        <div
          style={{
            width: "100%",
            height: "48px",
            maxWidth: "1247px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.8% 0 ",
            border: "1px solid red",
          }}
        >
          {/* part_a */}
          <div
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "0.8em",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                style={{ width: "100%", cursor: "pointer" }}
                src="https://i.ibb.co/7XX7GPJ/skypiea-logo.png"
                alt="skypiea_logo"
                onClick={() => alert("home")}
              />
            </div>
          </div>
          {/* part_b */}
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "flex-end",
              gap: "3%",
            }}
          >
            {/*  */}
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </button>
            {/*  */}
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                <FontAwesomeIcon icon={faBagShopping} />
              </div>
            </button>
            {/*  */}
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                <FontAwesomeIcon icon={faUser} />
              </div>
            </button>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </>
  );
}

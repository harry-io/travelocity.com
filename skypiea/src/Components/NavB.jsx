import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavB() {
  return (
    <>
      <div className="nav_b" style={{ backgroundColor: "navy", width: "100%" }}>
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
          }}
        >
          {/* part_a */}
          <div
            style={{
              width: "45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div style={{ width: "40%" }}>
              <img
                style={{ width: "100%", cursor: "pointer" }}
                src="https://i.ibb.co/7XX7GPJ/skypiea-logo.png"
                alt="skypiea_logo"
                onClick={() => alert("home")}
              />
            </div>
            <div
              style={{
                width: "45%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.775rem",
                    color: "#fff",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <p>More travel</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </button>
            </div>
          </div>
          {/* part_b */}
          <div
            style={{
              width: "15%",
              display: "flex",
              justifyContent: "space-evenly",
              gap: "3%",
            }}
          >
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

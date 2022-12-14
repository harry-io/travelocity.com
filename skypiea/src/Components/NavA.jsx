import MoreTravel from "./MoreTravel";

export default function NavA() {
  return (
    <>
      <div className="nav_a" style={{ backgroundColor: "navy", width: "100%" }}>
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
          {/*  */}
          <div
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
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
                  {/*  */}
                  <MoreTravel />
                  {/*  */}
                </div>
              </button>
            </div>
          </div>
          {/*  */}
          <div
            style={{
              width: "35%",
              display: "flex",
              color: "white",
              justifyContent: "space-between",
            }}
          >
            <div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Espanol
                </div>
              </button>
            </div>
            <div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  List your property
                </div>
              </button>
            </div>
            <div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Support
                </div>
              </button>
            </div>
            <div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Trips
                </div>
              </button>
            </div>
            <div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Sign in
                </div>
              </button>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </>
  );
}

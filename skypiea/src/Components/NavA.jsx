import MoreTravel from "./MoreTravel";
import UserPrompt from "./UserPrompt";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export default function NavA() {
  const [showMoreTravel, setShowMoreTravel] = useState(false);
  const [showUserPrompt, setShowUserPrompt] = useState(true);
  const { isAuth, prompt, setPrompt } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("Sign in");

  useEffect(() => {
    let lsdata_user = JSON.parse(localStorage.getItem("user_data"));
    isAuth ? setName(lsdata_user.firstName) : setName("Sign in");
  }, []);
  return (
    <>
      <div
        className="nav_a"
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
                onClick={() => navigate("/")}
              />
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <MoreTravel
                showMoreTravel={showMoreTravel}
                setShowMoreTravel={setShowMoreTravel}
              />
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
            <div style={{ position: "relative" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  onClick={() => setPrompt(!prompt)}
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  {name}
                </div>
                {prompt && <UserPrompt />}
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

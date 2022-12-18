import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
export default function NavbarB() {
  const navigate = useNavigate();
  const [user, setUser] = useState("User");
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    let userName = JSON.parse(localStorage.getItem("user_data"));
    isAuth ? setUser(userName.firstName) : setUser("User");
  });
  return (
    <>
      <div
        className="navbarB"
        style={{ backgroundColor: "#3498db", width: "100%" }}
      >
        {/*  */}
        <div
          style={{
            width: "100%",
            height: "40px",
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
              width: "10%",
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
                onClick={() => navigate("/")}
              />
            </div>
          </div>
          {/* part_b */}
          <div
            style={{
              width: "15%",
              display: "flex",
              justifyContent: "space-evenly",
              gap: "3%",
              color: "white",
            }}
          >
            {/*  */}
            <p style={{ fontSize: "1vw" }}>Hello, {user}</p>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </>
  );
}

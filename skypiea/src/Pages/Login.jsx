import { json, Link } from "react-router-dom";
import NavbarB from "../Components/NavbarB";
import "../Styles/inputField.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    let lsUserData = JSON.parse(localStorage.getItem("user_data"));
    if (lsUserData.email != email) {
      alert("No users found using the provided Email address !");
    } else if (lsUserData.password != password) {
      alert("Wrong or invalid password !");
    } else {
      setPassword("");
      setEmail("");
      login();
      alert("Logged in successfully !");
      navigate("/");
    }
  };
  const navigateToApple = () => {};
  const navigateToFb = () => {};

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      {/* TOP */}
      <NavbarB />
      {/* TOP */}
      <div className="mid" style={{ width: "28%", margin: "auto" }}>
        {/* MID */}
        {/* title */}

        <div style={{ width: "100%", textAlign: "left" }}>
          <h2>Sign in</h2>
        </div>
        {/* title */}
        <form
          onSubmit={handleLogin}
          style={{ width: "100%", textAlign: "left" }}
        >
          {/* inp_1*/}
          <div className="floating">
            <input
              id="input__username"
              className="floating__input"
              name="email"
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="input__username"
              className="floating__label"
              data-content="Email"
            ></label>
          </div>
          {/*inp_2  */}
          <div className="floating">
            <input
              id="input__password"
              className="floating__input"
              name="email"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="input__password"
              className="floating__label"
              data-content="Password"
            ></label>
          </div>
          {/*  */}

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              style={{ height: "1.125rem", width: "1.125rem" }}
            />

            <label
              style={{
                marginLeft: "10px",
                fontSize: "0.75rem",
                lineHeight: "calc(16/12)",
                color: "#505C66",
              }}
              htmlFor=""
            >
              Keep me signed in
            </label>
          </div>
          <input hidden type="submit" />
          {/*  */}
          <div style={{ textAlign: "justify" }}>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: "calc(16/12)",
                color: "#505C66",
              }}
            >
              Selecting this checkbox will keep you signed into your account on
              this device until you sign out. Do not select this on shared
              devices.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "calc(16/12)",
                color: "#505C66",
              }}
            >
              By signing in, I agree to the Travelocity{" "}
              <Link
                style={{ textDecoration: "none" }}
                to="https://www.travelocity.com/lp/lg-terms"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                style={{ textDecoration: "none" }}
                to="https://www.travelocity.com/lp/lg-privacy"
              >
                Privacy Statement
              </Link>
              .
            </p>
          </div>
          {/*  */}
        </form>
        <button
          style={{
            background: "#3498db",
            color: "white",
            width: "100%",
            border: "none",
            height: "50px",
            borderRadius: "10px",
            fontSize: "20px",
            marginBottom: "25px",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={handleLogin}
        >
          Sign In
        </button>
        {/* MID */}
      </div>
      {/* BOTTOM */}
      <div style={{ width: "20%", margin: "auto", textAlign: "center" }}>
        <Link to="/">Forgot Password ?</Link>
        <p
          style={{
            fontSize: "0.85rem",
            lineHeight: "calc(16/12)",
            color: "#505C66",
            marginTop: "15px",
            marginBottom: "45px",
          }}
        >
          Don't have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/signup">
            Create One
          </Link>
        </p>
        <p>or continue with</p>
        <div
          style={{
            width: "20%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            onClick={() => navigateToApple}
            style={{ width: "30%", cursor: "pointer" }}
            src="https://a.travel-assets.com/egds/marks/apple.svg"
            alt="apple id"
          />
          <img
            onClick={() => navigateToFb}
            style={{ width: "30%", cursor: "pointer" }}
            src="https://a.travel-assets.com/egds/marks/facebook.svg"
            alt="facebook"
          />
        </div>
      </div>
      {/* BOTTOM */}
    </div>
  );
}

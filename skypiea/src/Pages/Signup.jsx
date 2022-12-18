import "../Styles/inputField.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarB from "../Components/NavbarB";
import { useNavigate } from "react-router-dom";
const navigateToApple = () => {};
const navigateToFb = () => {};

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    //
    if (firstName === "") {
      alert("Invalid first name !");
    } else if (lastName === "") {
      alert("Invalid last name !");
    } else if (password === "" || password.length <= 0) {
      alert("Enter valid password !");
    } else if (email === "") {
      alert("Enter email address !");
    } else {
      let profileData = { firstName, lastName, email, password };

      localStorage.setItem("user_data", JSON.stringify(profileData));

      alert("Account created successfully !");
      setFirstName("");
      setLastName("");
      setPassword("");
      setEmail("");
      navigate("/login");
    }
    //
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      {/* TOP */}
      <NavbarB />
      {/* TOP */}
      <div className="mid" style={{ width: "28%", margin: "auto" }}>
        {/* MID */}
        {/* title */}

        <div style={{ width: "100%", textAlign: "left" }}>
          <h2>Create an account</h2>
        </div>
        {/* title */}
        <form
          onSubmit={handleSignup}
          style={{ width: "100%", textAlign: "left" }}
        >
          {/* inp_1*/}
          <div className="floating">
            <input
              id="input__email"
              className="floating__input"
              name="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="input__email"
              className="floating__label"
              data-content="Email address"
            ></label>
          </div>
          {/*inp_2  */}
          <div className="floating">
            <input
              id="input__first_name"
              className="floating__input"
              name="firstName"
              type="text"
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label
              htmlFor="input__first_name"
              className="floating__label"
              data-content="First name"
            ></label>
          </div>
          {/*  */}
          <div className="floating">
            <input
              id="input__last_name"
              className="floating__input"
              name="lastname"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label
              htmlFor="input__last_name"
              className="floating__label"
              data-content="Last name"
            ></label>
          </div>
          {/*  */}
          <div className="floating">
            <input
              id="input__password"
              className="floating__input"
              name="email"
              type="password"
              placeholder="Email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="input__username"
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
          <div style={{ width: "100%", textAlign: "justify" }}>
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
                style={{ textDecoration: "none", color: "#3498db" }}
                to="https://www.travelocity.com/lp/lg-terms"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                style={{ textDecoration: "none", color: "#3498db" }}
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
          onClick={handleSignup}
        >
          Continue
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
            color: "#000",
            marginTop: "15px",
            marginBottom: "45px",
          }}
        >
          Already have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "#3498db" }}
            to="/login"
          >
            Sign in
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

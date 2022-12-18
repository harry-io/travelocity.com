import "../Styles/userPrompt.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { set } from "date-fns";

export default function AfterLogin() {
  const navigate = useNavigate();
  const { setPrompt, logout, prompt } = useContext(AuthContext);
  const handleSignout = () => {
    logout();
    setPrompt(!prompt);
    localStorage.removeItem("hotelReserved");
    localStorage.removeItem("hotelDetails");
    navigate("/login");
  };
  return (
    <div className="signin_pop">
      {/*  */}
      <div className="signin_div_a">
        <div className="signin_heading">
          <h3>{`User`}</h3>
        </div>
        <div className="signin_buttons">
          <button onClick={handleSignout}>Sign out</button>
          <button>Account</button>
        </div>
      </div>
      {/*  */}
      <div className="extras_signin">
        <div className="inner_signin">
          <Link>List of favorites</Link>
        </div>
      </div>
      <hr />
      {/*  */}
      <div className="extras_signin">
        <div className="inner_signin">
          <Link>Feedback</Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

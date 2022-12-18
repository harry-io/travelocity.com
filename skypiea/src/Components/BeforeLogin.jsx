import "../Styles/userPrompt.css";
import { Link, useNavigate } from "react-router-dom";

export default function BeforeLogin() {
  const navigate = useNavigate();
  return (
    <div className="signin_pop">
      {/*  */}
      <div className="signin_div_a">
        <div className="signin_heading">
          <h3>Members can access discounts and special features</h3>
        </div>
        <div className="signin_buttons">
          <button onClick={() => navigate("/login")}>Sign in</button>
          <button onClick={() => navigate("/signup")}>
            Create a free account
          </button>
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

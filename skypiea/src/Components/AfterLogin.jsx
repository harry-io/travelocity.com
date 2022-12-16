import "../Styles/userPrompt.css";
import { Link } from "react-router-dom";

export default function AfterLogin() {
  return (
    <div className="signin_pop">
      {/*  */}
      <div className="signin_div_a">
        <div className="signin_heading">
          <h3>Members can access discounts and special features</h3>
        </div>
        <div className="signin_buttons">
          <button>Sign in</button>
          <button>Create a free account</button>
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

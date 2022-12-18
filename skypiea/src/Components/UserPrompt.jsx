import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";
export default function UserPrompt() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <AfterLogin /> : <BeforeLogin />;
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useNavigate } from "react-router-dom";
export default function A() {
  const navigate = useNavigate();
  return (
    <div className="hoteldata_a">
      <div onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>See all porperties</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
        <p>Save</p>
      </div>
    </div>
  );
}

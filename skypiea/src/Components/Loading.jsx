import "../Styles/Loading.css";
export default function Loading() {
  return (
    <div className="loader_container">
      <div className="loader_inner_container">
        <div className="loader_with_img">
          <img src="https://i.ibb.co/7XX7GPJ/skypiea-logo.png" alt="img" />
        </div>
        <div className="loader"></div>
      </div>
    </div>
  );
}

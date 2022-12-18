export default function Filters() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src="https://maps.googleapis.com/maps/api/staticmap?channel=expedia-HotelInformation&maptype=roadmap&format=jpg&zoom=&size=600x400&map_id=3b266eb50d2997c6&markers=icon:https://a.travel-assets.com/travel-assets-manager/eg-maps/property.png%7C15.336037,73.897259%7C15.327758,73.898979%7C15.532102,73.766875%7C15.336037,73.897259%7C15.156707,73.949605%7C15.373626,73.833424%7C15.493673,73.819877%7C15.639187,73.723883%7C15.470695,73.808283%7C15.232423,73.943381&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=JWpODrDHK8_MSJ1IpoWuYhPQ-mw="
          alt="img"
        />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Search by category</h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          style={{
            height: "40px",
            borderRadius: "10px",
            width: "100%",
            border: "1px solid grey",
            padding: "2%",
            marginBottom: "20px",
          }}
        />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <h4>Filter by</h4>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <h5>popular filters</h5>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input type="checkbox" />
          <p>Ocean view</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input type="checkbox" />
          <p>All inclusive</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input type="checkbox" />
          <p>Breakfast included</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input type="checkbox" />
          <p>Hotel</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input type="checkbox" />
          <p>Hotel resort</p>
        </div>
      </div>
    </>
  );
}

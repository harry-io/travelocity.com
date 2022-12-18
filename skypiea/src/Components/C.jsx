export default function C() {
  return (
    <div
      className="home_c_main"
      style={{
        width: "90%",
        maxWidth: "1247px",
        margin: "auto",
        display: "grid",

        gap: "2%",
        marginTop: "50px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            filter: "brightness(80%)",
            borderRadius: "10px",
          }}
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          alt="img"
        />
        <div
          style={{
            position: "absolute",
            width: "95%",
            margin: "auto",
            bottom: 1,
            textAlign: "center",
          }}
        >
          <h2 style={{ textShadow: "2px 2px 8px grey", color: "white" }}>
            Sunny beach hotel offers
          </h2>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            filter: "brightness(80%)",
            borderRadius: "10px",
          }}
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          alt="img"
        />
        <div
          style={{
            position: "absolute",
            width: "95%",
            margin: "auto",
            bottom: 1,
            textAlign: "center",
          }}
        >
          <h2 style={{ textShadow: "2px 2px 8px grey", color: "white" }}>
            Car rental deals
          </h2>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            filter: "brightness(80%)",
            borderRadius: "10px",
          }}
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          alt="img"
        />
        <div
          style={{
            position: "absolute",
            width: "95%",
            margin: "auto",
            bottom: 1,
            textAlign: "center",
          }}
        >
          <h2 style={{ textShadow: "2px 2px 8px grey", color: "white" }}>
            Member discounts
          </h2>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            filter: "brightness(80%)",
            borderRadius: "10px",
          }}
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh"
          alt="img"
        />
        <div
          style={{
            position: "absolute",
            width: "95%",
            margin: "auto",
            bottom: 1,
            textAlign: "center",
          }}
        >
          <h2 style={{ textShadow: "2px 2px 8px grey", color: "white" }}>
            Vacation rental offers
          </h2>
        </div>
      </div>
    </div>
  );
}

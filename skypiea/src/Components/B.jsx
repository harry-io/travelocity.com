export default function B() {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1247px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2%",
        marginTop: "50px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            filter: "brightness(60%)",
            borderRadius: "10px",
          }}
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_1199x399_20211104.jpg"
          alt="img"
        />
        <div
          style={{
            position: "absolute",
            top: 1,
            color: "white",
            padding: "2%",
          }}
        >
          <h2 style={{ textShadow: "2px 2px 8px grey" }}>
            All-inclusive resorts
          </h2>
          <p style={{ textShadow: "2px 2px 8px grey" }}>
            Think of nothing beyond having a great time with your family
          </p>
          <button
            style={{
              border: "2px solid navy",
              padding: "2% 2.5%",
              borderRadius: "10px",
              color: "navy",
              backgroundColor: "aliceblue",
              fontWeight: 600,
            }}
          >
            View deals
          </button>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            filter: "brightness(60%)",
            borderRadius: "10px",
          }}
          src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_1199x399_20211104.jpg"
          alt="img"
        />
        <div
          style={{
            position: "absolute",
            top: 1,
            color: "white",
            padding: "2%",
          }}
        >
          <h2 style={{ textShadow: "2px 2px 8px grey" }}>
            Last minute getaways
          </h2>
          <p style={{ textShadow: "2px 2px 8px grey" }}>
            Celebrate the moment with an unexpected getaway
          </p>
          <button
            style={{
              border: "2px solid navy",
              padding: "2% 2.5%",
              borderRadius: "10px",
              color: "navy",
              backgroundColor: "aliceblue",
              fontWeight: 600,
            }}
          >
            View deals
          </button>
        </div>
      </div>
    </div>
  );
}

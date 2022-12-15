export default function NavbarB() {
  return (
    <>
      <div
        className="navbarB"
        style={{ backgroundColor: "navy", width: "100%" }}
      >
        {/*  */}
        <div
          style={{
            width: "100%",
            height: "48px",
            maxWidth: "1247px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.8% 0 ",
          }}
        >
          {/* part_a */}
          <div
            style={{
              width: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "0.8em",
            }}
          >
            <div style={{ width: "100%" }}>
              <img
                style={{ width: "100%", cursor: "pointer" }}
                src="https://i.ibb.co/7XX7GPJ/skypiea-logo.png"
                alt="skypiea_logo"
                onClick={() => alert("home")}
              />
            </div>
          </div>
          {/* part_b */}
          <div
            style={{
              width: "15%",
              display: "flex",
              justifyContent: "space-evenly",
              gap: "3%",
              color: "white",
            }}
          >
            {/*  */}
            <p style={{ fontSize: "1vw" }}>Hello, name</p>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </>
  );
}

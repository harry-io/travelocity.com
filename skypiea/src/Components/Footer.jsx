export default function Footer() {
  return (
    <div>
      {/* START */}
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            width: "10%",
            height: "40px",
            backgroundColor: "#3498db",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "80%" }}
            src="https://i.ibb.co/7XX7GPJ/skypiea-logo.png"
            alt="img"
          />
        </div>
      </div>
      {/*  */}
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          color: "#3498db",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            fontSize: "small",
            lineHeight: "2rem",
          }}
        >
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Jobs</a>
          <a href="#">List your property</a>
          <a href="#">Partnerships</a>
          <a href="#">Newsroom</a>
          <a href="#">Investor Relations</a>
          <a href="#">Roaming Gnome Store</a>
          <a href="#S">Advertising</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            fontSize: "small",
            lineHeight: "2rem",
          }}
        >
          <h4>Explore</h4>
          <a href="#">Hotels in United States</a>
          <a href="#">Vacation Rentals in United States</a>
          <a href="#">Vacation Packages in United States</a>
          <a href="#">Domestic Flights</a>
          <a href="#">Car Rentals in United States</a>
          <a href="#">Travelocity Reviews</a>
          <a href="#">Travelocity Coupons</a>
          <a href="#">Unique Places to Stay</a>
          <a href="#">Travel Blog</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            fontSize: "small",
            lineHeight: "2rem",
          }}
        >
          <h4>Policies</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of use</a>
          <a href="#">Vrbo Terms and conditions</a>
          <a href="#">Accessibility</a>
          <a href="#">Your Privacy Choices</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            fontSize: "small",
            lineHeight: "2rem",
          }}
        >
          <h4>Help</h4>
          <a href="#">Suppor</a>
          <a href="#">Cancel your hotel or vacation rental booking</a>
          <a href="#">Cancel your flight</a>
          <a href="#">Refund timelines, policies & processes</a>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          marginTop: "40px",
        }}
      />
      <div
        style={{
          width: "90%",
          maxWidth: "1247px",
          margin: "auto",
          fontSize: "small",
          color: "gray",
          marginBottom: "60px",
        }}
      >
        <p>
          © 2022 Travelscape LLC, an Expedia Group Company. All rights reserved.
        </p>
        <p>
          Travelocity, the Stars Design, and The Roaming Gnome Design are
          trademarks or registered trademarks of Travelscape LLC. CST#
          2056372-50.
        </p>
      </div>
      {/* END */}
    </div>
  );
}

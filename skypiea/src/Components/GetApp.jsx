export default function GetApp() {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        maxWidth: "1247px",
        display: "flex",
        borderRadius: "10px",
        marginBottom: "60px",
        gap: "30px",
        backgroundColor: "white",
        outline: "1px dotted gray",
      }}
    >
      <div style={{ flex: 2 }}>
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
          src="https://a.travel-assets.com/mad-service/footer/marquee/TVLY_App_Footer_v1.jpg"
          alt="img"
        />
      </div>
      <div style={{ flex: 3 }}>
        <h2>Wander Wisely with the Skypeia app</h2>
        <ul style={{ fontSize: "small", color: "gray" }}>
          <li>Get helpful alerts about flight status and gate numbers</li>
          <li>Access all your travel details, even when offline</li>
          <li>Easily contact your hotel by messaging them right in the app</li>
        </ul>
        <h3>Text Yourself a download link</h3>

        <div style={{ display: "flex", flex: 1, height: "50px", gap: "2%" }}>
          <select
            style={{
              width: "30%",
              borderRadius: "10px",
              color: "gray",
              padding: "2%",
            }}
            id="countryCode"
            name="countryCode"
            class="uitk-field-select"
          >
            <option value="+54,Argentina">Argentina +54</option>
            <option value="+61,Australia">Australia +61</option>
            <option value="+43,Austria">Austria +43</option>
            <option value="+32,Belgium">Belgium +32</option>
            <option value="+55,Brazil">Brazil +55</option>
            <option value="+1,Canada">Canada +1</option>
            <option value="+45,Denmark">Denmark +45</option>
            <option value="+358,Finland">Finland +358</option>
            <option value="+33,France">France +33</option>
            <option value="+49,Germany">Germany +49</option>
            <option value="+852,HongKong">Hong Kong SAR +852</option>
            <option value="+91,India">India +91</option>
            <option value="+353,Ireland">Ireland +353</option>
            <option value="+39,Italy">Italy +39</option>
            <option value="+81,Japan">Japan +81</option>
            <option value="+52,Mexico">Mexico +52</option>
            <option value="+31,Netherlands">Netherlands +31</option>
            <option value="+64,New_Zealand">New Zealand +64</option>
            <option value="+47,Norway">Norway +47</option>
            <option value="+63,Philippines">Philippines +63</option>
            <option value="+65,Singapore">Singapore +65</option>
            <option value="+82,South_Korea">South Korea +82</option>
            <option value="+34,Spain">Spain +34</option>
            <option value="+46,Sweden">Sweden +46</option>
            <option value="+41,Switzerland">Switzerland +41</option>
            <option value="+886,Taiwan">Taiwan +886</option>
            <option value="+66,Thailand">Thailand +66</option>
            <option value="+44,United_Kingdom">United Kingdom +44</option>
            <option value="+1,USA">USA +1</option>
          </select>
          <input
            style={{
              width: "30%",
              borderRadius: "10px",
              border: "1px solid gray",
              padding: "2%",
            }}
            type="tel"
            name=""
            id=""
            placeholder="Phone number"
          />
          <button
            style={{
              width: "30%",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "navy",
              color: "white",
              fontSize: "1.1vw",
              cursor: "pointer",
            }}
          >
            Get the app
          </button>
        </div>
        <p style={{ fontSize: "small", color: "gray" }}>
          By providing your number, you agree to receive a one-time automated
          text message with a link to get the app. Standard text message rates
          may apply.
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src="https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_travelocity.png"
          alt="img"
        />
      </div>
    </div>
  );
}

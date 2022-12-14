import SearchField from "./SearchField";

export default function Header() {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "100%" }}
        src="https://forever.travel-assets.com/flex/flexmanager/images/2021/06/25/TVLY_SeizeYourSomeday_lpheroB_1680x945_20210623.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh"
        alt="header_img"
      />
      <SearchField />
    </div>
  );
}

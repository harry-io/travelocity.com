import "../Styles/HotelData.css";
import A from "../Components/HotelRelatedData/A";
import B from "../Components/HotelRelatedData/B";
import C from "../Components/HotelRelatedData/C";
export default function HotelData({ data }) {
  const { img1, img2, img3, img4 } = data;
  return (
    <>
      <div className="hotel_data_main_div">
        {/* start */}
        <div className="hotel_data_subMain_div">
          {/* ------------------------------------- */}
          {/* a */}
          <div className="info_section">
            <A />
            <B img1={img1} img2={img2} img3={img3} img4={img4} />
            <C />
          </div>
          {/* b */}
          <div className="ad_section">
            <img
              src="https://tpc.googlesyndication.com/simgad/18356432804528933170"
              alt="img"
            />
            <img
              src="https://tpc.googlesyndication.com/simgad/1479921553193853953?"
              alt="img"
            />
          </div>
          {/* =========================================== */}
        </div>
        {/* end */}
      </div>
    </>
  );
}

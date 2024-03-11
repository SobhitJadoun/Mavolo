import Group from "../assets/group-1.svg";
import UP1 from "../assets/UP1.png";
import Up2 from "../assets/Up2.png";
import Up3 from "../assets/Up3.png";
import Up4 from "../assets/Up4.png";
export default function Service() {
  return (
    <>
      <div className="container service mt-5">
      <h2 className="text-center text-secondary  ">Service</h2>
        <div className="row">
          <div className="col-12 col-sm-4 col-md-4 card1">
            <div className="img1">
              <img className="img-fluid" src={Up4} alt="" />
            </div>
            <div className="row mt-3">
              <div className="col-6 col-sm-6 col-md-6">
                <h2>ODM</h2>
              </div>
              <div className="col-6 col-sm-6 col-md-6">
                <p>Orginal Design Manufacture</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-7 col-md-7 card2">
         <div className="img2">
          <img className="img-fluid" src={Up2} alt=""/>
          {/* <span>></span> */}
          <img className="img-fluid" src={Up3} alt="" />
          {/* <span>></span> */}
          <img className="img-fluid" src={UP1} alt="" />
         </div>
         <div className="row mt-3">
              <div className="col-6 col-sm-6 col-md-6">
                <h2>OEM</h2>
              </div>
              <div className="col-6 col-sm-6 col-md-6">
                <p>Orginal Equipment Manufacture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

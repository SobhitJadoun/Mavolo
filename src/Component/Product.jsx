import Usb from "../assets/usb.png";

export default function Product() {
  return (
    <>
      <div className="container-fluid  mt-5 product">
      <h2 className="text-center text-secondary pt-5"> Products </h2>
        <div className="row main">
          <div className="col-12 col-sm-5 col-md-5 left">
            <div className="content">
                <h3 className="text-light">HERO USB OF YOUR BRAND </h3>
                <span className="bg-light"> Dual Port 22W</span>
                <p className="text-light mt-3">India’s First 22W Rapid
<br/>Charging Socket</p>
<button className="bg-light"><a href="#">Know More</a></button>
                </div>
                <div className="img">
                <img src={Usb} alt="" /></div>
              </div>
          <div className="col-12 col-sm-5 col-md-5 left">
            <div className="content">
                <h3 className="text-light">HERO USB OF YOUR BRAND </h3>
                <span className="bg-light"> USB 10W/12W</span>
                <p className="text-light mt-3">India’s Default Integrated <br/>Charger for  Every Home</p>
                <button className="bg-light"><a href="#">Know More</a></button>
                </div>
                <div className="img">
                <img src={Usb} alt="" /></div>
              </div>
          </div>
      </div>
    </>
  );
}

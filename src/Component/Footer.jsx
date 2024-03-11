import Logo from '../assets/logo.png'
export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
            <div className="col-6 col-sm-6 col-md-6">
                <img className='img-fluid' src={Logo} alt="" />
            </div>
            <div className="col-6 col-sm-6 col-md-6  m-auto">
              <div className="icon">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i></div>
            </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-6 col-md-6 add">
            <h4 className='font-weight-bold'>Register Address</h4>
            <p>Block - C -168,Second floor, sector 10,Noida Gautam Buddha Nagar ,India - 201301</p>
            <p>For any queries or concerns, write to us at           <b>preinfo@mavolo.in</b></p>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <div className="right">
            <i class="fa-solid fa-phone"></i> 
            <span> Mob- +91 8861587589, 7892653145, 9787093848</span>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

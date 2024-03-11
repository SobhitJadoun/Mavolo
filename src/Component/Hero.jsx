import HeroImg from '../assets/back.png'
export default function Hero() {
  return (
    <>
      <div className="container-fluid hero">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 left">
                <h2 className='display-2'>We <span>Develop</span> Integrated Charging Solutions</h2>
                <button><a href="#">Get In Touch</a></button>
            </div>
            <div className="col-12 col-sm-6 col-md-6 right">
                <img className='img-fluid d-flex mt-5' src={HeroImg} alt="" />
            </div>
        </div>
      </div>
      
    </>
  )
}

import Card from "./Card";

export default function About() {
  return (
    <>
    <div className="container-fluid about p-3 mt-5">
      <h2 className="text-center mt-5 text-secondary">About Us</h2>
        <div className="row ">
            <div className="col-12 col-sm-4  mb-5 ">
                <Card heading='Our Story' content='We saw a discomfort in the gadget charging space, where every device has..'></Card>
            </div>
            <div className="col-12 col-sm-4  mb-5">
                <Card heading='Our Mission' content='To help businesses grow with our innovations'></Card>
            </div>
            <div className="col-12 col-sm-4  mb-5">
                <Card heading='Our Vision' content='To be the beacon of technology, which drives humanity for a better tomorrow'></Card>
            </div>
        </div>
    </div>
    </>
  )
}

import React, { useState } from "react";
import FormImg from '../assets/upto-12-1@2x.png'
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    product: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      product: "",
      description: "",
    });
  };

  return (
    <div className="container form">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
      <p>Contact Us</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          
          <input
            type="text"
            placeholder="Contact No. "
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
       
         
          <input
            type="text"
            id="product"
            placeholder="Product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          
          <textarea
            id="description"
            name="description"
            placeholder="Please Enter your query"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button className="text-light" type="submit">Submit</button>
      </form>
    </div>
    <div className="col-12 col-sm-6 col-md-6">
        <div className="img">
        <img src={FormImg} alt="" /></div>
    </div>
    </div>
    </div>
  );
}

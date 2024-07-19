import React from "react";
import Handy from "../assets/Handy.webp";
function News() {
  return (
    <section className='order overflow-hidden'>
    <div className='container'>
        <h2>Download</h2>
        <h1>Best cab servies</h1>
        <div className='row'>
            <div className='col-md-5'>
                <h3>Downlaod the Cab voucher app free! Get Exciting New Offers</h3>
        
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, quam, quis laudantium provident, Quibusdam, quam, quis
              laudantium provident,
            </p>
            <button className="btn">Order Now</button>
            <button className="btn">Read More</button>
          </div>
          <div className='col-md-7 element-center'>
            <img src={Handy} width="350" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default News;

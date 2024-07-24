import React from "react";
import Handy from "../assets/Handy.webp";
import "./Belege.css";
function Belege() {
  return (
    <main className="Order-Now">
      <div className="Order">
        <h2>Download</h2>
        <h1>Best Taxi servies</h1>
        <div className="row">
          <div className="col-md-5">
            <h3>Downlaod the Taxi voucher app free! Get Exciting New Offers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, quam, quis laudantium provident, Quibusdam, quam, quis
              laudantium provident,
            </p>
            <button className="btn">Order Now</button>
            <button className="btn">Read More</button>
          </div>
          <div className="col-md-7 element-center">
            <img src={Handy} width="550" />
          </div>
        </div>
      </div>
    </main>
  );
}
export default Belege;

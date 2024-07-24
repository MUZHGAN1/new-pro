import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import Überuns from "./Überuns";
import "./Kontakt.css";

function Kontạkt() {
  return (
    <>
      <main className="main-container">
        <div className="main-box">
          <h4>About Azamy Taxi</h4>
       
          <div className="line-separator"></div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae, quam? Quisquam repellendus quia nostrum ex libero
            reprehenderit dolore. Laboriosam, nobis officia impedit quia quo
            dicta velit maxime quos ducimus nam?
          </p>
          <div>
            <a className="social-links" href="">
              <i className="fa fa-facebook"></i>
              <FaFacebookF />
              <FaGooglePlusSquare />
              <FaTwitter />
              <FaInstagramSquare />
            </a>
            <a className="social-links" href="">
              <i className="fa fa-google-plus"></i>
            </a>
            <a className="social-links" href="">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="social-links" href="">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="main-box">
          <h4>Download</h4>
         
          <div className="line-separator"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quas
            officiis, itaque culpa inventore doloribus,
          </p>
          <div>
            <div>
              <a className="phone-users" href="">
                <IoLogoAndroid />
                Android Users
              </a>
              <i className="fa fa-android"></i>
            </div>
            <div>
              <a className="phone-users" href="">
                <FaApple />
                IOS users
              </a>
              <i className="fa fa-apple"></i>
            </div>
          </div>
        </div>

        <div className="main-box">
          <h4>Kontakt</h4>
         
          <div className="line-separator"></div>

          <div className="contact-row">
            <div className="col-xs-1">
              <i className="fa fa-road"></i>
            </div>
            <div className="col-xs-10">
              <p className="contact-paragraph">
                <FaRoad />
                Main Street, Your City, Munic, Germany
              </p>
            </div>
          </div>
          <div className="contact-row">
            <div className="col-xs-1">
              <i className="fa fa-mobile fa-lg"></i>
            </div>
            <div className="col-xs-10">
              <p className="contact-paragraph">+123 4567 8900</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="col-xs-1">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="col-xs-10">
              <p className="contact-paragraph">abs@asdfasdf.com</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="col-xs-1">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="col-xs-10">
              <p className="contact-paragraph">abs@asdfasdf.com</p>
            </div>
          </div>
        </div>
        </main>
        <Überuns/>
      
    </>
  );
}
export default Kontạkt;

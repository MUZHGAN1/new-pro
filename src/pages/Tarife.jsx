import React from "react";

import "./Tarife.css";

function Tarife() {
  return (
    <section className="details">
      <h1>WE MOVE YOU</h1>
      <button className="btn">Read more</button>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="col-xs-2">
              <div className="fa-background">
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="col-xs-9">
              <h3>Home Pickup</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                odit, exercitationem distinctio dignissimos harum facere!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-xs-2">
              <div className="fa-background">
                <i className="fa fa-hourglass"></i>
              </div>
            </div>
            <div className="col-xs-9">
              <h3>Home Pickup</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                odit, exercitationem distinctio dignissimos harum facere!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-xs-2">
              <div className="fa-background">
                <i className="fa fa-glass"></i>
              </div>
            </div>
            <div className="col-xs-9">
              <h3>Home Pickup</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                odit, exercitationem distinctio dignissimos harum facere!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-xs-2">
              <div className="fa-background">
                <i className="fa fa-gears"></i>
              </div>
            </div>
            <div className="col-xs-9">
              <h3>Home Pickup</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                odit, exercitationem distinctio dignissimos harum facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tarife;

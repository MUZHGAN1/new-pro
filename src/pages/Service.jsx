 import React from 'react'
 import auto from "../assets/images/auto.jpg";

function Service() {

  return( <section className="blog">
    <div className="container">
      <h2>Our</h2>
      
      <h1>Tariffs</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="blog-offert">
         <img src={auto} width="350" />
            <h3>Economy Class</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h2>€1,5/km</h2>
            <button className="btn">Read more</button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="blog-offert">
          <img src={auto} width="350" />
            <h3>Economy Class</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h2>€1,5/km</h2>
            <button className="btn">Read more</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-offert">
          <img src={auto} width="350" />
            <h3>Economy Class</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h2>€1,5/km</h2>
            <button className="btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </section>);
}

export default Service;
// return <div>UNSER SERVICE</div>;

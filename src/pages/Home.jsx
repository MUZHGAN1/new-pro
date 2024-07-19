// import React from 'react'

// import logo from "./assets/logo.png";
import herocar from "../assets/herocar.jpg";

import "./Home.css";
function Home() {
  return (
    <>
    <section className="hero">
      <div className="container">
        <h2> TAXI AZAMY</h2>
        <h1>BOOK TAXI NAW</h1>
        <h1> 017672992701 </h1>
      </div>
    </section>
     <section className="">
     <img src={herocar} alt="herocar" />
     <div className="container">
       <div className="row">
         <div className="col-md-6">
           <h1>Best In City</h1>
           <h2>Trusted Taxi Servies in Munic</h2>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
             doloribus atque? Harum iste nulla ipsa optio eaque odit ducimus
             assumenda rem. Inventore dicta aspernatur distinctio quod
             officia hic laudantium cum?Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Fuga, doloribus! Hic
             exercitationem,
           </p>

           <button className="btn">Read More</button>
         </div>
         <div className="col-md-6">
           <div className="form-container">
             <form className="call-form">
               <h3 className="form-header">Taxi</h3>
               <div className="row">
                 <div className="col-xs-6">
                   <label>Name</label>
                   <input type="text" />
                 </div>
                 <div className="col-xs-6">
                   <label>Phone</label>
                   <input type="text" />
                 </div>
               </div>
               <div className="row">
                 <div className="col-xs-6">
                   <label>When</label>
                   <input type="text" />
                 </div>
                 <div className="col-xs-6">
                   <label>Time</label>
                   <input type="text" />
                 </div>
               </div>
               <div className="row">
                 <div className="col-xs-6">
                   <label>Start</label>
                   <input type="text" />
                 </div>
                 <div className="col-xs-6">
                   <label>End</label>
                   <input type="text" />
                 </div>
                 <div className="col-xs-12">
                   <label>Choose Vehicle</label>
                   <input type="text" />
                 </div>
                 <input type="submit" value="submit" />
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </section>
   
   {/* <Service />
      <Tarife />
      <News />
      <Kontạkt />
      <Sologen /> */}
   </>
  );
}

export default Home;

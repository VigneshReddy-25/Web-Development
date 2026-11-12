import React, { useState } from 'react';
import heroImage from './Asserts/heroImage.png';

function Home() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pickup, drop }); // replace with your booking logic
  };

  return (
    <section id="home">
      <div className="container-hero col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">

          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={heroImage}
              className="d-block mx-lg-auto img-fluid hero-img"
              alt="Rapido ride"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="fw-bold hero-h1">
              India’s #1<br />Ride-hailing App
            </h1>
            <p className="lead">Quick, affordable rides at your doorstep</p>

            <form className="hero-inp" onSubmit={handleSubmit}>
              <input
                type="text"
                name="pickup"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter Pickup Location"
                aria-label="Pickup location"
                required
              />
              <input
                type="text"
                name="drop"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="Enter Drop Location"
                aria-label="Drop location"
                required
              />
              <button type="submit" className="hero-btn">Book Ride</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
import React from 'react';
import bikeImg from './Asserts/BikeServices.png';
import autoImg from './Asserts/AutoServices.png';
import cabImg from './Asserts/CabServices.png';
import parcelImg from './Asserts/ParcelServices.png';
import travelImg from './Asserts/TravelServices.png';
import metroImg from './Asserts/MetroServices.png';

const services = [
  { img: bikeImg, alt: 'Bike-Taxi' },
  { img: autoImg, alt: 'Auto' },
  { img: cabImg, alt: 'Cab' },
  { img: parcelImg, alt: 'Parcel' },
  { img: travelImg, alt: 'Travel and Stay' },
  { img: metroImg, alt: 'Metro Ticket' },
];

function Services() {
  return (
    <section className="services container-services">
      <h2 className="services-heading">Our Services</h2>
      <div className="row g-4 justify-content-center">
        {services.map(({ img, alt }) => (
          <div className="col-12 col-md-6 col-lg-4" key={alt}>
            <div className="service-card">
              <img src={img} alt={alt} className="ser-img" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
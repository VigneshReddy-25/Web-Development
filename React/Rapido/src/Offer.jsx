import React from 'react';
import featured1 from './Asserts/Featured-1.png';
import featured2 from './Asserts/Featured-2.png';
import featured3 from './Asserts/Featured-3.png';

const offers = [
  {
    img: featured1,
    title: 'Quick Pickup',
    text: 'Pickups within minutes that help you save time on every ride. A Rapido is always nearby when you need to get moving.',
  },
  {
    img: featured2,
    title: 'Best Fares',
    text: 'Affordable prices designed for everyday rides. Travel more, spend less without compromising on comfort.',
  },
  {
    img: featured3,
    title: 'Never Too Far',
    text: 'Present across 400+ cities and counting. Wherever you go, find a Rapido ride close by.',
  },
];

function Offer() {
  return (
    <section id="featured-3">
      <div className="feature-container">
        <h2 className="offer-heading">What we offer</h2>

        <div className="row g-5 row-cols-1 row-cols-lg-3">
          {offers.map(({ img, title, text }) => (
            <div className="feature col" key={title}>
              <div className="featured-img">
                <img src={img} alt={title} className="feature-img" loading="lazy" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offer;
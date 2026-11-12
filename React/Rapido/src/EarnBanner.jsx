import React from 'react'
import FooterBanner from "./Asserts/FooterBanner.png"

function EarnBanner() {
  return (
    <div class="container-banner">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6 banner-first">
                    <img src={FooterBanner} class="banner-img" alt="Earn with Rapido"/>
                </div>
                <div class="col-12 col-lg-6 banner-second">
                    <h2 class="banner-h1">Earn with<br/>Rapido</h2>
                    <p class="banner-text">Become a Rapido Captain. Ride when you want, work how you want, and earn on your own terms.</p>
                    <button type="button" class="banner-btn">Start Earning →</button>
                </div>
            </div>
    </div>
  )
}

export default EarnBanner
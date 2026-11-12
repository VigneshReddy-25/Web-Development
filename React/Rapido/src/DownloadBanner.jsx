import React from 'react'
import downloadBanner1 from "./Asserts/Download-1.png";
import downloadBanner2 from "./Asserts/Download-2.png"

function DownloadBanner() {
  return (
    <section class="download-section">
            <div class="download-head">
                <h2 class="download-title">Download Now</h2>
            </div>
            <div class="download-cards">
                <img src={downloadBanner1} class="download-img download-img-1" alt="Rapido - Bike-Taxi, Auto & Cabs"/>
                <img src={downloadBanner2} class="download-img download-img-2" alt="Rapido Captain - Drive & Earn"/>
            </div>
    </section>
  )
}

export default DownloadBanner
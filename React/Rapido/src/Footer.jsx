import React from 'react'
import footer1 from "./Asserts/Footer-1.png"
import footer2 from "./Asserts/Footer-2.png"

function Footer() {
  return (
    <footer class="site-footer">
            <div class="footer-top">
                <div class="footer-app">
                    <h3 class="footer-heading">Customer app</h3>
                    <a href="#"><img src={footer1} class="store-badge" alt="Google Play"/></a>
                    <a href="#"><img src={footer1} class="store-badge" alt="App Store"/></a>
                </div>
                <div class="footer-app">
                    <h3 class="footer-heading">Captain app</h3>
                    <a href="#"><img src={footer2} class="store-badge" alt="Google Play"/></a>
                </div>
                <ul class="footer-links footer-links-1">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Safety</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
                <ul class="footer-links footer-links-2">
                    <li><a href="#">Customer Terms - Bike Taxi</a></li>
                    <li><a href="#">Customer Terms - Cabs and Auto</a></li>
                    <li><a href="#">Corporate Affairs</a></li>
                    <li><a href="#">Captain Terms - Bike Taxi</a></li>
                    <li><a href="#">Captain Terms - Cabs and Auto</a></li>
                </ul>
                <div class="footer-follow">
                    <h3 class="footer-heading">Follow Us</h3>
                    <div class="footer-social">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-divider"></div>
            <p class="footer-copy">© 2026 Roppen Transportation. All rights reserved.</p>
    </footer>
  )
}

export default Footer
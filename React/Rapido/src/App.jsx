import { useState } from 'react'
import './App.css'
import Nav from './Nav'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import Services from './Services';
import Offer from './Offer';
import EarnBanner from './EarnBanner';
import DownloadBanner from './DownloadBanner';
import Footer from './Footer';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Home/>
      <Services/>
      <Offer/>
      <EarnBanner/>
      <DownloadBanner/>
      <Footer/>
    </>
  )
}

export default App

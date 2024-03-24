import React from 'react'
import Flow from '../Flow'
import FAQ from '../FAQ.js'
import Footer from '../Footer'
import Phishingflow from '../phishingflow.js'
import Navbar from '../Navbar.js'

function Howitworks() {
  return (
    <div>
      <Navbar/><Flow/>
    <Phishingflow/>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default Howitworks
import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class About extends React.Component {

  render() {

    return (
      <div>
        <Navbar />
        <div className="about" id="about" >
          {/* krissy image */}
          {/* Krissy Conant
            - Likes: tarot, long hikes, early mornings, rosemary, peonies & her cat Tallulah
            - Dislikes: kiwi, a silo mentality, glass ceilings & camouflage*/}
          {/* stacy image */}
          {/* Stacy Moore 
            - Likes: local coffee, mountain biking, her DSLR camera, late nights & her dog Lana
            - Dislikes: teeth, last minute changes, tornados & traffic */}
          {/* Contact Us */}
          {/* Questions? Comments? Concerns?
            Feel free to reach out to our email at hello@myblendology.com or check out our instagram page today.  */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;

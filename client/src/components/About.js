import React from 'react';


class About extends React.Component {

  render() {

    return (
      <div>
        <div className="about" id="about" >
          <img src="./img/krissy.jpg" />
          <h4>Krissy Conant</h4>
          <h6>Likes: tarot, long hikes, early mornings, rosemary, peonies & her cat Tallulah</h6>
          <h6>Dislikes: kiwi, a silo mentality, glass ceilings & camouflage</h6>
          <img src="./img/stacy.jpg" />
          <h4>Stacy Elle</h4>
          <h6>Likes: local coffee, mountain biking, her DSLR camera, late nights & her dog Lana</h6>
          <h6>Dislikes: teeth, last minute changes, tornados & traffic</h6>
          <h4>Contact Us</h4>
          <h4>Questions? Comments? Concerns?</h4>
          <h6>Feel free to reach out to our email at <a href="mailto:hello@myblendology.com">hello@myblendology.com</a> or check out our instagram page today.</h6>
        </div>
      </div>
    )
  }
}

export default About;

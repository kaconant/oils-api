import React, { Component }from 'react';


class About extends Component {

  render() {

    return (
      <div className="aboutwrapper">
        <h4 className="title-text-about">Who We Are</h4>
        <div className="about" id="about" >
          <div className='profile'>
            <img className="photo" src="./img/krissy.png" alt="krissyimg" />
            <h4 className="profile-name">Krissy Conant</h4>
            <h2 className="likes">Likes: tarot, long hikes, early mornings, rosemary, peonies & her cat Tallulah</h2>
            <h2 className="likes">Dislikes: kiwi, a silo mentality, glass ceilings & camouflage</h2>
          </div>
          <div className="profile">
            <img className="photo" src="./img/stacy.png" alt="stacyimg" />
            <h4 className="profile-name">Stacy Elle</h4>
            <h2 className="likes">Likes: local coffee, mountain biking, her DSLR camera, late nights & her dog Lana</h2>
            <h2 className="likes">Dislikes: gum chewing, last minute changes, shopping malls & inequality</h2>
          </div>
        </div>
          <h4 className="comments">Questions? Comments? Concerns?</h4>
          <h2 className="reach">Feel free to reach out to our email at <a href="mailto:hello@myblendology.com">hello@myblendology.com</a> or check out our instagram page today.</h2>
      </div>
    )
  }
}

export default About;

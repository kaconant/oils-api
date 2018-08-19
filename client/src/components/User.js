import React, { Component } from 'react';

class User extends Component {

  render() {

    return (
      <div>
        <div className="user" id="user" >
          <h4 className="title-text">Welcome User!</h4>
          <div className="about" id="about" >
            <div className='profile'>
              <img className="photo" src="./img/krissy.png" />
              <h4 className="profile-name">Krissy Conant</h4>
              <h2 className="likes">Likes: tarot, long hikes, early mornings, rosemary, peonies & her cat Tallulah</h2>
              <h2 className="likes">Dislikes: kiwi, a silo mentality, glass ceilings & camouflage</h2>
            </div>
          </div>
            <h4 className="comments">Questions? Comments? Concerns?</h4>
            <h2 className="reach">Feel free to reach out to our email at <a href="mailto:hello@myblendology.com">hello@myblendology.com</a> or check out our instagram page today.</h2>
        </div>
          </div>
    )
  }
}

export default User;

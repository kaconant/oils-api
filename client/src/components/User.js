import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class User extends React.Component {

  render() {

    return (
      <div>
        <Navbar />
        <div className="user" id="user" >
        </div>
        <Footer />
      </div>
    )
  }
}

export default User;

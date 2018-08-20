import React, { Component } from 'react';
import Carousel from './Carousels'

class User extends Component {

  componentDidMount() {
    this.props.updateBlends()
  }


  render() {

    return (
      <div>
        <div className="user" id="user" >
          <div className="banner">
            <h4 className="title-text">Blendologist {this.props.firstname} {this.props.lastname}</h4>
            <img src="../img/default-user.png" className="userPhoto"/>
          </div>
          <div className="tabMenu">
          <h2 className="tabTitle">Saved Blends</h2>
          <h2 className="tabTitle">Favorites</h2>
          <h2 className="tabTitle">My Profile</h2>
          </div>
          <Carousel history={this.props.history} currentLevel={this.props.currentLevel} />
        </div>
      </div>
    )
  }
}

export default User;

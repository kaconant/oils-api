import React, { Component } from 'react';
import Carousel from './Carousels'

class User extends Component {

  componentDidMount() {
    // this.props.updateBlends
  }

  relocate() {
    this.props.history.replace('/')
  }


  render() {

    return (
      <div>
        <div className="user" id="user" >
          <div className="banner">
            <p className="title-text">Blendologist<br/>{this.props.firstname} {this.props.lastname}</p>
            <img src="../img/default-user.png" alt="defaultUser" className="userPhoto"/>
            <p className="joined">Member Since {this.props.joined}</p>
            <div className="add-button">
              <a className="transparent_btn add" onClick={this.relocate.bind(this)}>+ blend</a>
            </div>
          </div>
          <Carousel updateBlends={this.props.updateBlends} isLoggedIn={this.props.isLoggedIn} history={this.props.history} currentLevel={this.props.currentLevel} />
        </div>
      </div>
    )
  }
}

export default User;

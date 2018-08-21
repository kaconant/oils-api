import React, { Component } from 'react';

class Jumbotron extends Component {

    render() {
        return(
        <div>
          <div className="container-fluid msg-container">
            <div className="headline">
              <h4>blends made for you, by you</h4>  
              <div className="row flex-row justify-content-center info">
                <div className="main-col">
                  <img className="icon" src='./img/click2.png' alt="chooseIcon" height="40" />
                  <span className='info-header'>Choose</span>
                  <span className="info-blurb">Pick a mood and follow the descriptions of each oil to guide you.</span>
                </div>
                <div className="main-col">
                  <img className="icon" src='./img/fingerprint2.png' alt="createIcon" height="40" />
                  <span className='info-header'>Create</span>
                  <span className="info-blurb">After your selection, we will provide you the exact measurements for your blend.</span>
                </div>
                <div className="main-col">
                  <img className="icon" src='./img/love2.png' alt="enjoyIcon" height="40" />
                  <span className='info-header'>Enjoy</span>
                  <span className="info-blurb">Sit back, relax, and enjoy a blend as unique as you are.</span>
                </div>
              </div>    
            </div>
            <h6>what's your vibe today?</h6>
            <div className="row flex-row justify-content-center buttons">
              <button href="#" onClick={this.props.handleMoodClick} className="transparent_btn" data-mood="calm">CALM</button>
              <button href="#" onClick={this.props.handleMoodClick} className="transparent_btn" data-mood="awaken">AWAKEN</button>
              <button href="#" onClick={this.props.handleMoodClick} className="transparent_btn" data-mood="sensual">SENSUAL</button>
            </div>
          </div>
        </div>
        )
    }
}
export default Jumbotron;
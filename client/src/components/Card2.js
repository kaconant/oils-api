import React from 'react';
var smoothScroll = require('smoothscroll');

class Card extends React.Component {
  handleOilClick(e) {
    e.preventDefault();
    const oil = this.props.content.name;
    this.props.toggleOil(oil);
    let moveTo = ''
    if (this.props.level === 'base' ) {
      moveTo = document.getElementById("middle");
    } 
    if (this.props.level === "middle") {
      moveTo = document.getElementById("top");
    } 
    if (this.props.level === "top") {
      moveTo = document.getElementById("calculate");
    } 
    smoothScroll(moveTo)
  }

  render() {
    const card = this.props.content;
    const checked = this.props.checked;
    let moodImage = ''
    if (card.mood === 'calm') {
      moodImage = './img/calm.jpg'
    } else if (card.mood === 'awaken') {
      moodImage = './img/awaken.jpg'
    } else if (card.mood === 'sensual') {
      moodImage = './img/sensual.jpg'
    }
    return (
      <div className="card2" id="card" style={this.props.cardStyle}>
        <img className="oil-photo" src={moodImage} height='200' />
        {/* <p className="title">{card.name}</p> */}
        <p className="recipeOil">{card.baseOil}: 5 drops</p>
        <p className="recipeOil">{card.middleOil}: 4 drops</p>
        <p className="recipeOil">{card.topOil}: 3 drops</p>
        {/* <div className="recipeCard" onClick={this.handleOilClick.bind(this)}></div> */}
      </div>
    )
  }
}

export default Card;


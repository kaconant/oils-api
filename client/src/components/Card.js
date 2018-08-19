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
    return (
      <div className="card" id="card" style={this.props.cardStyle}>
        <img className="oil-photo" src={card.url} height='200' />
        <p className="title">{card.name}</p>
        <p className="desc">{card.desc}</p>
        <div className={checked ? 'checked' : 'check'} onClick={this.handleOilClick.bind(this)}></div>
      </div>
    )
  }
}

export default Card;


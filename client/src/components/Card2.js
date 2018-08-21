import React from 'react';
import Axios from 'axios'
// var smoothScroll = require('smoothscroll');

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      currentId: ''
    }
  }

  handleFavoriteClick(e) {
    e.preventDefault();
    let favorited = this.props.content.favorite
    this.setState({currentId: this.props.content.id}, () => {
      if (this.props.isLoggedIn) {
          // logged in
          // axios.post
          Axios.post('api/blend/update', {
            favorite: favorited ? false : true, 
            id: this.state.currentId
          })
      } else {
          // not logged in
          // go to login page
          this.props.history.replace('/login')
          console.log('not logged in')
      }
      this.props.updateBlends()
    });
  }

  render() {
    const card = this.props.content;
    let moodImage = ''
    if (card.mood === 'calm') {
      moodImage = './img/calm.jpg'
    } else if (card.mood === 'awaken') {
      moodImage = './img/awaken.jpg'
    } else if (card.mood === 'sensual') {
      moodImage = './img/sensual.jpg'
    }
    let favorited = card.favorite
    return (
      <div className="card2" id="card" style={this.props.cardStyle}>
        <img className="oil-photo" src={moodImage} alt="oil" height='200' />
        <p className="recipeOil">{card.baseOil}: 5 drops</p>
        <p className="recipeOil">{card.middleOil}: 4 drops</p>
        <p className="recipeOil">{card.topOil}: 3 drops</p>
        <div className={favorited === false ? "heartGray" : "heartPink"} onClick={this.handleFavoriteClick.bind(this)}></div>
      </div>
    )
  }
}

export default Card;


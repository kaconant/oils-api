import React, { Component } from "react";
import Card from './Card.js';

class Carousel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        slider : {
          currentCard: 0,
          position: 0,
          cardStyle: {
            transform: 'translateX(0px)'
          },
          width: 250,
        },
        currentOil: '',
      };
    }

    toggleOil(oilName) {
      const state = { ...this.state };
      state.currentOil = oilName; // i.e. state.middle = oilName;
      const level = this.props.levelLabel;
      this.setState(state);
      this.props.setOil(level, oilName);
    }
    // func: click the slider buttons
    handleClick(type) {
      let oilsArray = this.props.currentLevel;
      const cardWidth = 250; // the card's width
      const cardMargin = 20; // the card's margin
      const cardNumber = oilsArray.length; // the number of cards
      let currentCard = this.state.slider.currentCard; // the index of the current card
      let position = this.state.slider.position; // the position of the cards

      // slide cards
      if(type === 'next' && currentCard < cardNumber-1) {
        currentCard++;
        position -= (cardWidth+cardMargin);
      } else if(type === 'prev' && currentCard > 0) {
        currentCard--;
        position += (cardWidth+cardMargin);
      }
      this.setCard(currentCard, position);
    }

    setCard(currentCard, position) {
      this.setState({
        slider: {
          currentCard: currentCard,
          position: position,
          cardStyle: {
            transform: `translateX(${position}px)`
          }
        }
      })
    }

    render() {
        var infoLabel = " "
        var infoBlurb = " "
        if (this.props.levelLabel === "base") {
          infoLabel = `Choose your ${this.props.mood} base oil:`
          infoBlurb = "Base oils provide the lasting impression of your blend. These oils are typically heavy and will provide the final note of your blend."
      } else if (this.props.levelLabel === "middle") {
          infoLabel = `Choose your ${this.props.mood} middle oil:`
          infoBlurb = "Middle oils are considered the heart of your blend and will emerge after your top oil has faded. These oils often balance your blend and are typically well-rounded."
      } else if (this.props.levelLabel === "top") {
          infoLabel = `Choose your ${this.props.mood} top oil:`
          infoBlurb = "Top oils provide your first impression of your blend. These oils are often described as light and fresh, but tend to fade quickly."
        }
      return (
        <div id="base">
            {this.props.toShow === true && <div className="info-label">{infoLabel}</div>}
            {this.props.toShow === true && <div className="info-blurb-level">{infoBlurb}</div>}
          <div className="cards-slider">
          <div className="slider-btns">
            <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
            <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
          </div>
          <section style={this.state.slider.cardStyle}>
          {
            this.props.currentLevel.map((card, i) => (
              <Card content={card} checked={this.state.currentOil === card.name} toggleOil={this.toggleOil.bind(this)} key={i} />
            ))
          }
          </section>
          </div>
        </div>
      )
    }
}

export default Carousel;


// import React, { Component } from "react";
// import Cards from './Card.js'

// class Carousels extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         currentCard: 0,
//         position: 0,
//         cardStyle: {
//           transform: 'translateX(0px)'
//         },
//         width: 0,
//       };
//     }

  
//     componentDidMount() {
//       this.setState({ width: 250 })
//     }
  
//     // func: click the slider buttons
//     handleClick(type) {
//       // get the card's margin-right
//       let oilsArray = this.props.currentLevel;
//       const cardWidth = this.state.width; // the card's width
//       const cardMargin = 20; // the card's margin
//       const cardNumber = oilsArray.length; // the number of cards
//       let currentCard = this.state.currentCard; // the index of the current card
//       let position = this.state.position; // the position of the cards
  
//       // slide cards
//       if(type === 'next' && currentCard < cardNumber-1) {
//         currentCard++;
//         position -= (cardWidth+cardMargin);
//       } else if(type === 'prev' && currentCard > 0) {
//         currentCard--;
//         position += (cardWidth+cardMargin);
//       }
//       this.setCard(currentCard, position);
//     }
    
//     setCard(currentCard, position) {
//       this.setState({
//         currentCard: currentCard,
//         position: position,
//         cardStyle: {
//           transform: `translateX(${position}px)`
//         }
//       })
//     }
  
//     render() { 
//         var infoLabel = " "
//         var infoBlurb = " "
//         if (this.props.levelLabel === "base") {
//           infoLabel = `Choose your ${this.props.mood} base oil`
//           infoBlurb = "Base oils provide the lasting impression of your blend. These oils are typically heavy and will provide the final note of your blend."
//         } else if (this.props.levelLabel === "middle") {
//             infoLabel = `Choose your ${this.props.mood} middle oil`
//             infoBlurb = "Middle oils are considered the heart of your blend and will emerge after your top oil has faded. These oils often balance your blend and are typically well-rounded."
//         } else if (this.props.levelLabel === "top") {
//             infoLabel = `Choose your ${this.props.mood} top oil`
//             infoBlurb = "Top oils provide your first impression of your blend. These oils are often described as light and fresh, but tend to fade quickly."
//         }
//         return (
//             <div id="base">
//               {this.props.toShow === true && <div className="info-label">{infoLabel}</div>}
//               {this.props.toShow === true && <div className="info-blurb-level">{infoBlurb}</div>}
//               <div className="cards-slider">
//                 <div className="slider-btns">
//                   <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
//                   <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
//                 </div>
//                 <Cards cardStyle={this.state.cardStyle} currentLevel={this.props.currentLevel} levelLabel={this.props.levelLabel}  />
//               </div>
//             </div>
//         )   
//     }
// }

// export default Carousels;
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




// import React from 'react';

// class Cards extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedBaseLevel: " ",
//       selectedMidLevel: " ",
//       selectedTopLevel: " ", 
//     }
//   }

  
//   handleOilClick(e) {
//     e.preventDefault();
//     let name = e.currentTarget.dataset.name;
    
//     if (e.currentTarget.dataset.level === "base") {
//       name !== this.state.selectedBaseLevel ? e.target.className = 'checked' : e.target.className = "check";
//       this.setState({ 
//         selectedBaseLevel: (name === this.state.selectedBaseLevel ?  " " : name),
//       }, function () {
//         console.log("Base Oil is: " + this.state.selectedBaseLevel);
//       })
//     } else if (e.currentTarget.dataset.level === "middle") {
//       name !== this.state.selectedMidLevel ? e.target.className = 'checked' : e.target.className = "check";
//       this.setState({ 
//         selectedMidLevel: (this.state.isChecked === true ?  " " : name)
//       }, function () {
//         console.log("Mid Oil is: " + this.state.selectedMidLevel);
//       })
//     } else if (e.currentTarget.dataset.level === "top") {
//       name !== this.state.selectedTopLevel ? e.target.className = 'checked' : e.target.className = "check";
//       this.setState({ 
//         selectedTopLevel: (this.state.isChecked === true ?  " " : name),
//       }, function () {
//         console.log("Top Oil is: " + this.state.selectedTopLevel);
//       })
//     }
//   }



//   render() {
//     let oilsArray = this.props.currentLevel;
//       return (
//         <section>
//           {
//           oilsArray.map((card, i) => {
//             return (
//               <div className="card" id="card"  style={this.props.cardStyle}  key={i}>
//                 <img className="oil-photo" src={card.url} height='200' />
//                 <p className="title">{card.name}</p>
//                 <p className="desc">{card.desc}</p>
//                 <div className="check" data-name={card.name}  data-level={this.props.levelLabel} onClick={this.handleOilClick.bind(this)}></div>
//               </div>
//             )
//           })
//           }
//         </section>
//       )
//     }
//   }

// export default Cards;
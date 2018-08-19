// import React from 'react';
// import Navbar from './Navbar.js';
// import Jumbotron from './Jumbotron.js';
// import Carousel from './Carousels.js';
// import Calculation from './Calculation.js'
// import Modal from './Modal';
// import Axios from 'axios';
// import Footer from './Footer.js';

// class Home extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//         mood: null, 
//         baseLevel: [], 
//         midLevel: [], 
//         topLevel: [],
//         oilData: [],
//         selected: {
//           base: '',
//           middle: '',
//           top: '',
//         },
//         toShow: false,
//     }
//     this.handleMoodClick = this.handleMoodClick.bind(this);
//   }

//   handleMoodClick(e) {
//     this.setState({
//       mood: e.target.dataset.mood
//     }, function() {
//       let baseOilList = this.state.oilData.filter(oil => {
//         return oil.level === 'base' && oil.mood === this.state.mood
//       });
//       let midOilList = this.state.oilData.filter(oil => {
//         return oil.level === 'middle' && oil.mood === this.state.mood
//       });
//       let topOilList = this.state.oilData.filter(oil => {
//         return oil.level === 'top' && oil.mood === this.state.mood
//       });
//       this.setState({ 
//         baseLevel: baseOilList, 
//         midLevel: midOilList, 
//         topLevel: topOilList,
//         toShow: true, 
//       }, function () {
//         console.log("The Current Mood is: " + this.state.mood)
//       })
//   })
// }

//   componentDidMount() {
//     Axios.get('/api/oils').then((res) => {
//       this.setState({
//         oilData: res.data
//       })
//     })
//   }

//   setOil(level, oil) {
//     let state = { ...this.state };
//     state.selected[level] = oil;
//     this.setState(state);
//   }

//   render() {

//     return (
//       <div>
//         <Navbar />
//         <Jumbotron handleMoodClick={this.handleMoodClick} />
//         {/* <div className="buffer"></div> */}
//         {this.state.toShow !== false && <Carousel mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="base" currentLevel={this.state.baseLevel} toShow={this.state.toShow} />}
//         {this.state.toShow !== false && <Carousel mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="middle" currentLevel={this.state.midLevel} toShow={this.state.toShow} />}
//         {this.state.toShow !== false && <Carousel mood={this.state.mood} setOil={this.setOil.bind(this)} levelLabel="top" currentLevel={this.state.topLevel} toShow={this.state.toShow} />}
//         <Calculation selected={this.state.selected} toShow={this.state.toShow} />
//         <Modal selected={this.state.selected} mood={this.state.mood}/>
//         <Footer />
//       </div>
//     )
//   }
// }

// export default Home;

import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      current: 0
    }
  }
  componentDidMount(){
    this.setState({ carousel: carouselData });
  }

  leftClick = () => {
    if(this.state.current < 1) {
      this.setState({ current: 4 })
    }

    this.setState(prevState => {
      return { current: prevState.current - 1 }
    })
  }

  rightClick = () => {
    if(this.state.current > 2) {
      this.setState({ current: -1 })
    }

    this.setState(prevState => {
      return { current: prevState.current + 1 }
    })
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.current]} style={{display: 'block'}} alt={this.state.carousel} />
  }
  
  render(){
    console.log(this.state.current);
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
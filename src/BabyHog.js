import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby
}

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 200
    }
  }

  changeWeight = (e) => {
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.state.eyeColor}</h4>
          
        <Button name="+" onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button name="-" onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={imgMapper[this.props.eyeColor]} style={{height: `${this.state.weight}px`}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}

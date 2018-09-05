import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      display: '',
      history: []
    }
  }
  historyDisplay () {
    let currentDisplay = this.state.display
    let result = eval(this.state.display)
    this.setState({history: this.state.history.concat(`${currentDisplay} = ${result}`), display: result})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='Calc-title'>Calculator X 2</h1>
        </header>
        <div id='display'>{this.state.display}
          <button className='operator-button-clear' onClick={() =>
            this.setState({display: ''})}>C</button>
        </div>
        <div id='top-row'>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '7'})}>7</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '8'})}>8</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '9'})}>9</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '/'})}>/</button>
        </div>
        <div id='middle-top'>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '4'})}>4</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '5'})}>5</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '6'})}>6</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '*'})}>*</button>
        </div>
        <div id='middle-bottom'>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '1'})}>1</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '2'})}>2</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '3'})}>3</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '-'})}>-</button>
        </div>
        <div id='bottom-row'>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '0'})}>0</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '.'})}>.</button>
          <button className='operator-button' onClick={() =>
            this.historyDisplay()}>=</button>
          <button className='operator-button' onClick={() =>
            this.setState({display: this.state.display + '+'})}>+</button>
        </div>
        <div id='history'>
          {this.state.history.map((h, idx) => <div key={idx}>{h}</div>)}
        </div>
      </div>
    )
  }
}

export default App

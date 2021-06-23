import {Component} from 'react'

import './index.css'
import Header from '../Header'
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
'U', 'V', 'W', 'X', 'Y', 'Z']

class BombBlast extends Component {
  state = {countDown: 30, code: '', 
  randomNumber: Math.floor(Math.random() * 26)}

  onChangeInput = event => {
    this.setState({code: event.target.value})
  }

  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState(prevState =>
        prevState.countDown > 0
          ? {countDown: prevState.countDown - 1}
          : {countDown: ''},
      )
    }, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.myInterval)
  }

  render() {
    const {countDown, code, randomNumber} = this.state
    let content
    if (countDown === 0) {
      content = 'Sorry it blasted!'

      clearInterval(this.myInterval)
    } else if (countDown > 0 && code === alphabets[randomNumber]) {
      content = 'Successfully Defused it!'

      clearInterval(this.myInterval)
    }
    return (
      <>
      <Header />
      <div className="timer-container">
        <h1 className="heading">BOMB DEFUSER</h1>
        <p className="paragraph">Try to defuse it with alphabets (A-Z)</p>
        <input
          type="text"
          className="user-input"
          onChange={this.onChangeInput}
        />
        <br />
        <img
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/time-bomb-img.png"
          className="bomb-image"
          alt="bomb"
        />
        <p className="timer-display" id="timerID">
          {countDown}
        </p>
        <p className="result">{content}</p>
      </div>
      </>
    )
  }
}

export default BombBlast
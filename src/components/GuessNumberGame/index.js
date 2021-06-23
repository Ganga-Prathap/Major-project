import {Component} from 'react'
import './index.css'
import Header from '../Header'

class GuessNumberGame extends Component {
  state = {
    randomNumber: Math.ceil(Math.random() * 100),
    guessNumber: '',
    gameMessage: 'Please provide a valid Integers only',
  }

  onInputChange = e => {
    const value = e.target.value
    this.setState({guessNumber: value})  
  }

  checkGuess = () => {
    const {guessNumber, randomNumber} = this.state
    console.log(guessNumber)
    
    if(guessNumber !== ''){
      let number, nearBelow, nearAbove
      number = parseInt(guessNumber)
      nearBelow = number - 5
      nearAbove = number + 5

      if(nearBelow <= randomNumber && nearAbove >= randomNumber){
        this.setState({
             gameMessage: 'Too Near! Try Again.',
       })
      }
      else if(number > randomNumber){
        this.setState({
          gameMessage: 'Too High! Try Again'
        })
      }
      else if(number < randomNumber){
        this.setState({
          gameMessage: 'Too Low! Try Again'
        })
      }
      else if(number === randomNumber){
        this.setState({
              gameMessage: 'Congratulations! You got it right.',
        })
      }
      else{
        this.setState({
          gameMessage: 'Please provide a valid Input',
        })
      }
    }
    else {
      this.setState({
             gameMessage: 'Please provide a valid Input',
     })
    }
  
    
  }

  render() {
    const {gameMessage, guessNumber, randomNumber} = this.state
    console.log(typeof guessNumber, typeof randomNumber, randomNumber)
    return (
      <>
      <Header />
      <div className="bg-container">
        <div className="image-container">
          <img
            className="guess-game-img"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-game-img.png"
            alt="Guess"
          />
          <p className="game-description">
            Find out the right number between 1 to 100
          </p>
        </div>
        <div className="guess-bg-container">
          <h1 className="guess-heading">
            Guess The Number
            <img
              className="guess-number-image"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-number-img.png"
              alt="guess"
            />
          </h1>
          <input
            type="text"
            className="user-input"
            onChange={this.onInputChange}
          />
          
          <button
              type="button"
              className="check-guess"
              onClick={this.checkGuess}
            >
              Check
            </button>
          
          <p className="game-result">{gameMessage}</p>
        </div>
      </div>

      </>
    )
  }
}

export default GuessNumberGame
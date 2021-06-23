import './index.css'
import {Link} from 'react-router-dom'
import Header from '../Header'

const FunZone = () => (
    <>
    <Header />
    <div className="fun-zone-container">
        <h1 className="fun-heading">Fun Games</h1>
        <div className="fun-zone-games-container">
        <Link to="/fun-zone/bomb-defuse">
            <div className="fun-card">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/time-bomb-img.png" alt="bomb" className="bomb-image" />
            </div>
        </Link>
        <Link to="/fun-zone/random-number">
            <div className="fun-card">
                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-game-img.png" alt="random" className="guess-image" />
            </div>
        </Link>
        <Link to="/fun-zone/quiz">
            <div className="fun-card">
                <img src="https://www.mastermeltgroup.com/wp-content/uploads/2020/04/quiz.png" alt="quiz" className="quiz-image" />
            </div>
        </Link>
        </div>
    </div>
    </>
)

export default FunZone
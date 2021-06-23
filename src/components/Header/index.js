import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div>
          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
          </div>
        </div>

        <div className="nav-bar-large-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/fun-zone" className="nav-link">
                Fun Zone
              </Link>
            </li>

            {/* <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li> */}
          </ul>
          <div>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
          </div>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/blogs" className="nav-link">
              <img
                src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png"
                alt="nav blog"
                className="nav-blog-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/fun-zone" className="nav-link">
              <img src="data:image/png;base64,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"
                alt="nav fun"
                className="nav-blog-image"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)

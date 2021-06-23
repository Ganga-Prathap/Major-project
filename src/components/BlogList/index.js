import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import Header from '../Header'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true, searchInput: ''}

  componentDidMount() {
    this.getBlogData()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    console.log(updatedData)
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading, searchInput} = this.state
    const searchResults = blogData.filter(eachUser =>
      eachUser.title.includes(searchInput)
    )
    return (
      <>
      <Header />
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
          <div className="top-section">
          <h1 className="products-list-heading">All Blogs</h1>
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="Search"
              className="input-search"
            />
            </div>
          {searchResults.map(eachItem => (
            <BlogItem item={eachItem} key={eachItem.id} />
          ))}
          </>
        )}
      </div>
      </>
    )
  }
}

export default BlogList
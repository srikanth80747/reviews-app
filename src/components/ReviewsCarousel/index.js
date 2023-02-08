// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {number: 0}

  updateState = () => {
    const {number} = this.state
    const {reviewsList} = this.props
    if (number < reviewsList.length - 1) {
      this.setState(prev => ({
        number: prev.number + 1,
      }))
    }
  }

  onLeftArrow = () => {
    const {number} = this.state
    let leftNumber
    if (number > 0) {
      leftNumber = number - 1
      this.setState({number: leftNumber})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {number} = this.state
    const {imgUrl, companyName, description, username} = reviewsList[number]

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="content-container">
          <button
            type="button"
            testid="leftArrow"
            className="arrow-button"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left Arrow"
              className="arrow-image"
            />
          </button>
          <div className="details-container">
            <div className="person-image-container">
              <img src={imgUrl} alt={username} className="person-img" />
            </div>
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="comment">{description}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            className="arrow-button"
            onClick={this.updateState}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right Arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

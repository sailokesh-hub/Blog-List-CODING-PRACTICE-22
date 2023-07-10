// Write your JS code here
import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="img"
        />
        <h3>Wade Warren</h3>
        <p className="role">Software Developer, MERN stack developer.</p>
      </div>
    )
  }
}

export default UserInfo

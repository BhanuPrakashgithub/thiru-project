import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main_division">
        <div className="sub_division1">
          <h1 className="head">Free Trail</h1>
          <p className="para">
            creating something beautiful with coding is hugely rewarding! It
            takes discipline and hours of effort, but the sense of
            accomplishment at the end is worth it.
          </p>
          <button className="button" type="button">
            Try Now
          </button>
        </div>
        <div className="sub_division2">
          <img
            src="https://res.cloudinary.com/dsio7rkzy/image/upload/v1709115408/WhatsApp_Image_2024-02-28_at_15.45.35_a7370ae6_kjnhcg.jpg"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default Home

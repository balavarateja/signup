import React from 'react'
// import '../App.css'
import Formemaillink from '../Forminput/Formemaillink'
import '../components/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Image_1 from '../images/Star_7.png'
import Image from '../images/IMG_7169 1.png'
import '../components/forgotpassword.css'

const Emaillink = () => {
  const [values, setValues] = useState({
    emailId: '',
  })
  const input = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'User ID/Email ID',
      errorMessage: 'It should be a valid email address!',
      label: 'User ID/Email ID',
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="Emaillink">
        <div className="left-1">
          <form onSubmit={handleSubmit}>
            <h1>Forgot Password </h1>
            <br />
            <div>
              <h3>Enter the Email Associated with your</h3>
            </div>
            <div>
              <h3>account we'll send a link to reset</h3>
            </div>
            <div>
              <h3>your password</h3>
            </div>

            {input.map((input) => (
              <Formemaillink
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <div>
              <button className="btn-fp">Request reset password link </button>
            </div>
          </form>
        </div>
        <div className="right-2">
          <div className="star_1">
            <Link to="/">
              <button className="btn-2">sign up </button>
            </Link>
            <div>
              <img className="star_1" src={Image_1} alt="" />
              <div>
                <img src={Image} className="vdst" alt="" />
                <h2 className="imageText_1">Employee Portal</h2>
              </div>

              {/* <div>
                <Link to="/">
                  <button className=".btn-2">sign up </button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emaillink

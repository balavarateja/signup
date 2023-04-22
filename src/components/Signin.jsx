import React from 'react'
// import '../App.css'
import Formlogin from '../Forminput/Formlogin'
import '../components/login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Image_1 from '../images/Star_7.png'
import Image3 from '../images/Vector (2).png'
import Image4 from '../images/Vector.png'

const Signin = () => {
  const [values, setValues] = useState({
    emailId: '',
    password: '',
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
    {
      id: 2,
      name: 'Password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
      <div className="Login">
        <div className="left-1">
          <form onSubmit={handleSubmit}>
            <h1>Sign In </h1>
            <h3>with</h3>
            <img src={Image3} alt="" className="vector3" />
            <img src={Image4} alt="" className="vector4" />
            {input.map((input) => (
              <Formlogin
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <div className="btn1">
              <button>Login </button>
            </div>
            <Link to="./reset">
              <div>
                <button className="btn-f">forgot password</button>
              </div>
            </Link>
          </form>
        </div>
        <div className="right-2">
          <div className="star_1">
            <Link to="/">
              <button className="btn1">sign up </button>
            </Link>
            <div>
              <img className="star_1" src={Image_1} alt="" />
              <div>
                <h2 className="imageText_1">
                  Welcome To <br></br>Employee Portal
                </h2>
                <h4 className="imageText_2">
                  Please Enter Your Info To Access <br></br>your Portal
                </h4>
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

export default Signin

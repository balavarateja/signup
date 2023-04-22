import React from 'react'
import '../App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../Forminput/FormInput'
import Image from '../images/Star_4.png'
import Image1 from '../images/Vector (2).png'
import image2 from '../images/Vector.png'

const Signup = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })
  const input = [
    {
      id: 1,
      name: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      errorMessage:
        "Firstname should be 3-16 characters and shouldn't include any special character!",
      label: 'First Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'last name',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage:
        "Lastname should be 3-16 characters and shouldn't include any special character!",
      label: 'Last Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'User ID/Email ID',
      errorMessage: 'It should be a valid email address!',
      label: 'User ID/Email ID',
      required: true,
    },
    {
      id: 4,
      name: 'Password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'phone number',
      type: 'text',
      placeholder: 'Phone Number',
      errorMessage: 'It should be valid phone number',
      label: 'Phone Number',
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
      <div className="Signup">
        <div className="left">
          <div className="star">
            <div className="star">
              <img className="starOne" src={Image} alt="" />
              <h2 className="imageText_3">
                Welcome To <br></br> Employee Portal
              </h2>
              <h4 className="imageText_4">
                Please Enter Your Info To Access <br></br>your Portal
              </h4>

              <div className="btn2">
                <Link to="./signin">
                  <button>Sign In </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="logo">
            <div className="h1t">
              <h1>Sign Up </h1>
            </div>
            <div className="h2t">
              <h2>with</h2>
            </div>

            <div>
              <img className="vector1" src={Image1} alt="" />
            </div>

            <div className="vector2">
              <img src={image2} alt="" />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              {input.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className="btn1">
                <button>Sign Up </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

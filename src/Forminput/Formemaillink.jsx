import React from 'react'
import { useState } from 'react'

const Formemaillink = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <>
      {/* <div className="formInputleft"></div> */}
      <div className="formemaillink">
        {/* <label>{label}</label> */}
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === 'confirmPassword' && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  )
}

export default Formemaillink
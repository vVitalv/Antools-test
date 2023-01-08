import React, { useState } from "react"

function Join() {
  const [value, inputValue] = useState("")
  function onChange(e) {
    inputValue(e.target.value)
  }
  return (
    <div className='join-pan'>
      <input
        className='join-input'
        placeholder={"\u23B9Enter your email..."}
        value={value}
        onChange={onChange}
        type='email'
        id='join'
        name='join'
      />
      <button type='button' className='join-btn'>
        Join Us
      </button>
    </div>
  )
}

export default Join

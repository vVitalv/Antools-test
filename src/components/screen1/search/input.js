import React from "react"

function Input() {
  return (
    <div className='search-pan'>
      <svg
        className='search-svg'
        width='25'
        height='24'
        viewBox='0 0 25 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
          stroke='white'
          stroke-opacity='0.38'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M21 20.9999L16.65 16.6499'
          stroke='white'
          stroke-opacity='0.38'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
      <input
        className='search-input'
        value={"find more than 430+ tools..."}
        type='search'
        id='search'
        name='search'
      />
      <button type='button' className='search-btn'>
        Search
      </button>
    </div>
  )
}

export default Input

import React from "react"

function Menu() {
  return (
    <div className='header-menu'>
      <button type='button'>Home</button>
      <button type='button'>
        Categories{" "}
        <svg
          width='12'
          height='6'
          viewBox='0 0 12 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.5 0.75L6 5.25L10.5 0.75'
            stroke='white'
            strokeOpacity='0.55'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <button type='button'>My Collections</button>
      <button type='button'>Blog</button>
    </div>
  )
}

export default Menu

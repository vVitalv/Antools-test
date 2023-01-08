import React from "react"

function LeftArrow() {
  return (
    <button className="leftarrow-btn" type="button">
      <svg
        className='leftarrow'
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M30 36L18 24L30 12'
          stroke='white'
          strokeOpacity='0.28'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}

export default LeftArrow

import React from "react"
import Control from "../tools/control"

function Tools1() {
  return (
    <div className='tools1'>
      <div className='tool'>
        <div className='tool-in'>
          <div className='tool-in1'>
            <svg
              width='64'
              height='64'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g opacity='0.78'>
                <path
                  d='M42.6667 42.6667C48.5577 42.6667 53.3333 37.8911 53.3333 32C53.3333 26.109 48.5577 21.3334 42.6667 21.3334C36.7756 21.3334 32 26.109 32 32C32 37.8911 36.7756 42.6667 42.6667 42.6667Z'
                  fill='#19BCFE'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M21.3334 64C24.1624 64 26.8755 62.8761 28.8759 60.8758C30.8763 58.8754 32.0001 56.1623 32.0001 53.3333V42.6666H21.3334C18.5044 42.6666 15.7913 43.7904 13.7909 45.7908C11.7906 47.7912 10.6667 50.5043 10.6667 53.3333C10.6667 56.1623 11.7906 58.8754 13.7909 60.8758C15.7913 62.8761 18.5044 64 21.3334 64Z'
                  fill='#09CF83'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M21.3334 42.6667H32.0001V21.3334H21.3334C18.5044 21.3334 15.7913 22.4572 13.7909 24.4576C11.7906 26.458 10.6667 29.1711 10.6667 32C10.6667 34.829 11.7906 37.5421 13.7909 39.5425C15.7913 41.5429 18.5044 42.6667 21.3334 42.6667Z'
                  fill='#A259FF'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M21.3334 21.3333H32.0001V0H21.3334C18.5044 0 15.7913 1.12381 13.7909 3.12419C11.7906 5.12458 10.6667 7.83769 10.6667 10.6667C10.6667 13.4956 11.7906 16.2088 13.7909 18.2091C15.7913 20.2095 18.5044 21.3333 21.3334 21.3333Z'
                  fill='#F24E1E'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M42.6667 21.3333H32V0H42.6667C45.4956 0 48.2087 1.12381 50.2091 3.12419C52.2095 5.12458 53.3333 7.83769 53.3333 10.6667C53.3333 13.4956 52.2095 16.2088 50.2091 18.2091C48.2087 20.2095 45.4956 21.3333 42.6667 21.3333Z'
                  fill='#FF7262'
                />
              </g>
            </svg>
            <div className="tool-in1-txt">
              <p className="tool-in1-txt1">FIGMA</p>
              <p className="tool-in1-txt2">Free</p>
            </div>
          </div>
          <p className="tool-in2-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Control />
        </div>
      </div>
    </div>
  )
}

export default Tools1

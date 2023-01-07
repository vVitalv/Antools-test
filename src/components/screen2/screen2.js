import React from "react"
import Tools1 from "./tools/tools1"
import Tools2 from "./tools/tools2"

function Screen2() {
  return (
    <div className='screen2'>
      <div className="tools-txt">
        <p className='tools-txt1'>Most Popular Tools</p>
        <p className='tools-txt2'>
          Tools for the best Designers and Developers
          <br />
          most popularly used in the world
        </p>
      </div>
      <Tools1 />
      <Tools2 />
      <button className='tools-btn' type='button'>
        Load more
      </button>
    </div>
  )
}

export default Screen2

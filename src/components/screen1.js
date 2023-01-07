import React from "react"
import Illustration from "./screen1/illustration"
import Medsos from "./screen1/medsos"
import Search from "./screen1/search"

function Screen1() {
  return (
    <div className='screen1'>
      <Search />
      <Illustration />
      <Medsos />
    </div>
  )
}

export default Screen1

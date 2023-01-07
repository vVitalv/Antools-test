import React from "react"
import Glogo from "./google"
import MSlogo from "./microsoft"
import Slogo from "./slack"
import WPlogo from "./wordpress"

function Logos() {
  return (
    <div className='logos'>
      <MSlogo />
      <Glogo />
      <Slogo />
      <WPlogo />
    </div>
  )
}

export default Logos

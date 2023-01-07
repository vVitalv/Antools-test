import React from "react"
import Medsos from "../medsos"
import Input from "./input"

function Search() {
  return (
    <div className='search'>
      <p className='p1'>
        Awesome tools for Designer & Developer<span>.</span>
      </p>
      <p className='p2'>
        Antool is a web collection of information on paid or <br />
        free Design and Development tools
      </p>
      <br />
      <Input />
      <Medsos />
    </div>
  )
}

export default Search

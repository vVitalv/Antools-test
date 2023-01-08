import React from "react"
import Medsos from "../medsos"
import Input from "./input"

function Search() {
  return (
    <div className='search'>
      <h1 className="search-h1">
        Awesome tools for Designer & Developer<span>.</span>
      </h1>
      <p className="search-txt">
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

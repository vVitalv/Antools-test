import React from "react"
import Logo from "./logo"
import Menu from "./menu"
import Regist from "./regist"

function Header() {
  return (
    <header>
      <div className='header-width'>
        <Logo />
        <Menu />
        <Regist />
      </div>
    </header>
  )
}

export default Header

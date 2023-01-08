import React from "react"
import Logo from "../header/logo"

function Footer() {
  return (
    <footer>
      <div className='antools'>
        <Logo />
        <p className='antools-txt1'>Copyright 2021. Antools</p>
        <p className='antools-txt2'>
          Antool is a web collection of
          <br />
          information on paid or free Design
          <br />
          and Development tools
        </p>
      </div>
      <address className='contact'>
        <h2 className='footer-h2'>Contact Us</h2>
        <a className='footer-txt' href='tel:+621987463'>
          +621987463
        </a>
        <br />
        <span className='footer-txt'>M Building, No.10 A</span>
        <br />
        <a className='footer-txt' href='mailto:antools@awesome.com'>
          antools@awesome.com
        </a>
      </address>
      <div className='category'>
        <h2 className='footer-h2'>Categories</h2>
        <a
          className='footer-txt'
          href='https://ivanovo.hh.ru/resume/ba5ffdc1ff02760a2e0039ed1f3546616b6a35'
        >
          Design
        </a>
        <br />
        <a className='footer-txt' href='https://github.com/vVitalv'>
          Development
        </a>
      </div>
      <nav>
        <h2 className='footer-h2'>Company Info</h2>
        <a className='footer-txt' href='https://experience.onrender.com/'>
          About Us
        </a>
        <br />
        <a className='footer-txt' href='https://maccaroni.onrender.com/'>
          Our Partners
        </a>
        <br />
        <a className='footer-txt' href='https://floodary.onrender.com'>
          Blog
        </a>
      </nav>
    </footer>
  )
}

export default Footer

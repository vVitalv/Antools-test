import React from "react"
import LeftArrow from "./vector/leftarrow"
import david from "../../img/david-suarez.png"

function Screen5() {
  return (
    <div className='screen5'>
      <img src={david} className='david' alt='David Suarez' />
      <div className='david-pants' />
      <div className='bage'>
        <p className='bage-txt1'>Ronald Richards</p>
        <p className='bage-txt2'>Product Manager</p>
      </div>
      <p className='quote'>“</p>
      <article className='quote-txt'>
        Incididunt cillum do sint sint enim ullamco id deserunt mollit
        <br />
        qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
        <br />
        Do nulla velit labore occaecat do deserunt Lorem magna
        <br />
        officia incididunt consectetur amet. Sunt consectetur veniam
        <br />
        minim ex commodo sint non. Occaecat aute officia excepteur
        <br />
        non laboris id qui ad.
      </article>
      <div className='circle-2' />
      <div className='circle-3' />
      <div className='circle-blue' />
      <div className='circle-orange' />
      <div className='circle-purple' />
      <LeftArrow />
      <LeftArrow />
      <div className='pages'>
        <div className='page' />
        <div className='page' />
        <div className='page' />
      </div>
    </div>
  )
}

export default Screen5

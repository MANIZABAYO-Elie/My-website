import React from 'react'
import target from './assets/target.jpg'
function Card() {
  return (
    <div className='card'>
        <img className='card-image' src={target} alt="frontend developer" />
        <h2>MANIZABAYO Elie</h2>
        <p>Frontend Developer</p>
    </div>
  )
}
export default  Card
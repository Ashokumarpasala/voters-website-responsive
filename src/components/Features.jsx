import React from 'react'
import lock from '../images/shield-lock-fill.svg'
import pc from '../images/pc-display.svg'
import pie from '../images/pie-chart-fill.svg'
import dollor from '../images/currency-dollar.svg'
import hand from '../images/hand-index-fill.svg'

function Features() {
  return (
    <div className='p-5'>
      <h1 style={{borderBottom:"5px solid rgba(1, 1, 29, 1)", fontSize:"60px"}} className='m-5 py-3'>Features</h1>
      <div className='d-flex p-5  py-3'>
        <img className='mx-4' style={{width:"50px"}} src={lock} alt="" />
        <h4>Secured by 256 bit encryption</h4>
      </div>
      <div className='d-flex p-5  py-3'>
        <img className='mx-4' style={{width:"50px"}} src={dollor} alt="" />
        <h4>Cheaper than ballot voting system</h4>
      </div>
      <div className='d-flex p-5  py-3'>
        <img className='mx-4' style={{width:"50px"}} src={pc} alt="" />
        <h4>Verifiable transactions</h4>
      </div>
      <div className='d-flex p-5  py-3'>
        <img className='mx-4' style={{width:"50px"}} src={hand} alt="" />
        <h4>Easy to use</h4>
      </div>
      <div className='d-flex p-5  py-3'>
        <img className='mx-4' style={{width:"50px"}} src={pie} alt="" />
        <h4>Faster voting process</h4>
      </div>
    </div>

  )
}

export default Features

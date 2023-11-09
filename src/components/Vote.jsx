import React from 'react'
import user from '../images/person-circle (1).svg'
import reg from '../images/r-circle-fill.svg'
import key from '../images/key-fill.svg'
import vote from '../images/badge-vo-fill.svg'
import desk from '../images/pc-display.svg'

function Vote() {
  return (
    <div>
      <div className='p-5 vote'>
      <h1 style={{borderBottom:"5px solid rgba(1, 1, 29, 1)", fontSize:"60px"}} className='m-5 py-3'>Follow these easy steps</h1>
      <div className='d-flex'>
        <img className='mx-4 py-3' style={{width:"50px"}} src={reg} alt="" />
        <h4 className='py-4'>Register yourself by filling the required informations</h4>
      </div>
      <div className='d-flex'>
        <img className='mx-4 py-3' style={{width:"50px"}} src={user} alt="" />
        <h4 className='py-4'>Signin as user</h4>
      </div>
      <div className='d-flex'>
        <img className='mx-4 py-3' style={{width:"50px"}} src={desk} alt="" />
        <h4 className='py-4'>Go to vote option on dashboard</h4>
      </div>
      <div className='d-flex'>
        <img className='mx-4 py-3' style={{width:"50px"}} src={key} alt="" />
        <h4 className='py-4'>Give security key</h4>
      </div>
      <div className='d-flex'>
        <img className='mx-4 py-3' style={{width:"50px"}} src={vote} alt="" />
        <h4 className='py-4'>Vote your candidate and submit</h4>
      </div>
    </div>
    </div>
  )
}

export default Vote

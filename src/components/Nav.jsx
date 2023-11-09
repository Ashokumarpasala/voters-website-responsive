import React from 'react'
import logo from '../images/logo.svg'
import help from '../images/telephone-plus.svg'
import user from '../images/person-circle (1).svg'

const Nav = () => {
  
  return (
      <div style={{backgroundColor:"rgba(1, 1, 29, 1)", color:"whitesmoke"}}>
      <div className="d-flex justify-content-between p-5 nav">
        <div><img src="" alt="" /></div>
        <div className='d-flex align-items-center head '>
            <h5 className='px-3'>Main page</h5>
            <h6 className='px-3'>
              <img src={help} className='px-2' style={{color:"white"}} alt="" />
              Help-line Number</h6>
             <button className='btn btn-primary px-4'>
              <img src={user} className='px-2' alt="" />
              login</button>
        </div>
      </div>

      <div className="d-flex justify-content-around lead">

        <div className='logo' style={{ boxShadow: '0px 4px 8px rgba(1, 1, 29, 1)' }}>
          <img src={logo} alt="" style={{ height: '500px' }} />
        </div>

          <div className='d-flex align-items-center'>
            <div>
            <h2 className='my-4'>Be a part of decision</h2>
            <h1 className='my-4' style={{fontSize:"70px", color:"rgba(1, 95, 199, 1)", fontFamily:"DM Serif Display"}}>Vote Today</h1>
            <button className='btn btn-primary px-4 mx-3'>Register</button>
            <button className='btn btn-primary px-4'>Read More</button>
            </div>
          </div>

      </div>

    </div>
  )
}

export default Nav;

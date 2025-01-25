import React from 'react'
import '../css/sectionTwo.css'
import { Link } from 'react-router-dom'

const SectionTwo = () => {
  return (
    <div className='sec2'>
      <div className="sec2main s2m">
        <div className="img">
            <img src="images/upG2.gif" alt="images/upG2.gif" />
        </div>
        <div className="right-two">
            <div className="firstDiv">
                <h1 className='s2h1'>Welcome Back</h1>
                <h2 className='s2h2'>User</h2>
            </div>
            <div className="sec2Btn">
                <div className="btnDiv1">
                    <Link className='btnLinks'><button className='btn1'>Pay EMI</button></Link>
                    <Link className='btnLinks'><button className='btn2'>New Loan</button></Link>
                </div>
                <div className="btnDiv2">
                    <Link to={'/profile'} className='btnLinks'><button className='btn3'>Profile</button></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiShieldUserFill } from "react-icons/ri";
import '../../css/header.css'

const Header = () => {
  return (
    <nav>
        {/* home,my loans,Apply,Support,Profile */}
        <div className="logo">
            <Link to={'/'} className='bankLogo' ><img src="https://play-lh.googleusercontent.com/q4s4UwGwtb4svI4VMs4Y6eFCUFfEi9OaH1-hcyY35GLKbRfgzT8b-IEEfd5daZVMwWk" alt="https://play-lh.googleusercontent.com/q4s4UwGwtb4svI4VMs4Y6eFCUFfEi9OaH1-hcyY35GLKbRfgzT8b-IEEfd5daZVMwWk" className='angelLogo'/></Link>
        </div>
        <div className="options">
            <li><NavLink className='navLinks' to={'/'}>Home</NavLink></li>
            <li><NavLink className='navLinks' to={'/myLoans'}>My Loans</NavLink></li>
            <li><NavLink className='navLinks' to={'/loans'}>Apply</NavLink></li>
            <li><NavLink className='navLinks' to={'/support'}>Support</NavLink></li>
        </div>
        <div className="profile">
            <li><NavLink className='navLinks' to={'/profile'}><RiShieldUserFill className='profileLogo' /></NavLink></li>
        </div>
    </nav>
  )
}

export default Header

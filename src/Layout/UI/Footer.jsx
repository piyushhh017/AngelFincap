import React from 'react'
import '../../css/footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AiTwotoneMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <span></span>
        <div className="ftrPara">
            <p>Achieving your financial goals will now be easier. Trust us to be your partner in growth and prosperity!</p>
        </div>
        <div className="social-icons">
            <Link><FaXTwitter /></Link>
            <Link><FaLinkedin /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaFacebook /></Link>
        </div>
        <div className="cc">
            <p>©2025 Copyright : Piyush Jha</p>
        </div>
    </footer>
  )
}

export default Footer

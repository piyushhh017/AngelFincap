import React from 'react'
import '../css/loanOne.css'
import LoanSecTwo from '../sections/LoanSecTwo'
import LoanSecOne from '../sections/LoanSecOne'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const Loan = () =>{

    useGSAP(()=>{
        const tl_1 = gsap.timeline()
        const tl_2 = gsap.timeline({
            scrollTrigger:{
                trigger:'.L',
                start:'top 50%',
            }
        })

        tl_1.from('.card',{
            y:100,
            opacity:0,
            stagger:0.2,
            duration:1,
            delay:0.3
        })

        tl_2.from('.L',{
            x:100,
            opacity:0,
            duration:1,
            delay:1
        })

    })

    return(
        <>
            <div className="loan">
                <LoanSecOne />
                <LoanSecTwo />
            </div>
        </>
    )
}

export default Loan

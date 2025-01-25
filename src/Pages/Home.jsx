import React from 'react'
import SectionOneHome from '../sections/sectionOneHome'
import SectionTwo from '../sections/SectionTwo'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const Home = () => {

    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const tl_1 = gsap.timeline()
        const tl_2 = gsap.timeline({
            scrollTrigger:{
                trigger:'.sec2',
                start:'top 30%',
            }
        })

        tl_1.from(".bg-1",{
            x:100,
            opacity:0,
            delay:0.1,
            duration:0.5
        })
        tl_1.from('.sec1h1',{
            x:50,
            opacity:0,
            duration:0.3
        })
        tl_1.from('.sp1',{
            x:-50,
            opacity:0,
            duration:0.3,
            delay:0.2
        })
        tl_1.from('.sec1Para',{
            opacity:0,
            duration:0.5,
        })

        tl_2.from('.s2m',{
            x:200,
            duration:0.5,
            opacity:0
        })
        tl_2.from('.s2h1',{
            y:10,
            duration:0.5,
            opacity:0
        })
        tl_2.from('.s2h2',{
            y:10,
            duration:0.5,
            opacity:0
        })
        tl_2.from('.btn1',{
            opacity:0
        })
        tl_2.from('.btn2',{
            opacity:0
        })
        tl_2.from('.btn3',{
            y:20,
            opacity:0
        })
    })

  return (
    <div className='home'>
      <SectionOneHome />
      <SectionTwo />
    </div>
  )
}


export default Home

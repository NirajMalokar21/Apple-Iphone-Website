import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {rightImg, watchImg} from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1
    })
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.5,
      delay: 1.5
    })
  }, [])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding
    bg-zinc'>
      <div className='screen-max-width '>
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>
          <div id='links' className='flex flex-wrap gap-5 items-end'>
            <p className='link'>Watch the film <img className='ml-2' src={watchImg}/></p>
            <p className='link'>Watch the event <img className='ml-2' src={rightImg}/></p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
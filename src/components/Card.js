import React from 'react'
import Toppicks from './Toppicks'
import Movies from './Movies'
import Shows from './Shows'
import Documentry from './Documentry'

const Card = (props) => {

  const { previewTitle } = props
  return (
    <div className='card-slider-container overflow-hidden sm:overflow-visible'>

      {/* <div className='slide-container leading-none my-7'>
        <div className='swiper-heading text-[12px] md:text-[1.4vw]'><span>Top Picks</span></div>
        <Toppicks previewTitle={previewTitle} />
      </div> */}
      <div className='slide-container leading-none my-7'>
        <div className='swiper-heading text-[12px] md:text-[1.4vw]'><span>Movies</span></div>
        <Movies previewTitle={previewTitle} />
      </div>
      <div className='slide-container leading-none my-7'>
        <div className='swiper-heading text-[12px] md:text-[1.4vw]'><span>TV Shows</span></div>
        <Shows previewTitle={previewTitle} />
      </div>
      <div className='slide-container leading-none my-7'>
        <div className='swiper-heading text-[12px] md:text-[1.4vw]'><span>Documentries</span></div>
        <Documentry previewTitle={previewTitle} />
      </div>

    </div>
  )
}

export default Card
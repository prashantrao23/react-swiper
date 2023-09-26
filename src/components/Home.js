import React, { useState, useContext, useEffect } from 'react'
import billboardImg from '../images/netflix_home_bleach.webp'
import billboardTitle from '../images/bleach_title.webp'
import Card from './Card'
import Preview from './Preview'
import NetflixApiContext from "../api/NetflixApiContext"


const Home = () => {

  const [previewModal, setPreviewModal] = useState(false);
  // const [titleID, setTitleID] = useState('')

  const { fetchTitle, titleDetails, fetchSeasons, season } = useContext(NetflixApiContext);

  useEffect(() => {
    fetchTitle(); // Initiate the API request
    // eslint-disable-next-line
  }, []);


  const previewTitle = (id) => {
    console.log("Preview Title ID", id);
    fetchTitle(id);
    fetchSeasons(id)
    setPreviewModal(true);
  }

  const previewClose = () => {
    setPreviewModal(!previewModal);
  }
  console.log('Episode Details', season)

  return (
    <div className='overflow-hidden'>
      <div className='relative '>

        <div className=' '>

          <div className='home relative'>
            {/* Banner */}
            <div className='relative'>
              <img src={billboardImg} alt="" className='w-screen billboardImg' />
              <div className='left-gradiant'></div>
              <div className='age_content bg-black/50  text-white absolute flex flex-row items-center justify-items-end right-0 bottom-[35%]'>
                <div className='h-[2.4vw] py-[0.5vw] pr-[3.5vw] pl-[0.8vw] font-semibold text-[1.5vw] items-center border-l-[3px] border-solid flex '>
                  <span className='mb-[2%]'> U/A 16+</span>
                </div>
              </div>
            </div>
            {/* Banner description and buttons */}
            <div className='billboard_detail absolute z-10 w-full h-full top-0 bottom-0  left-0 right-0 '>
              <div className='billboard_detail_container flex flex-col justify-endtop-0 py-1 absolute w-[36%] left-[4%] bottom-[35%] lg:w-[36%] lg:left-[4%] lg:bottom-[35%] md:w-[36%] '>
                <div className="log_and_text w-full">
                  <div className='billboard_title sm:py-2 md:py-4 '>
                    <img src={billboardTitle} alt="" className='w-full ' />
                  </div>
                  <div className='billboard_description text-white sm:py-2 leading-[0.5] sm:leading-none md:leading-normal  '>
                    <div className='season_description py-1 sm:py-2'>
                      <span className='text-[1.6vw] font-semibold leading-[0] '>Season 14 coming on 1 August</span>
                    </div>
                    <div className='synopsis py-1 sm:py-2 '>
                      <span className='text-[1.2vw]'>After teenager Ichigo Kurosaki acquires superpowers from wounded soul reaper Rukia Kuchiki, the two of them join forces to round up lost souls.</span>
                    </div>
                  </div>

                  {/* Play button and More button */}
                  <div className="billboard_btn flex flex-row">
                    <div className='billboard_play_btn mr-2'>
                      <button type='button' className='bg-white text-black rounded-sm font-medium sm:font-bold flex flex-row px-3 sm:py-[0.5rem] sm:px-8  whitespace-nowrap items-baseline'>
                        <div className=''>
                          <i className="fa-solid fa-play text-sm md:text-lg lg:text-xl"></i>
                        </div>
                        <div className='w-[0.5rem]'></div>
                        <span className='text-sm md:text-lg lg:text-xl '>Play</span>
                      </button>
                    </div>

                    <div className='billboard_info_btn ml-2'>
                      <button className='bg-[#6D6D6D]/[0.7] text-white rounded-sm font-normal sm:font-bold flex flex-row px-3 sm:py-[0.5rem] sm:px-8  whitespace-nowrap items-baseline'>
                        <div>
                          <i className="fa-solid fa-circle-info text-sm md:text-lg lg:text-xl"></i>
                        </div>
                        <div className='w-[0.5vw]'></div>
                        <span className='text-xs md:text-lg lg:text-xl'>More Info</span></button>
                    </div>
                  </div>
                </div>


              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Swiper */}
      <Card previewTitle={previewTitle} />



      <div className={` ${!previewModal ? "hidden" : "visible"} fixed top-[50%] left-[50%]  z-50`} style={{"transform": "translate(-50%, -50%)"}}>
        {!titleDetails ? (

          <div className='text-center text-2xl'>
            Loading...
          </div>
        ) :
          (

            titleDetails.map((title, index) => {
              return <Preview key={index} titleDetails={title} previewClose={previewClose} season={season} />

            })
          )
        }
      </div>

    </div>

  )
}

export default Home
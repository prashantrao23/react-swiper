import React, { useContext, useEffect } from 'react'
import NetflixApiContext from '../api/NetflixApiContext';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Parallax } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../components/customSwiper.css'
import SwipeCards from './SwipeCards';



const Movies = (props) => {

    const context = useContext(NetflixApiContext);
    const { fetchMovie, movie } = context;
    const { previewTitle } = props


    useEffect(() => {
        fetchMovie(); // Initiate the API request
        // eslint-disable-next-line
    }, []);





    const breakpoints = {
        0: {
            slidesPerView: 2,
            spaceBetween: 2,
            slidesPerGroup: 2

        },
        500: {
            slidesPerView: 3,
            spaceBetween: 5,
            slidesPerGroup: 3
        },
        800: {
            slidesPerView: 4.5,
            spaceBetween: 8,
            slidesPerGroup: 4

        },
        1100: {
            slidesPerView: 5.5,
            spaceBetween: 10,
            slidesPerGroup: 5

        },
        1400: {
            slidesPerView: 6.5,
            spaceBetween: 10,
            slidesPerGroup: 6
        }
    }


    return (
        <div>


            <Swiper breakpoints={breakpoints} modules={[Navigation, Pagination, Parallax]} parallax={true} pagination={true} navigation={true} className='!pl-3 sm:!pl-6 lg:!pl-14' >

                {!movie || !movie.titles ? (

                    <div className='text-center text-2xl'>
                        No Data to display yet ...
                    </div>
                ) :
                    (

                        movie.titles.slice(0, 20).map((title, index) => {
                            return <SwiperSlide key={index}>
                                <SwipeCards title_summary_type={title.summary.type} jawsummary={title.jawSummary} previewTitle={previewTitle} />
                            </SwiperSlide>
                        })
                    )
                }

            </Swiper>
        </div>
    )

}

export default Movies


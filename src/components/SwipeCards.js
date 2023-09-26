import React from 'react'
import NotFoundImg from '../images/—Pngtree—404 error page_1362453.png'


const SwipeCards = (props) => {

    const { jawsummary, previewTitle } = props;

    const defaultUrl = "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUUzWR5seiIq7XDaFjNnHj9rwcgCuR8OHbbBbhj1lhmPcE95TLUtJHdHDkZYpxl2b2m4dZYCo981aCQG8yuGA6jl-UIUdNkqEEdO5a5vi8XuG8qxd5dR4wlWl2qUR_-nRjmmh_OIEXDzoTwsIj84vL5rUXsWKsOUqBftBRXxKKNDYajc4u0x.webp?r=75b";


    // console.log('title_summary_title = ', title_summary_type)

    return (
        <>


            <div className="card cursor-pointer">
                <div className='relative'>

                    <img src={jawsummary.backgroundImage.url} className="card--img " id="cardImg" alt='' />
                    {/* <div className='logo absolute w-28 bottom-2 left-2'> <img src={!jawsummary.logoImage.url ? "" : jawsummary.logoImage.url} alt="..." /> </div> */}
                </div>
                <div className="card--body leading-5">
                    <div className="card--icons">
                        <div className="card--icons--button">
                            <button className="play-button">
                                <i className="fa-regular fa-circle-play"></i>
                            </button>
                            <button id="plusBtn"><i className="fa-solid fa-plus"></i></button>
                            <button id="likeBtn">
                                <i className="fa-regular fa-thumbs-up"></i>
                            </button>
                        </div>
                        <div>
                            <button id="downMenu" onClick={() => { previewTitle(jawsummary.id) }} >
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>

                    <div className="card--informations">
                        <p className="card--match">94% Match</p>
                        <p className="card--rate">16+</p>
                        <p className="card--duration">1h 42m</p>
                    </div>

                    <div className="card--tags">
                        <p className="card--tags-items">
                            {jawsummary.tags.map((tag) => (
                                <span key={tag.id}>
                                    <span className="card--tags-item first">{tag.name}</span>
                                    <span>&#8226;</span>
                                </span>
                            ))}
                            {/* <span className="card--tags-item first">{title_summary_type}</span>
                                <span>&#8226;</span>
                                <span className="card--tags-item">{jawsummary.tags.name}</span>
                                <span>&#8226;</span>
                                <span className="card--tags-item">Drama</span> */}
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SwipeCards
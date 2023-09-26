import React, { useContext, useEffect, useState } from 'react'
import NetflixApiContext from '../api/NetflixApiContext';
import notfoundImg from '../images/—Pngtree—404 error page_1362453.png'
import './preview.css'

const Preview = (props) => {

    const { titleDetails, previewClose, season } = props;

    const { fetchEpisode, episode } = useContext(NetflixApiContext);

    const [selectedOption, setSelectedOption] = useState('');

    const hasNoSeasons = season.some((title) => title.seasons.length <= 0);

    console.log('hasNoSeasons', hasNoSeasons)


    useEffect(() => {
        fetchEpisode(selectedOption);
        // eslint-disable-next-line
    }, [selectedOption])

    const handleOptionChange = (event) => {
        const newSelectedOption = event.target.value;
        setSelectedOption(newSelectedOption);
        // fetchEpisode(newSelectedOption);
    };

    // Function to truncate text to a certain number of words
    function truncateTextToWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    }

    console.log('Season ', selectedOption)
    console.log(' Episode', episode)
    console.log(' Season', season)



    const logourl = "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUUzWR5seiIq7XDaFjNnHj9rwcgCuR8OHbbBbhj1lhmPcE95TLUtJHdHDkZYpxl2b2m4dZYCo981aCQG8yuGA6jl-UIUdNkqEEdO5a5vi8XuG8qxd5dR4wlWl2qUR_-nRjmmh_OIEXDzoTwsIj84vL5rUXsWKsOUqBftBRXxKKNDYajc4u0x.webp?r=75b";

    const imgurl = "https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXZqt9hR2lzJueTOMTOd2CfIlGA7z-xU_UEXUKJlxdirNZz--V3jCRWpjSXtBYviwhGLJgjPmKl9uEeHk47avjmkvR8amvkGPVM7.webp?r=e5d";

    return (
        <div className={` ${hasNoSeasons?'h-auto':'h-screen'} preview-container flex justify-center  overflow-y-scroll`}>
            <div className='max-w-[848px] bg-[#181818]'>
                <div className='relative'>
                    <div className='preview-close-btn absolute top-0 right-0 mt-1 mr-2 z-10'>
                        <button className='cursor-pointer text-white text-lg border-solid border-2 px-2 py-1' onClick={previewClose}>
                            <i className="fa-solid fa-xmark" />
                        </button>
                    </div>
                    <div className='preview-img'>
                        <img src={!titleDetails.details.backgroundImage.url ? imgurl : titleDetails.details.backgroundImage.url} alt="" />
                    </div>
                    <div className='preview-img-logo absolute mb-2 sm:mb-0 bottom-8 sm:bottom-14 md:bottom-24 p-5 z-[1]'>
                        <img src={!titleDetails.details.logoImage.url ? logourl : titleDetails.details.logoImage.url} alt="" />
                    </div>
                    <div className='preview-btn absolute bottom-4 sm:bottom-8 md:bottom-12 text-white  w-full z-[1]'>
                        <div className='flex flex-row justify-between items-center px-5 '>
                            <div className='flex justify-between items-center gap-4'>
                                <div><button className='bg-white text-black px-2 py-1 md:px-8 md:py-1 rounded-sm flex items-center gap-2'><span className='text-sm sm:text-lg md:text-2xl'><i className="fa-solid fa-play" /> </span><span className='text-sm sm:text-lg md:text-xl font-bold'>Play</span></button></div>
                                <div><button className='bg-gray-500/50 rounded-full border-solid border-[1px] w-[25px] md:w-[40px] max-w-[40px] min-w-[25px] h-[25px] md:h-[40px] max-h-[40px] min-h-[25px] overflow-hidden'><i className="fa-solid fa-plus" /></button></div>
                                <div><button className='bg-gray-500/50 rounded-full border-solid border-[1px] w-[25px] md:w-[40px] max-w-[40px] min-w-[25px] h-[25px] md:h-[40px] max-h-[40px] min-h-[25px] overflow-hidden'><i className="fa-regular fa-thumbs-up" /></button></div>
                            </div>
                            <div>
                                <button className='bg-gray-500/50 rounded-full border-solid border-[1px] w-[25px] md:w-[40px] max-w-[40px] min-w-[25px] h-[25px] md:h-[40px] max-h-[40px] min-h-[25px] overflow-hidden'>
                                    <i className="fa-solid fa-volume-xmark" />
                                    {/* <i className="fa-solid fa-volume-high " /> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute w-full h-full bottom-[-1px]' style={{ "background": "linear-gradient(0deg,#181818,transparent 50%)" }}></div>
                </div>
                <div className=' px-8 bg-[#181818]'>
                    <div className='content text-white'>
                        <div className='preview-details'>
                            <div className='flex justify-between '>
                                <div className=''>
                                    <div className='my-4'>
                                        <p className='my-1'>
                                            <span className='text-green-600 font-bold'>98% Match</span>&nbsp;
                                            <span>{titleDetails.details.releaseYear}</span>&nbsp;
                                            <span>{titleDetails.details.episodeCount} Episodes</span>&nbsp;
                                            <span className='border-solid border-[1px] text-xs'>{titleDetails.details.delivery.quality}</span>
                                        </p>
                                        <p className='my-1'>
                                            <span className='border-solid border-[1px] px-[2px] text-sm font-medium'>U/A 16+</span>&nbsp;
                                            {titleDetails.details.tags.slice(0, 3).map((tag) => (
                                                <span key={tag.id}>{tag.name}<span>,&nbsp;</span></span>

                                            ))}
                                        </p>
                                    </div>
                                    <div className='my-4'>
                                        <p>{titleDetails.details.synopsis}</p>
                                    </div>
                                </div>
                                <div className='text-sm'>
                                    <div className='my-2'>
                                        <p className='my-1'>
                                            <span className='text-stone-600'>Cast:</span>&nbsp;
                                            {titleDetails.details.cast.slice(0, 3).map((cast) => (
                                                <span key={cast.id}>{cast.name}<span>,&nbsp;</span></span>

                                            ))}
                                            <span>more...</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='my-1'>
                                            <span className='text-stone-600'>Genres:</span>&nbsp;
                                            {titleDetails.details.genres.slice(0, 3).map((genres) => (
                                                <span key={genres.id}>{genres.name}<span>,&nbsp;</span></span>

                                            ))}
                                            <span>more...</span>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!hasNoSeasons ? (
                            <div>

                                <div className='preview-episodes my-2 flex justify-between'>
                                    <div><p className='text-2xl text-white font-bold '>Episodes</p></div>
                                    <div className='text-black'>
                                        {season ? (
                                            <select name="seasons" id="seasons" className='border-none rounded-sm py-1' value={selectedOption} onChange={handleOptionChange} >
                                                {season.map((title) => (
                                                    title.seasons.map((season) => (
                                                        <option value={season.seasonId} key={season.seasonId}>{season.name}</option>

                                                    ))
                                                ))}
                                            </select>

                                        ) : (
                                            <select name="seasons" id="seasons" className='border-none rounded-sm py-1' >
                                                <option></option>
                                            </select>
                                        )}

                                    </div>
                                </div>

                                <div>
                                    {selectedOption && episode ? (
                                        <div>
                                            {episode.map((data) => (
                                                data.episodes.map((episode, index) => (
                                                    <div key={index} className='grid grid-flow-col gap-4 items-center py-5 cursor-pointer'>
                                                        <div>
                                                            <span className='text-xl font-semibold'>{index + 1}</span>
                                                        </div>
                                                        <div className='w-32'>
                                                            <img src={!episode.interestingMoment._342x192.webp.value.url ? notfoundImg : episode.interestingMoment._342x192.webp.value.url} alt={episode.title} />
                                                        </div>
                                                        <div>
                                                            <p className='flex flex-row justify-between font-semibold'>
                                                                <span>Episode {episode.summary.episode}</span>
                                                                <span>23m</span>
                                                            </p>
                                                            <p className='text-[1em]'>
                                                                {truncateTextToWords(episode.contextualSynopsis.text, 25)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))
                                            ))}
                                        </div>

                                    ) : (
                                        <div>
                                            <p>No episodes available</p>
                                        </div>
                                    )}

                                </div>

                            </div>
                        ) : (
                            <div></div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Preview
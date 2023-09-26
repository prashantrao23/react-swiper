import React from 'react'
import './selectProfile.css'
import { Link } from 'react-router-dom';

const SelectProfile = () => {

    const profileImg = "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229";

    return (
        <div className='bg-[#141414] selectprofile'>
            <div className='top--blur  fixed top-0  z-20  w-full'></div>
            <div className='profile-selection h-screen w-screen '>

                <div className='text-center'>
                    <div className='my-5'>
                        <div className='my-10 text-3xl md:text-4xl font-semibold text-white'><span>Who's watching ?</span></div>
                        <ul className='flex flex-row flex-wrap justify-center gap-4 text-stone-400 font-medium'>
                            <Link to='/home' >
                                <li className='cursor-pointer hover:text-white leading-8'>
                                    <div className='h-[10vw] w-[10vw] max-h-[200px] max-w-[200px] min-h-[84px] min-w-[84px] rounded-[3%] overflow-hidden hover:border-solid hover:border-2 '>
                                        <img className='object-cover' src={profileImg} alt="" />
                                    </div>
                                    <span className=''>Account 1</span>
                                </li>
                            </Link>
                            <Link to='/home' >
                                <li className='cursor-pointer hover:text-white leading-8'>
                                    <div className='h-[10vw] w-[10vw] max-h-[200px] max-w-[200px] min-h-[84px] min-w-[84px] rounded-[3%] overflow-hidden hover:border-solid hover:border-2 '>
                                        <img className='object-cover' src={profileImg} alt="" />
                                    </div>
                                    <span className=''>Account 2</span>
                                </li>
                            </Link>
                            <Link to='/home' >
                                <li className='cursor-pointer hover:text-white leading-8'>
                                    <div className='h-[10vw] w-[10vw] max-h-[200px] max-w-[200px] min-h-[84px] min-w-[84px] rounded-[3%] overflow-hidden hover:border-solid hover:border-2 '>
                                        <img className='object-cover' src={profileImg} alt="" />
                                    </div>
                                    <span className=''>Account 3</span>
                                </li>
                            </Link>
                            <Link to='/'>
                            <li className='cursor-pointer hover:text-white leading-8'>
                                <div className='h-[10vw] w-[10vw] max-h-[200px] max-w-[200px] min-h-[84px] min-w-[84px] rounded-[3%] overflow-hidden hover:border-solid hover:border-2 '>
                                    <img className='object-cover' src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeRJMvTjl-lpIxDcMc9lWpXYu1XU0E_jRJyFRw_hoINdSpHArO_H3wWw1iDgPAxCYF8DfwSpfSshxCstOlBfI0rAQOfCQfKetNWQ.png?r=54d" alt="" />
                                </div>
                                <span className=''>Children</span>
                            </li>
                            </Link>
                            <li className='hover:text-white leading-8'>
                                <Link to="/">
                                    <div className='h-[10vw] w-[10vw] max-h-[200px] max-w-[200px] min-h-[84px] min-w-[84px] flex justify-center items-center text-[55px] rounded-[3%] overflow-hidden hover:bg-white hover:text-stone-400'>
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                    <span>Add Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-9 text-stone-500 text-sm md:text-xl'><button className='border-solid border-[1px] border-stone-500 py-2 px-8 '>Manage profile</button></div>
                </div>
            </div>
        </div>
    )
}

export default SelectProfile
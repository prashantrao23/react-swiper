import React, { useState, useEffect } from 'react'
import logo from '../images/netflix-logo-png-2562.png'
// import { useScrollPosition } from '../hooks/Navscroll'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'



const Navbar = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 25) {
                setScroll(true);
            } else setScroll(false);
        });
    }, []);


    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    const profileImg = "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229";


    return (


        <div className='navbar fixed top-0  z-20  w-full'>
            {/* <div className={classNames(scrollPosition > 0 ? 'bg-black' : 'bg-transparent')}> */}
            <div className={scroll === true ? 'bg-black transition-all ease-in duration-500 ' : 'bg-transparent'}>

                <div className='overflow-auto'></div>
                <nav className=" bg-transparent">
                    <div className="mx-auto max-w-9xl px-3 sm:px-6 lg:px-14">
                        <div className="relative flex h-12 md:h-16 items-center justify-between">

                            <div className="flex flex-1 items-stretch justify-stretch  ">
                                <div className="flex  items-center  ">
                                    <Link to="/"><img className="h-4 sm:h-6 md:h-8 w-auto" src={logo} alt="Your Company" /></Link>
                                </div>
                                <div className=" inset-y-0 left-0 flex items-center md:hidden">
                                    {/* <!-- Mobile menu button--> */}
                                    <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-xs text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                        Browse
                                    </button>
                                </div>
                                <div className="!hidden ml-6 md:!block">
                                    <div className="flex flex-row flex-shrink space-x-4  text-[1vw] ">
                                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                        <Link to="/home" className="text-white rounded-md  font-bold relative" >Home</Link>
                                        <Link to="/preview" className="text-white hover:text-slate-400 font-normal relative ">TV Shows</Link>
                                        <Link to="/data" className="text-white hover:text-slate-400 font-normal relative">Movies</Link>
                                        <Link to="/newpopular" className="text-white hover:text-slate-400 font-normal relative">New & Popular</Link>
                                        <Link to="/mylist" className="text-white hover:text-slate-400 font-normal relative">My List</Link>
                                        <Link to="/bylanguage" className="text-white hover:text-slate-400 font-normal relative">Browse by Language</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className='px-2 mx-2 hidden md:block'>
                                    <i className="fa-solid fa-magnifying-glass text-white text-lg "></i>
                                </div>
                                <div className='px-2 mx-2 hidden md:block'>
                                    <Link to="/" className='text-white text-md font-semibold'>Children</Link>
                                </div>
                                <button type="button" className="rounded-full bg-gray-800 mx-2 p-1 px-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>

                                {/* <!-- Profile dropdown --> */}
                                <div className="relative md:ml-3 account-icon">
                                    <div className='flex'>
                                        <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-sm" src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="" />
                                        </button>
                                        <div className='px-1 align-middle justify-items-center hidden md:block drop-icon'><i className="fa-solid fa-caret-up text-white "></i></div>
                                    </div>

                                    {/* <!-- Dropdown menu, show/hide based on menu state. Entering: "transition ease-out duration-100" From: "transform opacity-0 scale-95" To: "transform opacity-100 scale-100"
                                Leaving: "transition ease-in duration-75" From: "transform opacity-100 scale-100" To: "transform opacity-0 scale-95"--> */}
                                    <div className="account-icon-dropdown absolute right-0 z-10 mt-2 w-48 origin-top-right  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                        <div className='px-4 py-4 '>
                                            <ul className='text-white text-sm font-medium flex flex-col gap-2'>
                                                <Link to='/home' >
                                                    <li className='cursor-pointer hover:underline flex flex-row gap-2 items-center'>
                                                        <div className='h-[2vw] w-[2vw] max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] rounded-[8%] overflow-hidden  '>
                                                            <img className='object-cover' src={profileImg} alt="" />
                                                        </div>
                                                        <span className=''>Account 1</span>
                                                    </li>
                                                </Link>
                                                <Link to='/home' >
                                                    <li className='cursor-pointer hover:underline flex flex-row gap-2 items-center'>
                                                        <div className='h-[2vw] w-[2vw] max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] rounded-[8%] overflow-hidden  '>
                                                            <img className='object-cover' src={profileImg} alt="" />
                                                        </div>
                                                        <span className=''>Account 2</span>
                                                    </li>
                                                </Link>
                                                <Link to='/'>
                                                    <li className='cursor-pointer hover:underline flex flex-row gap-2 items-center'>
                                                        <div className='h-[2vw] w-[2vw] max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] rounded-[8%] overflow-hidden '>
                                                            <img className='object-cover' src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeRJMvTjl-lpIxDcMc9lWpXYu1XU0E_jRJyFRw_hoINdSpHArO_H3wWw1iDgPAxCYF8DfwSpfSshxCstOlBfI0rAQOfCQfKetNWQ.png?r=54d" alt="" />
                                                        </div>
                                                        <span className=''>Children</span>
                                                    </li>
                                                </Link>

                                            </ul>
                                        </div>
                                        <div className='px-4 py-4 border-t-[1px] border-b-[1px]'>
                                            <div className='text-white flex flex-col gap-2'>
                                                <Link to='/'>
                                                    <div className='flex flex-row gap-2 items-center'>
                                                        <div className='text-xl'><i className="fa-solid fa-pencil"></i></div>
                                                        <div className='text-sm'><span>Manage Profile</span></div>
                                                    </div>
                                                </Link>
                                                <Link to='/'>
                                                    <div className='flex flex-row gap-2 items-center'>
                                                        <div className='text-xl'><i className="fa-solid fa-user"></i></div>
                                                        <div className='text-sm'><span>Account</span></div>
                                                    </div>
                                                </Link>
                                                <Link to='/'>
                                                    <div className='flex flex-row gap-2 items-center'>
                                                        <div className='text-xl'><i className="fa-regular fa-circle-question"></i></div>
                                                        <div className='text-sm'><span>Help</span></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='px-4 py-2 text-center'>
                                            <Link to='/' className='text-white text-sm '>Sign out of Netflix</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                    {/* <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</Link>
                            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</Link>
                            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</Link>
                            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</Link>
                        </div>
                    </div> */}
                </nav>
            </div>
        </div>

    )
}

export default Navbar
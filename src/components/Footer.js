import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center w-screen py-5'>

            <div className=''>
                <div className='text-left my-5'>
                    <ul className='flex text-white gap-4'>
                        <li><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div className='my-5'>
                    <ul className='text-stone-500 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-2'>
                        <li><a href="/">Audio Description</a></li>
                        <li><a href="/">Investor Relatios</a></li>
                        <li><a href="/">Legal Notices</a></li>
                        <li><a href="/">Help Centers</a></li>
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/">Cookie</a></li>
                        <li><a href="/">Gift Cards</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Corporate Information</a></li>
                        <li><a href="/">Media Center</a></li>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className='my-5'>
                    <a href="/" className='border-solid border-stone-500 border-[1px] text-stone-500 py-2 px-3'>Service Code</a>
                </div>
                <div className='my-5'>
                    <span className='text-stone-500 overflow-hidden'>Netflix-Clone</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
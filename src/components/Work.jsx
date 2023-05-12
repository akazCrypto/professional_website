import React from 'react'
import ffm_ecb from './images/ffm_ecb.jpg'
import ffm_banking_01 from './images/ffm_banking_01.jpg'
import ffm_banking_02 from './images/ffm_banking_02.jpg'
import ffm_plane from './images/ffm_plane.jpg'
import french_castle_01 from './images/french_castle_01.jpg'
import french_castle_02 from './images/french_castle_02.jpg'
import french_castle_03 from './images/french_castle_03.jpg'
import { Link } from 'react-scroll';
import { Component } from 'react';
import ReactPlayer from "react-player";





const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p>Check out some of my recent work</p>
                </div>

                {/* container for projects */}

                <div
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid Item */}

                    <div style={{ backgroundImage: `url(${ffm_plane})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center ">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${ffm_ecb})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center ">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}

                    <div style={{ backgroundImage: `url(${ffm_banking_01})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center ">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${ffm_banking_02})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center ">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}

                    <div style={{ backgroundImage: `url(${french_castle_01})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center ">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${french_castle_03})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center ">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="/">

                                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>



                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work


/*
<Link onClick={handleClick} to='https://www.youtube.com/embed/DXhjeJ0tX7s'></Link>
onClick={{ width: '570', height: '320', src: 'https://www.youtube.com/embed/DXhjeJ0tX7s' }}
<iframe width='570' height='320' src='https://www.youtube.com/embed/DXhjeJ0tX7s' allowFullScreen>
*/
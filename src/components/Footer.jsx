import React from 'react'
//import './Footer.css'
import { Link } from 'react-scroll';

const Footer = () => {
    return (


        <div className='footer'>


            <div className='max-w-[1500px] z-10 m-auto h-[80px] flex justify-evenly items-center px-0 py-0 ps-0 pe-0 pt-0 pr-0 bg-[#3b3b42] text-sm text-gray-300 border-t-4 border-[#6f1628] sm:w-[500px] sm:text-sm sm:px-0.5 md:w-[1023px] md:text-base lg:w-[1280px] lg:text-lg xl:w-[1500px]'>
                <div className="copyright">© 23 AK</div>
                <ul className='flex'>

                    <li><Link to='home_home' smooth={true} duration={16000}>
                        Home
                    </Link></li>

                    <li><Link to='basic' smooth={true} duration={16000}>
                        Qualification
                    </Link></li>
                    <li><Link to='person' smooth={true} duration={16000}>
                        Portfolio
                    </Link></li>
                    <li>  <Link to='resume' smooth={true} duration={16000}>
                        Resume
                    </Link></li>




                </ul>
            </div>
        </div>

    )
}

export default Footer


/*

<li><Link to='initial' smooth={true} duration={16000}>
                        Person
                    </Link></li>

                    <li><Link to='contact' smooth={true} duration={8000}>
                        Contact
                    </Link></li>

                    */
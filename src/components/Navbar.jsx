import React, { useState } from 'react';
import Logo from "./images/ak_cf_logo.png"
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='max-w-[1500px] z-10 m-auto h-[80px] flex justify-evenly items-center px-0 py-0 ps-0 pe-0 pt-0 pr-0 bg-[rgb(65,65,73)] text-sm text-gray-300 border-b-4 border-[#6f1628] sm:w-[500px] sm:text-sm sm:px-0.5 md:w-[1023px] md:text-base lg:w-[1280px] lg:text-lg xl:w-[1500px]'>
            <div id='home_home'>
                <img src={Logo} alt="Logo Image" style={{ width: '70px' }} />
            </div>

            {/*Menu*/}

            <ul className='flex'>


                <li><Link to='basic' smooth={true} duration={16000}>
                    Qualification
                </Link></li>
                <li><Link to='person' smooth={true} duration={16000}>
                    Portfolio
                </Link></li>
                <li>  <Link to='resume' smooth={true} duration={16000}>
                    Resume
                </Link></li>


                <li><Link to='contact' smooth={true} duration={16000}>
                    Contact
                </Link></li>


            </ul>




            {/*Social icons*/}
            <div className='z-20 hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://linkedin.com" target={"anton-kazakov-210713162"} rel="noreferrer">

                            Linkedin <FaLinkedin size={30} />


                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="#email">
                            Email <HiOutlineMail size={30} />


                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="#resume" offset={-100}>
                            Resume <BsFillPersonLinesFill size={30} />


                        </a>
                    </li>
                </ul>

            </div>



        </div>
    )
}

export default Navbar;


/*
<li><Link to='home_home' smooth={true} duration={16000}>
                    Home
                </Link></li>


 <li><Link to='initial' smooth={true} duration={16000}>
                    Person
                </Link></li>




 Hamburger}
 <div onClick={handleClick} className='md:hidden z-10'>
 {!nav ? <FaBars /> : <FaTimes />}
</div>
Mobile Menu

<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
 <li className="py-6 text-4xl"><Link onClick={handleClick} to='home' smooth={true} duration={2000}>
     Home
 </Link></li>
 <li className="py-6 text-4xl"><Link onClick={handleClick} to='about' smooth={true} duration={2000}>
     About
 </Link></li>
 <li className="py-6 text-4xl"><Link onClick={handleClick} to='skills' smooth={true} duration={2000}>
     Skills
 </Link></li>
 <li className="py-6 text-4xl"><Link onClick={handleClick} to='work' smooth={true} duration={2000}>
     Work
 </Link></li>
 <li className="py-6 text-4xl"><Link offset={-100} onClick={handleClick} to='resume' smooth={true} duration={2000}>
     Resume
 </Link></li>
 <li className="py-6 text-4xl"><Link onClick={handleClick} to='contact' smooth={true} duration={2000}>
     Contact
 </Link></li>


</ul>








<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com">
                            Github <FaGithub size={30} />


                        </a>
                    </li>





<li>  <Link to='resume' offset={-100} smooth={true} duration={4000}>
                    Resume
                </Link></li>

Github <FaGithub size={30} />
                            Email <HiOutlineMail size={30} />
                            Resume <BsFillPersonLinesFill size={30} />
                            */
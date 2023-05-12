import React, { useEffect } from 'react';
import './Resume.css';
import { Resume_Text, RT, ANT_CV } from './Resume_text';
import Aos from 'aos'
import 'aos/dist/aos.css'
import ffm_plane from './images/ffm_plane.jpg'
import ffm_ecb from './images/ffm_ecb.jpg'
import ffm_banking_01 from './images/ffm_banking_01.jpg'
import ffm_banking_02 from './images/ffm_banking_02.jpg'
import french_castle_01 from './images/french_castle_01.jpg'
import french_castle_02 from './images/french_castle_02.jpg'
import french_castle_03 from './images/french_castle_03.jpg'
import abracadabra from './images/abracadabra.jpg'
import stock_exchange_01 from './images/stock_exchange_01.jpg'
import stock_exchange_02 from './images/stock_exchange_02.jpg'
import space2 from './images/space2.jpg'


const Resume = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])
    return (
        <>
            <div id='resume' className="resume_title">
                <h6>Resume</h6>
            </div>
            <div className='resume'>




                <div className='container'>
                    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='boxes' >
                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>
                                    <h1> {ANT_CV.basic.title}</h1>
                                    <p>{ANT_CV.basic.qualification}</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <br />

                    <div data-aos-delay='100' data-aos='fade-zoom-in' className='boxes'>
                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>
                                    <h1>{ANT_CV.Fanzone_Media.company}</h1>
                                    <h2>{ANT_CV.Fanzone_Media.position}</h2>
                                    <h3>{ANT_CV.Fanzone_Media.date}</h3>
                                    <p>{ANT_CV.Fanzone_Media.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div data-aos-delay='100' data-aos='fade-zoom-in' className='boxes'>
                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>

                                    <h1>{ANT_CV.Treasury_Advisory_Crypto.title}</h1>
                                    <h3>{ANT_CV.Treasury_Advisory_Crypto.date}</h3>
                                    <p>{ANT_CV.Treasury_Advisory_Crypto.description}</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div data-aos-delay='100' data-aos='fade-zoom-in' className='boxes'>

                        <div className='grid'>
                            <div className='box'>

                                <div className='text'>

                                    <h1>{ANT_CV.Aureum_Realwert.company}</h1>
                                    <h2>{ANT_CV.Aureum_Realwert.position}</h2>
                                    <h3>{ANT_CV.Aureum_Realwert.date}</h3>
                                    <p>{ANT_CV.Aureum_Realwert.description}</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div data-aos-delay='100' data-aos='fade-zoom-in' className='boxes'>

                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>

                                    <h1>{ANT_CV.RNRM.company}</h1>
                                    <h2>{ANT_CV.RNRM.position}</h2>
                                    <h3>{ANT_CV.RNRM.date}</h3>
                                    <p>{ANT_CV.RNRM.description}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <br />
                    <div data-aos-delay='100' data-aos='fade-zoom-in' className='boxes'>
                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>

                                    <h1>{ANT_CV.Treasury_Advisory.title}</h1>
                                    <h3>{ANT_CV.Treasury_Advisory.date}</h3>
                                    <p>{ANT_CV.Treasury_Advisory.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div data-aos-delay='100' data-aos='fade-zoom-in' className='boxes'>
                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>

                                    <h1>{ANT_CV.Photon_Energy.company}</h1>
                                    <h2>{ANT_CV.Photon_Energy.position}</h2>
                                    <h3>{ANT_CV.Photon_Energy.date}</h3>
                                    <p>{ANT_CV.Photon_Energy.description}</p>

                                </div>

                            </div>

                        </div>
                    </div>
                    <br />
                    <div data-aos-delay='100' data-aos='fade-zoom-in' className='boxes'>
                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>

                                    <h1>{ANT_CV.Volksbank_Wien.company}</h1>
                                    <h2>{ANT_CV.Volksbank_Wien.position}</h2>
                                    <h3>{ANT_CV.Volksbank_Wien.date}</h3>
                                    <p>{ANT_CV.Volksbank_Wien.description}</p>

                                </div>

                            </div>

                        </div>
                    </div>
                    <br />
                    <div data-aos-delay='100' data-aos-duration='4200' data-aos='fade-zoom-in' className='boxes'>

                        <div className='grid'>
                            <div className='box'>
                                <div className='text'>

                                    <h1>{ANT_CV.Sungard_Deutschland_GmbH.company}</h1>
                                    <h2>{ANT_CV.Sungard_Deutschland_GmbH.position}</h2>
                                    <h3>{ANT_CV.Sungard_Deutschland_GmbH.date}</h3>
                                    <p>{ANT_CV.Sungard_Deutschland_GmbH.description}</p>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Resume

/*

<div name='resume' className=' text-gray-300 bg-[#c5cbd4]'>
                    <div className=' bg-[#c8cbd0] mx-auto p-24 flex flex-col justify-center w-full h-full'>
                        <div className='pb-0'>
                            <p className='text-4xl font-bold inline border-b-4 text-gray-700 border-[#6f1628]'>Resume</p>
                            <p className='py-4'>Check out some of my recent work</p>
                        </div>
                    </div>
                </div>




style={{ backgroundImage: `url(${ffm_plane})` }}


<div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>


<div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='boxes' >
                    <div className='grid'>
                        <div className='box'>
                            <div className='text'>
                                <h1> {ANT_CV.basic.title}</h1>
                                <p>{ANT_CV.basic.qualification}</p>
                            </div>
                        </div>


                    </div>
                </div>

*/

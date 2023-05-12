import React from 'react'
import './Initial.css'
import ffm_river_29 from './images/ffm_river_29.JPG'
import { ANT_CV } from './Resume_text.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'
import portrait_04 from './images/portrait_04.jpg'
import IMG_7205 from './images/IMG_7205.JPG'
import IMG_7321 from './images/IMG_7321.JPG'
import IMG_7322 from './images/IMG_7322.JPG'
import IMG_7323 from './images/IMG_7323.JPG'
import IMG_7324 from './images/IMG_7324.JPG'
import IMG_7325 from './images/IMG_7325.JPG'
import IMG_7327 from './images/IMG_7327.JPG'
import IMG_7351 from './images/IMG_7351.JPG'
import IMG_7354 from './images/IMG_7354.JPG'
import IMG_7364 from './images/IMG_7364.JPG'
import IMG_7366 from './images/IMG_7366.JPG'


const Initial = () => {
    return (
        <>
            <div id='initial' className='initial_title'>



                <h6>Anton Kazakov: finance executive in regulated crypto area</h6>


            </div>
            <div className='initial_section'>




                <img className='image' src={IMG_7351} />
                <div className='box'>

                    <h1>Dear friends of crypto finance!</h1>
                    <br />

                    <span> {ANT_CV.basic.text}
                    </span>

                </div>






            </div>










        </>
    )
}

export default Initial

/*

<div className='skills'>
                        <div className='grids'>

                            <div className='item'>
                                <h1>{ANT_CV.basic.title}</h1>

                                <span>{ANT_CV.basic.qualification}</span>
                            </div>

                            <div className='item'>
                                <h1>Languages:</h1>
                                <span>{ANT_CV.basic.languages}</span>
                            </div>

                            <div className='item'>
                                <h1>Programming Skills:</h1>
                                <span>{ANT_CV.basic.programming_skills}</span>
                            </div>
                        </div>
                    </div>







<div className='grids'>
                            <div className='item'>
                                <span>{ANT_CV.basic.title}</span>

                                <span>{ANT_CV.basic.qualification}</span>
                            </div>

                            <div className='item'>
                                <span>Languages:</span>
                                <span>{ANT_CV.basic.languages}</span>
                            </div>

                            <div className='item'>
                                <span>Programming Skills:</span>
                                <span>{ANT_CV.basic.programming_skills}</span>
                            </div>
                        </div>

                        */

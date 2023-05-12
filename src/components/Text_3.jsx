import React from 'react'
import { ANT_CV } from './Resume_text.jsx'

import './Text.css'

const Text = () => {
    return (
        <div className='skills'>


            <div className='item'>
                <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Programming Skills:</h1>
                <span data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">{ANT_CV.basic.programming_skills}</span>
            </div>


        </div>
    )
}

export default Text

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


         <div className='item'>
                <h1>Languages:</h1>
                <span>{ANT_CV.basic.languages}</span>
            </div>

            <div className='item'>
                <h1>Programming Skills:</h1>
                <span>{ANT_CV.basic.programming_skills}</span>
            </div>

                */
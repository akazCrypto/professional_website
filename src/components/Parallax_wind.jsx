import React from 'react'
import neuronal_network_01 from "./images/neuronal_network_01.jpg";
import neuronal_network_02 from "./images/neuronal_network_02.jpg";
import neuronal_network_03 from "./images/neuronal_network_03.jpg";
import neuronal_network_04 from "./images/neuronal_network_04.jpg";
import movie1 from './images/IMG_7160.MOV';
import { Parallax } from 'react-parallax';
import './Parallax_wind.css'
import { ANT_CV } from './Resume_text';

const Parallax_wind = () => {
    return (
        <div id='basic' className="header">
            <div className='title'>
                <h6> {ANT_CV.basic.title}</h6>
            </div>

            <div id='one' className='parallax_container'>
                <Parallax className='image' bgImage={neuronal_network_01} strength={200}>






                </Parallax >

            </div>
        </div>
    )
}

export default Parallax_wind;


/*


<span className='text'>{ANT_CV.basic.title}
                        <br />
                        {ANT_CV.basic.qualification}
                        <br />
                        {ANT_CV.basic.languages}
                        <br />
                        {ANT_CV.basic.programming_skills}
                    </span>

<iframe className='introduction' src='https://www.youtube.com/embed/TzAjvSMl7rU' allowFullScreen></iframe>




import { Parallax } from 'react-parallax';
import React from 'react';
import ffm_river_50 from "./images/ffm_river_50.jpg";
import ffm_river_42 from './images/ffm_river_42.jpg';
import ffm_river_47 from './images/ffm_river_47.jpg';
import './ImageOne.css'

const ImageOne = () => (
    <div className="header">
        <div id='one' className='parallax_container'>
            <Parallax className='image' bgImage={ffm_river_50} strength={-350}>





            </Parallax >
        </div>
    </div>

);
export default ImageOne;
*/
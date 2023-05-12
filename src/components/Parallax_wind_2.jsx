import React from 'react'
import neuronal_network_01 from "./images/neuronal_network_01.jpg";
import neuronal_network_02 from "./images/neuronal_network_02.jpg";
import neuronal_network_03 from "./images/neuronal_network_03.jpg";
import { Parallax } from 'react-parallax';
import './Parallax_wind.css'
import { ANT_CV } from './Resume_text';

const Parallax_wind = () => {
    return (
        <div className="header">


            <div id='one' className='parallax_container'>
                <Parallax className='image' bgImage={neuronal_network_01} strength={200}>






                </Parallax >
            </div>
        </div>
    )
}

export default Parallax_wind;
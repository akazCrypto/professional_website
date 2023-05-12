import React from 'react'
import ffm_river_27 from './images/ffm_river_27.JPG'
import ffm_river_28 from './images/ffm_river_28.JPG'
import ffm_river_29 from './images/ffm_river_29.JPG'
import ffm_river_30 from './images/ffm_river_30.JPG'
import ffm_river_31 from './images/ffm_river_31.JPG'
import portrait_01 from './images/portrait_01.jpg'
import portrait_02 from './images/portrait_02.jpg'
import portrait_03 from './images/portrait_03.jpg'
import portrait_04 from './images/portrait_04.jpg'
import portrait_05 from './images/portrait_05.jpg'
import IMG_7206 from './images/IMG_7206.JPG'
import IMG_7207 from './images/IMG_7207.JPG'
import IMG_7208 from './images/IMG_7208.JPG'
import IMG_7209 from './images/IMG_7209.JPG'
import IMG_7210 from './images/IMG_7210.JPG'
import IMG_7211 from './images/IMG_7211.JPG'
import IMG_7321 from './images/IMG_7321.JPG'
import IMG_7322 from './images/IMG_7322.JPG'
import IMG_7323 from './images/IMG_7323.JPG'
import IMG_7324 from './images/IMG_7324.JPG'
import IMG_7325 from './images/IMG_7325.JPG'
import IMG_7327 from './images/IMG_7327.JPG'
import IMG_7332 from './images/IMG_7332.JPG'
import IMG_7351 from './images/IMG_7351.JPG'
import IMG_7354 from './images/IMG_7354.JPG'
import IMG_7364 from './images/IMG_7364.JPG'
import IMG_7366 from './images/IMG_7366.JPG'
import './Person.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Person = () => {
    return (
        <>
            <div id='person' className="person_title">
                <h6>Personal Portfolio</h6>
            </div>
            <div className="section">
                <img className='image_1' src={IMG_7327} />
                <img className='image_2' data-aos-one='false' data-aos-delay='450' data-aos='fade-up' src={IMG_7332} />
                <img className='image_3' data-aos-one='false' data-aos-delay='450' data-aos='fade-up' src={IMG_7366} />





            </div>
        </>

    )
}

export default Person

/*
<img className='image_5' data-aos-one='false' data-aos-delay='700' data-aos='fade-down' src={IMG_7209} />


<img className='image_4' data-aos-one='false' data-aos-delay='1000' data-aos='fade-down' src={IMG_7210} />


data-aos-delay='500' data-aos-duration='4200' data-aos='fade-left'

<Right>

                    <img src={ffm_river_27} alt={ANT_CV.basic.name} />

                    <img className="small-img-1" data-scroll data-scroll-speed="-0.5" src={ffm_river_28} alt={ANT_CV.basic.name} />

                    <img className="small-img-3" data-scroll data-scroll-speed="1" src={ffm_river_29} alt={ANT_CV.basic.name} />

                    <div className="text_pic">

                        <img className="small-img-4" data-scroll data-scroll-speed="-0.5" src={old_wall_02} alt={ANT_CV.basic.name} />
                        <div className="text_">
                            <p data-scroll data-scroll-speed="-0.5">{ANT_CV.basic.title}
                                {ANT_CV.basic.qualification}</p>


                        </div>
                    </div>
                    <img className="small-img-2" data-scroll data-scroll-speed="0.67" src={ffm_river_30} alt={ANT_CV.basic.name} />




                </Right>

*/

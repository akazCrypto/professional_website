import React, { useState, useEffect } from "react";
import './Parallax_window.css'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

function Parallax_window() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderContent = () => (
        <>
            <div className="heading">
                <h1 className="text">Closure</h1>
                <h2 className="caption">
                    Your one-stop source of Web Development tricks
                </h2>
            </div>
            <div className="cta">
                <p>
                    <b>1. Like the video.</b> Because it helps me and my channel
                </p>
                <p>
                    <b>2. Like the video.</b> To see more content like that!
                </p>
                <p>
                    <b>3. Follow the Github link.</b> And play with this code yourself!
                </p>
            </div>
        </>
    );

    return (
        <section className="Parallax">
            <div
                className="background"
                style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
            />
            <div
                className="background-triangles"
                style={{ transform: `translateY(${offsetY * 0.8}px)` }}
            />
            <div className="content">{renderContent()}</div>
        </section>
    );
}
export default Parallax_window;

/*
return (
    <div className='parallax_window'>
        <div className='parallax_container'>
            <div className='parallax_box'>
                <Parallax pages={4}>
                    <ParallaxLayer speed={1}>
                        <h2>dristung-prodristung</h2>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.5}>
                        <h2>Audrie Tautou</h2>
                    </ParallaxLayer>


                </Parallax>

            </div>
        </div>

    </div>
)
}

export default Parallax_window

*/

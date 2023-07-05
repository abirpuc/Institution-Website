import React, { useState } from 'react';
import './banner.css'
import { carouselimg } from '../../Data/carousel';
import Carousel from './Carousel';
const Banner = () => {
    const [current, setCuttent] = useState(0)
    const [nextindex, setNext] = useState(1)

    const prev = () =>{
        const FirstSide = current === 0;
        const newIndex = FirstSide ? carouselimg.length -1 : current -1;
    }
    const next = () =>{
        const FirstSide = current === 0;
        const newIndex = FirstSide ? carouselimg.length -1 : current -1;
    }

    return (
        <div>
           <div className='carosul-img'>
            {
                carouselimg.map((img, indx) => <Carousel key={indx} img={img}></Carousel>)
            }
            <div className='button'>
                <button onClick={prev}><i className="fa-thin fa-square-chevron-left"></i> prev</button>
                <button onClick={next}><i className="fa-thin fa-square-chevron-right"></i> next</button>
            </div>
           </div>
           
        </div>
    );
};

export default Banner;
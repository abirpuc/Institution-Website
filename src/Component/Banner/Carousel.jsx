import React from 'react';
import './banner.css'
const Carousel = ({img}) => {
    return (
        <div>
            <img src={img.img} alt="" width={600} height={350}/>
            
        </div>
    );
};

export default Carousel;
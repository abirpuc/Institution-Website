import React from 'react';
import './tophero.css';
import topImg from '../../assets/images.jpeg'
const TopHero = () => {
    return (
        <div className='top-hero'>
            <img src={topImg} alt="" />
            <div className='hero-text'>
                <h1>ডুমুরিয়া সরকারি টেকনিক্যাল স্কুল ও কলেজ, খুলনা</h1>
            </div>
        </div>
    );
};

export default TopHero;
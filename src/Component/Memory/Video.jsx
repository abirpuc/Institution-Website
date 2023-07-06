import React from 'react';
import { Link } from 'react-router-dom';

const Video = ({ props }) => {
    return (
        <div >
            <button className='gallery-btn'>ছবি গ্যালারী</button>
            <div className="gallery">
                <div className="gallery-card">
                    <iframe  src="https://www.youtube.com/embed/f5oSMv57P5U">
                    </iframe>
                    <h2><Link to="" className='gallery-link' title="ভ্রমন">ভ্রমন</Link></h2>
                </div>
                <div className="gallery-card">
                    <iframe  src="https://www.youtube.com/embed/bvs4Trtrew4">
                    </iframe>
                    <h2><Link to="" className='gallery-link' title="প্রশিক্ষণ">প্রশিক্ষণ</Link></h2>

                </div>
            </div>
        </div>
    );
};

export default Video;
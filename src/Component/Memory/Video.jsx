import React from 'react';
import { Link } from 'react-router-dom';

const Video = ({props}) => {
    return (
        <div >
            <button className='gallery-btn'>ছবি গ্যালারী</button>
            <div className="gallery">
                <div className="gallery-card">
                    <video  src="https://www.youtube.com/watch?v=7GYkdHACUhw">
                    <source src="movie.mp4" type="video/mp4"/>
                    <source src="movie.ogg" type="video/ogg"/>
                    </video>
                    <h2><Link to="" className='gallery-link' title="ভ্রমন">ভ্রমন</Link></h2>
                </div>
                <div className="gallery-card">
                    <video src="https://www.youtube.com/watch?v=7GYkdHACUhw"></video>
                    <h2><Link to="" className='gallery-link' title="প্রশিক্ষণ">প্রশিক্ষণ</Link></h2>

                </div>
            </div>
        </div>    
            );
};

            export default Video;
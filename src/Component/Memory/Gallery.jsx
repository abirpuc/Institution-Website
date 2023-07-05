import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = (props) => {
    return (
        <div >
        <button className='gallery-btn'>ছবি গ্যালারী</button>
        <div className="gallery">
            <div className="gallery-card">
                <img src={props.gallery1} alt="" />
                 <h2><Link to="" className='gallery-link' title="ভ্রমন">ভ্রমন</Link></h2>
                 <p>22-01-22</p>
            </div>
            <div className="gallery-card">
                <img src={props.gallery1} alt="" />
                 <h2><Link to="" className='gallery-link' title="প্রশিক্ষণ">প্রশিক্ষণ</Link></h2>
                 <p>22-01-22</p>
            </div>
        </div>
    </div>
    );
};

export default Gallery;
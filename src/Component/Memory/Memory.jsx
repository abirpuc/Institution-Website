import React from 'react';
import './memory.css';
import gallery1 from '../../assets/g_1.jpg'
import gallery2 from '../../assets/G_2.jpg'
import Gallery from './Gallery';
// import Video1  from 'https://www.youtube.com/watch?v=7GYkdHACUhw';
// import Video2  from 'https://www.youtube.com/watch?v=7GYkdHACUhw';
import Video from './Video';
const Memory = () => {
    return (
        <div className='memory-container'>
            <div className="gallery-container">
            <Gallery
                gallery1= {gallery1}
                gallery2= {gallery2}
            />
            </div>
            <div className="video-container">
            <Video
                // Video1= {Video1}
                // Video2= {Video2}
            />
            </div>
        </div>
    );
};

export default Memory;
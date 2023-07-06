import React from 'react';
import Button from '../../SharedComponent/Button/Button';
import SingleHelth from './SingleHelth';
import covid from '../../assets/Corona-Teaser-BD-card-.jpg'
import covid2 from '../../assets/corona.jpg';
import dengu from '../../assets/dengu.jpg';
import './covid.css'
const Covid = () => {
    return (
        <div className='health-container'>
            <div className="single-health">
                <SingleHelth
                    btnName = "করোনা ভাইরাস প্রতিরোধে যোগাযোগ"
                    img = {covid2}
                />
                <SingleHelth
                    btnName = "করোনা ট্রেসার বিডি"
                    img = {covid}
                />
                <SingleHelth
                    btnName = "ডেঙ্গু প্রতিরোধে করণীয়ি"
                    img = {dengu}
                />
            </div>
        </div>
    );
};

export default Covid;
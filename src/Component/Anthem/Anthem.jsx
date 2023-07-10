import React from 'react';
import './anthem.css';
import Button from '../../SharedComponent/Button/Button';
import anthem from '../../noticpdf/জাতীয় সঙ্গীত অার শপথ। E E IMRAN।.mp3'
const Anthem = () => {
    return (
        <div className='anthem-container'>
            <Button name="জাতীয় সংগীত" />
            <div style={{marginTop:'20px', width:'180px'}}>
                <audio controls style={{width:'100%', background:'none'}} src={anthem}>
                    {/* <source src="horse.ogg" type="audio/ogg"/> */}
                    {/* <source src={anthem} type="audio/mpeg"/> */}
                 </audio>
                 
                    </div>
            </div>
            );
};

            export default Anthem;
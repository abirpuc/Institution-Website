import React from 'react';
import Button from '../../SharedComponent/Button/Button';

const SingleHelth = (props) => {
    return (
        <div>
            <Button name={props.btnName} />
            <img src={props.img} alt="" />
        </div>
    );
};

export default SingleHelth;
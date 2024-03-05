import React from 'react';

const BreadBaking = ({bakingButton}) => {
    return (
        <div className="bread_box">
            <span className={bakingButton ? 'animate' : ''}>~</span>
            <span className={bakingButton ? 'animate' : ''}>~</span>
            <img src="./images/fishBread.gif" alt="" />
        </div>
    );
};

export default BreadBaking;
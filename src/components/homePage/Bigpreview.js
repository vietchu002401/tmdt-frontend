import React from 'react';

const Bigpreview = (props) => {
    return (
        <div className="big-preview">
            <img src={props.src} alt="big" />
            <h2>{props.title}</h2>
            <p>{props.preview}</p>
        </div>
    );
};

export default Bigpreview;
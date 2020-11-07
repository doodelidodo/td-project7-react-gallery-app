import React from 'react';

const Image = (props) => {
    return (
        <li>
            <img src={props.image} alt={""}></img>
        </li>
    )
};

export default Image;
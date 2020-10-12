import React from 'react';
import {Consumer} from './Context';

const ImageList = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <ul>
                        {context.dogs.map((image, index) =>
                            <li><img src={image} alt={""}></img></li>
                        )}
                    </ul>
                )
            }
            }
        </Consumer>
    )
};

export default ImageList;
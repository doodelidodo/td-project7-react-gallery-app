import React from 'react';
import Image from "./Image";
import NoResults from "./NoResults"

const ImageList = (props) => {
    return (
        <ul>
            {props.data.length > 0 ?
                props.data.map((image, index) =>
                    <Image image={image} key={index} />
                )
                : <NoResults />
            }
        </ul>
    )
};

export default ImageList;
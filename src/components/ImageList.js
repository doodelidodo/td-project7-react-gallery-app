import React from 'react';
import Image from "./Image";
import NoResults from "./NoResults"

const ImageList = (props) => {
    console.log(props.data.length);
    return (
        <ul>
            {props.data.length > 0 ?
                props.data.map((image, index) =>
                    <Image image={image} />
                )
                : <NoResults />
            }
        </ul>
    )
};

export default ImageList;
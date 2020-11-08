import React from 'react';
import Image from "./Image";
import NoResults from "./NoResults"

const ImageList = (props) => {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <ul>
                {props.data.length > 0 ?
                    props.data.map((image, index) =>
                        <Image image={image} key={index} />
                    )
                    : <NoResults />
                }
            </ul>
        </React.Fragment>
    )
};

export default ImageList;
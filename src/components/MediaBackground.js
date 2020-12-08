import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Img } from "gatsby-image"

const VideoHelper = ({src}) => {
    return (
        <video autoPlay={true} muted="true" loop="loop" className="absolute inset-0 m-auto max-w-none h-screen overflow-hidden" style={{minWidth: "50%", minHeight: "50%"}}>
            <source src={src} type="video/mp4" />
            Browser doesn't support the video tag.
        </video>
    );
}
VideoHelper.propTypes = {
    src: PropTypes.string.isRequired
}


const ImageHelper = ({src}) => {
    console.log("Image helper rendered")
    return (
        <Img fluid={src} />
    );
}
ImageHelper.propTypes = {
    src: PropTypes.object.isRequired
}

const MediaBackground = ({src}) => {
    const [srcType] = useState(typeof src)

    return (
        <div className="overflow-hidden absolute inset-0 w-screen h-screen" style={{zIndex: -10}}>
            <div className="absolute -left-1/2 -top-1/2 mx-auto overflow-hidden" style={{width: "200%", height: "200%"}}>
                {srcType === "string" ? <VideoHelper src={src} /> : <ImageHelper src={src} />}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 overflow-hidden" />
        </div>
    );
}

MediaBackground.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default MediaBackground;
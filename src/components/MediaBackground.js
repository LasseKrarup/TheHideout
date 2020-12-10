import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { Img } from "gatsby-image"

const VideoHelper = ({src}) => {
    const videoRef = useRef(null)

    useEffect(() => {
        const { current: videoElement } = videoRef
        videoElement.defaultMuted = true
    }, [])
    return (
        <video ref={videoRef} loop muted playsInline autoPlay className="absolute inset-0 m-auto max-w-none overflow-hidden" style={{minWidth: "50%", minHeight: "50%"}}>
            <source src={src} type="video/mp4" />
            Browser doesn't support the video tag.
        </video>
    );
}
VideoHelper.propTypes = {
    src: PropTypes.string.isRequired
}

const VideoComponent = ({src}) => {
    const videoContainer = useRef()

    useEffect(() => {
        const video = document.createElement('video');
        video.autoplay = true;
        video.loop = true;
        video.muted = true; // fixes autoplay in chrome
        video.setAttribute('playsinline', 'true'); // fixes autoplay in webkit (ie. mobile safari)

        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';
        video.appendChild(source);

        videoContainer.current.appendChild(video);
    },[])
    return (
      <div ref={videoContainer} />
    );
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
        <div className="overflow-hidden absolute inset-0 w-screen h-screen max-w-full">
            <div className="absolute -left-1/2 -top-1/2 mx-auto overflow-hidden" style={{width: "200%", height: "200%"}}>
                {srcType === "string" ? <VideoComponent src={src} /> : <ImageHelper src={src} />}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 overflow-hidden" />
        </div>
    );
}

MediaBackground.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default MediaBackground;
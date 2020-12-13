import React from 'react';
import PropTypes from 'prop-types';

const GradientImage = ({src, alt, className}) => {
    return (
        <div className={`relative overflow-hidden h-full ${className}`}>
          <img src={src} alt={alt} className="opacity-75 xl:absolute xl:inset-0 xl:m-auto" />
          <div className="bg-gradient-to-b from-black via-transparent to-black absolute inset-0"></div>
        </div>
    );
}
GradientImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default GradientImage;
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

const GradientImage = ({src, alt, className, ...rest}) => {
    let gatsbyImage = false
    if (typeof src === "object") {
        gatsbyImage = true
    }
    return (
        <div className={`relative overflow-hidden xl:h-160 ${className}`} {...rest}>
            {gatsbyImage ? 
                <Img fluid={src} alt={alt} className="opacity-75 xl:absolute xl:inset-0 xl:m-auto" />
                :
                <img src={src} alt={alt} className="opacity-75 xl:absolute xl:inset-0 xl:m-auto" />
            }
          <div className="bg-gradient-to-b from-black via-transparent to-black absolute inset-0"></div>
        </div>
    );
}
GradientImage.propTypes = {
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    alt: PropTypes.string.isRequired,
}

export default GradientImage;

export const query = graphql`
    fragment ImageFragment on File {
        childImageSharp {
            fluid (quality: 100, maxWidth: 1536) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
    }
`
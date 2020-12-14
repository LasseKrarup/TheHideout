import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from "gatsby-image"


const Logo = (props) => {
    const {imageSharp: {fluid: logo}} = useStaticQuery(graphql`
        {
            imageSharp(fluid: {originalName: {eq: "hideout-icon.png"}}) {
                fluid(maxWidth: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `)

    return (
      <Img {...props} fluid={logo} alt="Logo"></Img>
    );
}

export default Logo;
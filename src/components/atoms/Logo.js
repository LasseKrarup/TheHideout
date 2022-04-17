import React from 'react';
import { StaticImage } from "gatsby-plugin-image"


const Logo = ({ className }) => {

    return (
      <StaticImage
        src="../../images/hideout-icon.png"
        alt="Logo"      
        placeholder="blurred"
        layout="constrained"
        width={512}
        height={512}
        className={className}
      />
    );
}

export default Logo;
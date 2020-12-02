import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "gatsby"

import Nav from "./Nav";

const Hero = (props) => {
    const title = props.title.split(" ")
    return (
        <div className="h-screen bg-black text-white flex flex-col justify-center">
            <h1 className="text-4xl font-heading lowercase mr-8 text-right"><Link to="/">{title[0]} <span className="text-yellow-300">{title[1]}</span> <span className="text-left">{title[2]}</span></Link></h1>
            <Nav />

        <div className="border-t-8 border-l-8 border-white w-16 h-8 absolute top-8 left-8"></div>
        <div className="border-b-8 border-r-8 border-white w-16 h-8 absolute bottom-8 right-8"></div>
        </div>
    );
}

Hero.propTypes = {
    title: PropTypes.string
}

export default Hero;
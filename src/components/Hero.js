import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from "react-spring"

import { Link } from "gatsby"
import { ChevronDown } from "../icons/icons";

import Nav from "./Nav";
import MediaBackground from './MediaBackground';

import bgvideo from "../images/bgvideo.mp4"


const Hero = forwardRef((props, ref) => {
    const { y } = useSpring({
        from: {y: 0},
        to: {y:1},
        config: {
            tension: 150,
            friction: 10,
            mass: 2
        },
        loop: true
      })

    const title = props.title.split(" ")

    return (
        <div className="h-screen text-white flex flex-col justify-center relative">
            <MediaBackground src={bgvideo} />
            <h1 className="text-4xl font-heading z-10 lowercase mr-8 text-right"><Link to="/">{title[0]} <span className="text-yellow-300">{title[1]}</span> <span className="text-left">{title[2]}</span></Link></h1>
            <Nav ref={ref} />

            <Link to="/"><div className="border-t-8 border-l-8 border-white w-16 h-8 absolute top-8 left-8"></div>
            <div className="border-b-8 border-r-8 border-white w-16 h-8 absolute bottom-8 right-8"></div>
            </Link>

            <animated.div className="absolute flex justify-center items-center opacity-25 w-full" style={{bottom: y
                                        .to([0,0.5,1], [50,40,50])
                                        .to(y=> `${y}px`)}}>
                <ChevronDown className="w-12" />
            </animated.div>
        </div>
    );
})

Hero.propTypes = {
    title: PropTypes.string
}

export default Hero;
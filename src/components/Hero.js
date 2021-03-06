import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from "react-spring"

import { graphql, Link, useStaticQuery } from "gatsby"
import { ChevronDown } from "../icons/icons";

import Nav from "./Nav";
import MediaBackground from './MediaBackground';


const Hero = forwardRef((props, ref) => {
    const {markdownRemark: {frontmatter: {bgvideo}}} = useStaticQuery(graphql`
        query {
            markdownRemark(fields: {slug: {eq: "/"}}) {
                frontmatter {
                    bgvideo
                }
            }
        }
    `)
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
            <h1 className="text-4xl font-heading z-10 lowercase mr-8 xl:mr-48 text-right lg:mb-8 lg:mr-16 lg:text-5xl"><Link to="/">{title[0]} <span className="text-yellow-300">{title[1]}</span> <span className="text-left">{title[2]}</span></Link></h1>
            <Nav ref={ref} className="lg:ml-16 xl:ml-48"/>

            <Link to="/"><div className="border-t-8 border-l-8 border-white w-16 h-8 xl:w-32 xl:h-16 xl:border-l-16 xl:border-t-16 absolute top-8 left-8"></div>
            <div className="border-b-8 border-r-8 border-white w-16 h-8 absolute bottom-8 right-8 xl:w-32 xl:h-16 xl:border-b-16 xl:border-r-16"></div>
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
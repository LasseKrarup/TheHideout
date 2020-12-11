import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useSpring, animated} from "react-spring"
import {useMeasure} from "../../hooks/useMeasure"
import { Link } from 'gatsby';
import { v4 as uuid } from "uuid"
import path from "path"

const SlideoverNavigationLink = ({link, isToggled: propIsToggled, closeSlideover}) => {
    const [isToggled, setIsToggled] = useState(propIsToggled)
    const [ref, {height}] = useMeasure()

    const handleClick = e => {
        setIsToggled(!isToggled)
    }
    const handleLinkClick = e => {
        !isToggled && e.preventDefault()
        isToggled && closeSlideover()
        setIsToggled(!isToggled)
    }

    const handleKeyDown = e => {
        if(e.key === "Escape") {
            if(isToggled) {
                setIsToggled(false)
            }
        }
    }

    const {animOpacity, animMaxHeight} = useSpring({
        from: {opacity: 0, maxHeight: 0},
        animOpacity: isToggled ? 1 : 0,
        animMaxHeight: isToggled ? height : 0
    })

    return (
        <li className="py-1 border-b last:border-b-0 border-gray-600">
            <div className="flex items-center">
                <Link to={link.slug} onClick={handleLinkClick} className="hover:text-yellow-300 text-xl">
                    {link.title}
                </Link>
                <div onClick={handleClick} onKeyDown={handleKeyDown} role="button" aria-label="menu-button" tabIndex="0" className={`w-0 h-0 border-8 ml-2 focus:outline-none ${isToggled ? "transform rotate-180 mb-2" : "mt-3"}`} style={{borderColor: "transparent", borderTopColor: "yellow"}}></div>
            </div>
            <animated.ul className="relative overflow-hidden"
                style={{
                    opacity: animOpacity,
                    maxHeight: animMaxHeight
                }}
            >
                <div ref={ref}>
                    {link.sub.map(sublink => (
                        <li key={uuid()}>
                            <Link className="hover:text-yellow-300 ml-4 text-gray-200" to={path.join(link.slug, sublink.slug)}>{sublink.title}</Link>
                        </li>
                    ))}
                </div>
            </animated.ul>
        </li>
    );
}

SlideoverNavigationLink.propTypes = {
    link: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        sub: PropTypes.array
    }).isRequired,
    isToggled: PropTypes.bool
}

SlideoverNavigationLink.defaultProps = {
    isToggled: false
}

export default SlideoverNavigationLink;
import React from 'react';

import { Link } from "gatsby"
import PropTypes from 'prop-types';
import path from "path-browserify"
import { v4 as uuid } from "uuid"
import {useSpring, animated} from "react-spring"


const Dropdown = ({sub, isActive, parentSlug, parentTitle}) => {
    const {opacity} = useSpring({
        opacity: isActive ? 1 : 0,
        config: {
            tension: 500,
            friction: 20
        }
    })

    return (
        <animated.ul className={`transition-opacity py-2 duration-100 block z-10 bg-black w-64 absolute inset-x-0 top-5 px-2 -ml-2 border-white border rounded-md`} style={{opacity: opacity.to(o=>o), visibility: opacity.to(o => o === 0 ? 'hidden' : 'visible')}}>
            <li className="py-1 text-yellow-300 border-b border-gray-600">
                <Link to={parentSlug}>{parentTitle}</Link>
            </li>
            {   
                sub.map((i, n) => (
                    <li key={uuid()} className="py-1 hover:bg-black border-b last:border-b-0 border-gray-600 text-xl">
                        <Link to={path.join(parentSlug, i.slug)} className="hover:text-yellow-300">{i.title}</Link>
                    </li>
                ))
            }
        </animated.ul>
    );
}

Dropdown.defaultProps = {
    isActive: false
}

Dropdown.propTypes = {
    sub: PropTypes.array.isRequired,
    isActive: PropTypes.bool.isRequired,
    parentSlug: PropTypes.string.isRequired,
    parentTitle: PropTypes.string.isRequired
}


export default Dropdown;
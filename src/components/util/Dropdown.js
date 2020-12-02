import React from 'react';

import { Link } from "gatsby"
import PropTypes from 'prop-types';
import path from "path"
import { v4 as uuid } from "uuid"


const Dropdown = ({sub, isActive, parentSlug}) => {
    return (
        <ul className={`${isActive ? "visible" : "invisible"} transition-opacity py-2 duration-100 block bg-black w-64 z-10 absolute inset-x-0 top-6`}>
            {    
                sub.map((i, n) => (
                    <li key={uuid()} className="py-1 hover:text-yellow-300 hover:bg-black">
                        <Link to={path.join(parentSlug, i.slug)}>{i.title}</Link>
                    </li>
                ))
            }
        </ul>
    );
}

Dropdown.defaultProps = {
    isActive: false
}

Dropdown.propTypes = {
    sub: PropTypes.array.isRequired,
    isActive: PropTypes.bool.isRequired,
    parentSlug: PropTypes.string.isRequired
}


export default Dropdown;
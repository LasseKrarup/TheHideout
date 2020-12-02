import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from "gatsby";
import path from "path"
import Dropdown from './Dropdown';
import useClickOutside from "../../hooks/clickOutside"

const NavlinkToplevel = ({title, slug, sub}) => {
    const [dropdownActive, setDropdownActive] = useState(false)
    const handleClick = e => {
        setDropdownActive(!dropdownActive)
    }
    const handleClickOutside = e => {
        setDropdownActive(false)
    }

    const domRef = useClickOutside(handleClickOutside)

    return (
        <>
            <li ref={domRef} className="mr-6 last:mr-0 relative">
                <div className="flex md:flex-col items-center">
                    <Link to={slug} className="hover:text-yellow-300">
                        {title}
                    </Link>
                    <div onClick={handleClick} className={`w-0 h-0 border-8 mt-3 ml-1 mx-auto ${false && "invisible"}`} style={{borderColor: "transparent", borderTopColor: "yellow"}}></div>
                </div>
                <Dropdown sub={sub} parentSlug={slug} isActive={dropdownActive} />
            </li>
        </>
    );
}

NavlinkToplevel.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    sub: PropTypes.array.isRequired,
}


export default NavlinkToplevel;
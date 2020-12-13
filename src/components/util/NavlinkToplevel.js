import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from "gatsby";
import Dropdown from './Dropdown';
import useClickOutside from "../../hooks/clickOutside"

const NavlinkToplevel = ({title, slug, sub, className}) => {
    const [dropdownActive, setDropdownActive] = useState(false)
    const handleClick = e => {
        setDropdownActive(!dropdownActive)
    }
    const handleLinkClick = e => {
        setDropdownActive(!dropdownActive)
        !dropdownActive && e.preventDefault()
    }
    const handleClickOutside = e => {
        setDropdownActive(false)
    }
    const handleKeydown = e => {
        if(e.key === "Escape") {
            if(dropdownActive) {
                setDropdownActive(false)
            }
        }
    }
    const handleMouseEnter = () => {
        setDropdownActive(true)
    }
    const handleMouseLeave = () => {
        setDropdownActive(false)
    }

    const domRef = useClickOutside(handleClickOutside)

    return (
        <>
            {/* eslint-disable-next-line */}
            <li ref={domRef} className={"mr-6 last:mr-0 relative " + className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flex items-center">
                    <Link to={slug} onClick={handleLinkClick} className="hover:text-yellow-300">
                        {title}
                    </Link>
                    <div onClick={handleClick} onKeyDown={handleKeydown} role="button" aria-label="menu-button" tabIndex="0" className={`w-0 h-0 border-8 mt-3 ml-1 mx-auto focus:outline-none ${false && "invisible"}`} style={{borderColor: "transparent", borderTopColor: "yellow"}}></div>
                </div>
                <Dropdown sub={sub} parentSlug={slug} parentTitle={title} isActive={dropdownActive} />
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
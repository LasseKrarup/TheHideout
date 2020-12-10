import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = ({children, to, className}) => (
    <Link className={`border border-white rounded-md px-2 py-1 hover:text-yellow-300 hover:border-yellow-300 ${className}`} to={to}>{children}</Link>
)

ButtonLink.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default ButtonLink
import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col bg-black py-4 text-gray-400 text-center">
            <Link to="/" className="text-white">Home</Link>
            <ul className="list-none">
                <li>
                    The Hideout Studio
                </li>
                <li>
                    contact@thehideout.dk
                </li>
                <li>
                    +45 2672 5262
                </li>
                <li>
                    Aalborg, 9000 [DK]
                </li>
                <li>
                    CVR: 35014640
                </li>
            </ul>
            <p className="mt-2">© {new Date().getFullYear()} Design by{` `}<a href="https://www.lassekrarup.com" className="whitespace-nowrap hover:text-white transition-colors duration-100" target="_blank" rel="noreferrer">Lasse Krarup</a></p>
        </footer>
    );
}

export default Footer;
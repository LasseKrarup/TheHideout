import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col bg-black py-4 text-gray-400 text-center">
            <ul className="list-none">
                <li>
                    The HideOut Studio
                </li>
                <li>
                    Aalborg [DK]
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
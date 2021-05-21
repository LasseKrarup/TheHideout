import React, {forwardRef} from 'react';

import { navigation } from "../js/navigation.js"
import { v4 as uuid } from "uuid"
import NavlinkToplevel from './util/NavlinkToplevel.js';
import { Link } from 'gatsby';

const Nav = forwardRef(({className}, ref) => {

    return (
        <nav ref={ref} className={"flex font-heading lowercase " + className}>
            <ul className="flex flex-col md:flex-row text-2xl ml-8 mt-8">
                {navigation.map(item => (
                    <NavlinkToplevel key={uuid()} title={item.title} slug={item.slug} sub={item.sub} />
                ))}
                <li className="mr-6 last:mr-0 relative">
                    <Link to="/about/pricing" className="hover:text-yellow-300">
                        Pricing
                    </Link>
                </li>
            </ul>
        </nav>
    );
})

export default Nav;
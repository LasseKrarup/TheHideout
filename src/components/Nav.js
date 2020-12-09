import React, {forwardRef} from 'react';

import { navigation } from "../js/navigation.js"
import { v4 as uuid } from "uuid"
import NavlinkToplevel from './util/NavlinkToplevel.js';

const Nav = forwardRef((props, ref) => {

    return (
        <nav ref={ref} className="flex font-heading lowercase">
            <ul className="flex flex-col text-2xl ml-8 mt-8">
                {navigation.map(item => (
                    <NavlinkToplevel key={uuid()} title={item.title} slug={item.slug} sub={item.sub} />
                ))}
            </ul>
        </nav>
    );
})

export default Nav;
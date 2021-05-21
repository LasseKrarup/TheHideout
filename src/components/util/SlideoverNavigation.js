import React from 'react';
import {navigation} from "../../js/navigation"
import { v4 as uuid } from "uuid"

import SlideoverNavigationLink from './SlideoverNavigationLink';

const SlideoverNavigation = ({closeSlideover}) => {
    return (
        <ul className={`py-2 w-full top-8 px-2 border-white border rounded-md text-white`}>
            {    
                navigation.map(item => (
                    <SlideoverNavigationLink key={uuid()} link={item} closeSlideover={closeSlideover} />
                ))
            }
            <SlideoverNavigationLink link={{slug: "/about/pricing", title: "Pricing"}} closeSlideover={closeSlideover}></SlideoverNavigationLink>
        </ul>
    );
}

export default SlideoverNavigation;
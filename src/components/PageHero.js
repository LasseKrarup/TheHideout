import React from 'react';

const PageHero = ({title}) => {
    return (
        <div className="w-full h-64 flex flex-col justify-center relative">

            {/* Boxes */}
            <div className="border-t-8 border-l-8 border-white w-16 h-8 absolute top-8 left-8"></div>
            <div className="border-b-8 border-r-8 border-white w-16 h-8 absolute bottom-8 right-8"></div>

            <h2 className="text-2xl text-white text-center font-heading">{title.toLowerCase()}</h2>
        </div>
    );
}

export default PageHero;
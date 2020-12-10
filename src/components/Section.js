import React from 'react';

const Section = ({src, alt, children}) => {
    return(
      <section className="my-4">
        <div className="relative overflow-hidden">
          <div className="relative z-10 text-gray-300 p-4">
            {children}
          </div>
          <div className="relative overflow-hidden h-full">
            <img src={src} alt={alt} className="opacity-75" />
            <div className="bg-gradient-to-b from-black via-transparent to-black absolute inset-0"></div>
          </div>
        </div>
      </section>
    )
  }

export default Section
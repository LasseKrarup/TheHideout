import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTrail, animated, config } from "react-spring"
import {v4 as uuid} from "uuid"

const Subheading = ({title}) => {
    const [ref, inView] = useInView({triggerOnce: true})

    const subheading = title.split(" ")
    const subheaderTrail = useTrail(subheading.length, {
      from: {transform: 90},
      transform: inView ? 0 : 90,
      config: config.slow,
      delay: 250
    })
    return (
        <h3 ref={ref} className="px-8 font-heading text-xl text-white lowercase flex flex-wrap">
        {subheaderTrail.map(({transform}, i) => (
          <animated.span key={uuid()} className="text-white mr-4" style={{transform: transform.to(t => `rotateX(${t}deg)`)}}>{subheading[i]}</animated.span>
        ))}
      </h3>
    );
}

export default Subheading;
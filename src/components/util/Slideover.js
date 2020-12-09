import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, useTransition } from 'react-spring';
import { useMeasure } from "../../hooks/useMeasure"
import { useSwipeable } from "react-swipeable"
import {v4 as uuid} from "uuid"

import { Menu, X } from "../../icons/icons"
import SlideoverNavigation from './SlideoverNavigation';

const Slideover = (props) => {
    const [isVisible, setIsVisible] = useState(false)

    const AnimatedMenu = animated(Menu)
    const AnimatedX = animated(X)

    const swipeHandler = useSwipeable({
        onSwipedRight: e => isVisible && setIsVisible(false)
    })
    const buttonSwipeHandler = useSwipeable({
      onSwipedLeft: e => setIsVisible(true)
    })
  
    
    const rotateTransition = useTransition(isVisible, {
        from: {transform: "rotate(-180deg)", opacity: 0},
        enter: {transform: "rotate(0deg)", opacity: 1},
        leave: {transform: "rotate(0deg)", opacity: 0},
    })

    const [ref, {width}] = useMeasure()
    const {opacity: overlayO} = useSpring({
        from: {opacity: 0},
        opacity: isVisible ? 0.7 : 0,
    })
    const {slideT} = useSpring({
        from: {slideT: 1},
        slideT: isVisible ? 0 : 1
    })

    const handleClick = e => {
        setIsVisible(!isVisible)
    }

    return (
<div className={`fixed inset-0 z-20 overflow-hidden ${!isVisible && "pointer-events-none" }`}>
  <div className="absolute inset-0 overflow-hidden">
      {/* Overlay */}
    <animated.div onClick={handleClick} className="absolute inset-0 bg-gray-500" style={{opacity: overlayO}} aria-hidden="true"></animated.div>
    <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
        {/* Slide over panel */}
      <animated.div className="relative w-screen max-w-md pointer-events-auto transform translate-x-full" style={{transform: slideT.to([0,1], [0,width]).to(t => `translateX(${t}px)`)}}>
        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
          <button {...buttonSwipeHandler} onClick={handleClick} className="rounded-md text-gray-300 hover:text-white focus:outline-none">
            {rotateTransition((style, isVisible) => {
                return isVisible ? <AnimatedX style={style} className={"absolute inset-auto"} key={uuid()} /> : <AnimatedMenu style={style} className={"absolute inset-auto"} key={uuid()} />
            })}
          </button>
        </div>
        <div ref={ref} className="h-full flex flex-col py-6 bg-gray-800 shadow-xl overflow-y-scroll">
          <div className="px-4 sm:px-6">
            <h2 id="slide-over-heading" className="text-lg font-medium text-white">
              {props.title}
            </h2>
          </div>
          <div {...swipeHandler} className="mt-6 relative flex-1 px-4 sm:px-6">
            {/* Content goes here */}
            <SlideoverNavigation />
          </div>
        </div>
      </animated.div>
    </section>
  </div>
</div>
    );
}

Slideover.defaultProps = {
    isVisible: false,
    title: "Menu"
}

Slideover.propTypes = {
    isVisible: PropTypes.bool,
    title: PropTypes.string
}

export default Slideover;
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, useTransition, useChain } from 'react-spring';
import { useMeasure } from "../../hooks/useMeasure"
import { useSwipeable } from "react-swipeable"

import { Menu, X } from "../../icons/icons"
import SlideoverNavigation from './SlideoverNavigation';
import { Link } from 'gatsby';
import Logo from '../atoms/Logo';

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
  
    const buttonVisible = !props.navInView || isVisible
    const springRef = useRef()
    const {opacity: buttonO} = useSpring({from: {opacity: 0}, opacity: buttonVisible ? 1 : 0.3, ref: springRef})

    const transitionRef = useRef()
    const rotateTransition = useTransition(isVisible, {
        from: {transform: "rotate(-180deg)", opacity: 0},
        enter: {transform: "rotate(0deg)", opacity: 1},
        leave: {transform: "rotate(0deg)", opacity: 0},
        ref: transitionRef
    })

    // useChain(isVisible ? [springRef, transitionRef] : [transitionRef, springRef])
    useChain([springRef, transitionRef], [0, 0.1])

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
    const onHomelinkClick = e => {
      setIsVisible(false)
    }
    const closeSlideover = () => setIsVisible(false)

    return (
<div className={`fixed inset-0 z-20 overflow-hidden ${!isVisible && "pointer-events-none" }`}>
  <div className="absolute inset-0 overflow-hidden">
      {/* Overlay */}
    <animated.div onClick={handleClick} className="absolute inset-0 bg-gray-500" style={{opacity: overlayO}} aria-hidden="true"></animated.div>
    <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
        {/* Slide over panel */}
      <animated.div className="relative w-screen max-w-md pointer-events-auto" style={{transform: slideT.to([0,1], [0,width !== undefined ? width : 448]).to(t => `translateX(${t}px)`)}}>
        <div className="absolute top-0 left-0 -ml-8 pt-4 pr-4 flex sm:pr-8">
          <animated.button {...buttonSwipeHandler} onClick={handleClick} className="rounded-md w-6 h-6 ring-2 ring-white text-gray-300 hover:text-white focus:outline-none" style={{opacity: buttonO.to(o=>o)}}>
            {rotateTransition((style, isVisible) => {
                return isVisible ? <AnimatedX style={style} className={"absolute inset-y-4"} /> : <AnimatedMenu style={style} className={"absolute inset-y-4"} />
            })}
          </animated.button>
        </div>
        <div ref={ref} className="h-full flex flex-col py-6 bg-gray-800 shadow-xl overflow-y-scroll">
          <div className="px-4 sm:px-6">
            <h2 id="slide-over-heading" className="text-lg font-medium text-white text-center">
              <Link to="/" onClick={onHomelinkClick} className="text-2xl font-heading tracking-wide lowercase">The <span className="text-yellow-300">HideOut</span> Studio</Link>
            </h2>
            <Link to="/" onClick={onHomelinkClick} className="mx-auto"><Logo className="w-1/2 mx-auto my-4" /></Link>
          </div>
          <div {...swipeHandler} className="mt-6 relative flex-1 px-4 sm:px-6">
            {/* Content goes here */}
            <SlideoverNavigation closeSlideover={closeSlideover} />
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
}

Slideover.propTypes = {
    isVisible: PropTypes.bool,
    title: PropTypes.string
}

export default Slideover;
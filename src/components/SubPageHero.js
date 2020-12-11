import { Link } from 'gatsby';
import React from 'react';
import { animated, useTransition, to } from 'react-spring';

const SubPageHero = ({title}) => {
    // Randomized boxes
    const boxes = [
        Math.round(Math.random()) ? "border-t-8 border-l-8 top-8 left-8" : "border-t-8 border-r-8 top-8 right-8", 
        Math.round(Math.random()) ? "border-b-8 border-r-8 bottom-8 right-8" : "border-b-8 border-l-8 bottom-8 left-8"
    ]
    
    const renderBoxes = useTransition(boxes, {
        from: {translate: 200, opacity: 0, rotate: 90},
        enter: {translate: 0, opacity: 1, rotate: 0},
        config: {
            delay: 500
        }
    })
    return (
        <div className="w-full h-48 flex flex-col justify-center relative">

            {/* Boxes */}
            {renderBoxes(({translate, opacity, rotate}, item, t, i) => (
                <Link to="/"><animated.div className={`border-white w-8 h-8 absolute ${item}`}
                            style={{transform: to([translate, rotate], (trans, rot) => `translate(${i === 0 ? trans : -trans}px) rotate(${rot}deg)`),
                                    opacity: opacity.to(o => o)
                            }}
                /></Link>
            ))}

            <h2 className="text-2xl text-center font-heading text-yellow-300">{title.toLowerCase()}</h2>
        </div>
    );
}

export default SubPageHero;
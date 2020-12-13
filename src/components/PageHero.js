import { Link } from 'gatsby';
import React from 'react';
import { animated, useTransition, to } from 'react-spring';

const PageHero = ({title}) => {
    const boxes = ["border-t-8 border-l-8 top-8 left-8 xl:w-32 xl:h-16 xl:border-l-16 xl:border-t-16", "border-b-8 border-r-8 bottom-8 right-8 xl:w-32 xl:h-16 xl:border-r-16 xl:border-b-16"]
    
    const renderBoxes = useTransition(boxes, {
        from: {translate: 200, opacity: 0, rotate: 90},
        enter: {translate: 0, opacity: 1, rotate: 0},
        config: {
            delay: 500
        }
    })
    return (
        <div className="w-full h-64 flex flex-col justify-center relative">

            {/* Boxes */}
            {renderBoxes(({translate, opacity, rotate}, item, t, i) => (
                <Link to="/"><animated.div className={`border-white w-16 h-8 absolute ${item}`}
                            style={{transform: to([translate, rotate], (trans, rot) => `translate(${i === 0 ? trans : -trans}px) rotate(${rot}deg)`),
                                    opacity: opacity.to(o => o)
                            }}
                /></Link>
            ))}

            <h2 className="text-2xl xl:text-4xl text-center font-heading text-yellow-300">{title.toLowerCase()}</h2>
        </div>
    );
}

export default PageHero;
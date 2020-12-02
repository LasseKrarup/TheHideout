import { useEffect, useRef } from 'react';

const useClickOutside = handler => {
    const domRef = useRef();

    useEffect(() => {
        const internalHandler = event => {
            if(!domRef.current.contains(event.target)) {
                handler();
            }

        }

        document.addEventListener("mousedown", internalHandler);  // return function to be called when unmounted

        return () => {
          document.removeEventListener("mousedown", internalHandler);
        };
      });

    return domRef;
}

export default useClickOutside
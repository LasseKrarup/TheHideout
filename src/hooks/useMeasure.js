import { useRef, useState, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"

export const useMeasure = () => {
    // Ref to be applied to measured element (will be returned by function)
    const ref = useRef();

    // State to save sizes
    const [sizes, setSizes] = useState({
        bottom: undefined,
        height: undefined,
        left: undefined,
        right: undefined,
        top: undefined,
        width: undefined,
        x: undefined,
        y: undefined,
      });

    // Save ResizeObserver in state to make it persist through renders
    const [ro] = useState(
      () =>
        new ResizeObserver(() => {
          if (ref.current) {
            setSizes(ref.current.getBoundingClientRect());
          }
        })
    );

    // Observe/disconnect in LayoutEffect hook
    useLayoutEffect(() => {
      if (ref.current) {
          // Set initial size when we start observing
        setSizes(ref.current.getBoundingClientRect());

        // Observe ref.current
        ro.observe(ref.current, {});
      }

      // Cleanup on unmount
      return () => ro.disconnect();
    },[ro]);

    return [ref, sizes];
}

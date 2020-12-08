import { useCallback, useState } from "react"

export const useMeasure = () => {
    const [sizes, setSizes] = useState({
        bottom: undefined,
        height: undefined,
        left: undefined,
        right: undefined,
        top: undefined,
        width: undefined,
        x: undefined,
        y: undefined,
      })

    const ref = useCallback( domNode => {
        if (domNode !== null) {
            setSizes(domNode.getBoundingClientRect())
        }
    }, [domNode])

    return [ref, sizes]
}
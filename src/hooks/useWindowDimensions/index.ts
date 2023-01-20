import {useCallback, useEffect, useState} from 'react'


export default function useWindowDimensions(): {width: number} {

    const [width, setWidth] = useState<number>(0)

    const resizeHandler = useCallback((event: any) => {
        setWidth(event.target.innerWidth)
    }, [setWidth])

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener('resize', resizeHandler)
    }, [resizeHandler])

    return {width}
}

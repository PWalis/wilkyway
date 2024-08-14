import react, { PropsWithChildren, useRef } from 'react';
import {motion, useScroll, useTransform, MotionValue} from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

export const SnapContainer: React.FC<PropsWithChildren> = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    const y = useParallax(scrollYProgress, 300)
    return (
        <div ref={ref}>

        </div>
    )
}
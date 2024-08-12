'use client'
import react, { PropsWithChildren, useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion'

export const SolutionContainer: React.FC<PropsWithChildren> = ({ children }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end center", "center start"] })
    const opacity = useTransform(scrollYProgress, [0,1], ["1","0"])
    return (
        <motion.div style={{opacity: opacity}} ref={ref} className='max-w-[35.75rem]'>{children}</motion.div>
    )
}
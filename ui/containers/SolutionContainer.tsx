'use client'
import react, { PropsWithChildren, useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion'

export const SolutionContainer: React.FC<PropsWithChildren> = ({ children }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["center end", "end start"] })
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], ["0","1","0"])
    return (
        <motion.div style={{opacity: opacity}} ref={ref} className='max-w-[20rem] lg:max-w-[38rem] overflow-hidden'>{children}</motion.div>
    )
}
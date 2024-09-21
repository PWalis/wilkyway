'use client'
import react, { PropsWithChildren, useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion'
import useWindowDimensions from '@/lib/UseWindowDimensions';

export const ProcessContainer: React.FC<PropsWithChildren & { id: string }> = ({ children, id }) => {
    const {width} = useWindowDimensions()
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], ["0","1","0"])
    return (
        <motion.div id={`${id}`} style={{opacity: width > 640 ? opacity : 1}} ref={ref} className='max-w-[30rem] lg:max-w-[38rem]'>{children}</motion.div>
    )
}
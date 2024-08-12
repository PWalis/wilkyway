import react, { PropsWithChildren } from 'react'

export const TestimonialContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='w-[28.6rem] h-[36.4rem] rounded-tr-[60px] bg-storm-gray p-14'>{children}</div>
    )
}
import react, { PropsWithChildren } from 'react'

export const TestimonialContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='max-w-[28.6rem] min-h-[36.4rem] rounded-tr-[60px] bg-storm-gray py-10 px-5 lg:p-14'>{children}</div>
    )
}
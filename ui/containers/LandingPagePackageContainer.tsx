import react, { PropsWithChildren } from 'react';

export const LandingPagePackageContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='w-[17rem] h-[19.5rem] bg-storm-gray py-10 px-5 flex flex-col items-center gap-3'>{children}</div>
    )
}
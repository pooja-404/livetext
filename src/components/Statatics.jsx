import React from 'react'
import { StatsData } from './common/Helper';

function Statistics() {
    const data = StatsData.map((statsdata, index) => (
        <div className='lg:w-4/12 sm:w-1/2 mt-7 lg:mt-0  px-3 w-full mx-auto' key={index}>
            <div class="h-[270px] w-[270px] rounded-full bg-circlegradient p-[8px] mx-auto">
                <div class="flex h-full w-full items-center justify-center rounded-full bg-[#17151A]">
                    <h2 className='font-bold text-white text-lg leading-107 text-center'>{statsdata.head}</h2>
                </div>
            </div>
            <p className='text-white font-semibold text-xxl leading-46 text-center md:max-w-[230px] mx-auto pt-9'>{statsdata.para}</p>
        </div>
    ));
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto lg:py-24 py-10'>
                <h2 className='font-bold  lg:text-md text-xxl  text-center leading-60 text-white'>Statistics For Today</h2>
                <div className='flex flex-row flex-wrap -mx-3 justify-center lg:mt-24 md:pt-12 pt-10'>
                    {data}
                </div>

            </div>
        </>
    )
}
export default Statistics


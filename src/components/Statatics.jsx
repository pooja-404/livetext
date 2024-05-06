import React from 'react'
import { StatsData } from './common/Helper';

function Statistics() {
    const data = StatsData.map((statsdata, index) => (
        <div className='md:w-4/12 px-3 w-full text-center '>
            {/* <div className='w-[270px] h-[270px] rounded-full'>
                <h2 className='font-bold text-white text-lg leading-107'>{statsdata.head}</h2>
            </div> */}

            <div className=' mt-5 bg-bordergradient p-[1px] pl-[0.5px] w-[270px] h-[270px] rounded-full border-8 mx-auto bg-transparent ' key={index}>
                <div className=" px-5  lg:max-w-[270px] pt-4 pb-6  rounded-full flex justify-center">
                    <div className='w-[270px] h-[270px] rounded-full flex items-center justify-center '>
                        <h2 className='font-bold text-white text-lg leading-107 text-center '>{statsdata.head}</h2>
                    </div>
                </div>
            </div>

            <p className='text-white font-semibold text-xxl leading-46 text-center'>{ statsdata.para}</p>
        </div>
    ));
    return (
        <div>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <h2 className='font-bold  text-md text-center leading-60 text-white'>Statistics For Today</h2>
                <div className='flex flex-row flex-wrap -mx-3 justify-center lg:mt-24 md:pt-16 pt-10'>
                        {data}
                </div>

            </div>
        </div>
    )
}
export default Statistics


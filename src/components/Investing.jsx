import React from 'react'
import { stockdata } from './common/Helper';
import phone from '../assets/images/phone.png'

function Investing() {
    const data = stockdata.map((stockdata, index) => (

        // <div className=' border bg-bordergradient pl-[-15px] rounded-2xl w-full max-w-[558px]  h-[252px] ' key={index}>
        //     <div className=" max-w-[558px] h-[252px] rounded-2xl bg-[#FFFFFF0D] p-5 ">
        //         {stockdata.svg}
        //         <h2 className='font-bold text-2xl leading-[30px] text-white pt-4'>{stockdata.head}</h2>
        //         <p className='font-normal text-base leading-6 text-offgray max-w-[499px] pt-3'>{stockdata.para}</p>
        //     </div>
        // </div>
        <div className=' mt-5 bg-bordergradient p-[1px] pl-[0.5px]  lg:max-w-[558px]  rounded-2xl bg-[#FFFFFF0D] mx-au to' key={index}>
            <div className=" px-5 bg-[#242224] lg:max-w-[558px] pt-4 pb-6  rounded-2xl">
                {stockdata.svg}
                <h2 className='font-bold text-2xl leading-[30px] text-white pt-3'>{stockdata.head}</h2>
                <p className='font-normal text-base leading-6 text-offgray max-w-[499px] pt-2'>{stockdata.para}</p>
            </div>
        </div>
    ));
    return (
        <div>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <h2 className='font-bold  text-md text-center leading-60 text-white'>How to Benefit By Investing In <span className='lg:block'>AI Stocks For High Returns</span></h2>
                <p className='font-normal text-base text-center leading-6 text-offgray lg:pt-5 pt-3'>Major AI Stocks such as Microsoft and Nvidia have surged over 80% in <span className='lg:block'>the past year. This giants are expected to grow 130.66% in 2024</span></p>
                <div className='flex flex-row flex-wrap -mx-3 justify-center lg:mt-24 md:pt-16 pt-10'>
                    <div className='md:w-7/12 px-3 w-full '>
                        {data}
                    </div>
                    <div className='md:w-5/12 px-3 w-full pt-7 lg:pt-0'>
                        <img src={phone} alt="phone" className='lg:h-[1015px] w-full h-full mx-auto' />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Investing


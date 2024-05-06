
// import { stockCardItems } from './common/Helper'
// import Stocks from './Stocks'

// const StocksData = () => {
//     return (
//         <div  className='py-10 lg:pt-24 lg:pb-20 md:py-16'>
//             <div className='max-w-[1140px] px-3 mx-auto'>
//                 <h2 className='font-bold  text-md text-center leading-60 text-white'>Top 7 AI Stocks </h2>
//                 <div className='flex flex-row flex-wrap   -mx-3 '>
//                     {stockCardItems.map((p) => <Stocks key={p.id} head={p.heading} para={p.paragraph} width={p.width} svg={p.svges} className='mt-5'  />)}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default StocksData
import React from 'react'
import { AiSvg1, AiSvg2, AiSvg3 } from './common/Icons'
function StocksData() {
    return (
        <div className='relative bg-circ legradient pt-[2px] rounded-sm  ' >
            <div className='bg-[#17151A] rounded-sm '>
                <div className='max-w-[1140px] px-3 mx-auto my-24 bg-[#17151A] rounded-sm '>
                    <div className='flex flex-row flex-wrap -mx-3'>
                        <div className='lg:w-7/12 px-3 my-auto max-lg:text-center lg:pt-40 pt-10 '>
                            <h2 className='font-bold  lg:text-xxl text-xl  lg:leading-48 text-white lg:max-w-[362px]'>Nvidia - AI GPU1 year 228% Growth </h2>
                            <p className='font-normal text-base  leading-6 text-offgray lg:max-w-[557px]'>NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors. </p>

                        </div>
                        <div className='lg:w-5/12 px-3  max-lg:text-center max-lg:mx-auto  lg:pt-40 pt-10'>
                            <div class=" sm:w-[400px]  sm:h-[400px]  rounded-full sm:bg-circlegradient sm:pt-[2px] sm:pb-[402px] sm:pl-[2px] sm:pr-[402px] mx-auto">
                                <div className=' max-[385px]:w-[280px] max-[385px]:h-[280px] w-[400px] h-[400px]  rounded-full bg-[#2e2238] flex justify-center items-center  '>
                                    <AiSvg1 />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-5/12 px-3 my-auto lg:pl-9 max-lg:text-center lg:hidden block  lg:pt-40 pt-10'>
                            <h2 className='font-bold  lg:text-xxl text-xl  lg:leading-48 text-white lg:max-w-[362px]'>Microsoft - Co-pilot
                                1 year 64% Growth  </h2>
                            <p className='font-normal text-base  leading-6 text-offgray lg:max-w-[557px]'>Microsoft A tech giant with diverse solutions for investors, including Azure cloud services. With market dominance in software, cloud, and hardware, Microsoft shows strong growth potential. Its leadership in enterprise software, Azure cloud computing, and innovation make it an attractive investment.</p>
                        </div>
                        <div className='lg:w-5/12 px-3 my-auto  max-lg:text-center max-lg:mx-auto lg:pt-40 pt-10'>
                            <div class=" sm:w-[400px]  sm:h-[400px]  rounded-full sm:bg-circlegradient sm:pt-[2px] sm:pb-[402px] sm:pl-[2px] sm:pr-[402px] mx-auto">
                                <div className=' max-[385px]:w-[280px] max-[385px]:h-[280px] w-[400px] h-[400px]  rounded-full bg-[#2e2238] flex justify-center items-center  '>
                                    <AiSvg2 />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-7/12 px-3 my-auto lg:pl-9 max-lg:text-center lg:block hidden lg:pt-40 pt-10  '>
                            <h2 className='font-bold  lg:text-xxl text-xl  lg:leading-48 text-white lg:max-w-[362px]'>Microsoft - Co-pilot
                                1 year 64% Growth  </h2>
                            <p className='font-normal text-base  leading-6 text-offgray lg:max-w-[557px]'>Microsoft A tech giant with diverse solutions for investors, including Azure cloud services. With market dominance in software, cloud, and hardware, Microsoft shows strong growth potential. Its leadership in enterprise software, Azure cloud computing, and innovation make it an attractive investment.</p>

                        </div>
                        <div className='lg:w-7/12 px-3 my-auto max-lg:text-center lg:pt-40 pt-10 '>
                            <h2 className='font-bold  lg:text-xxl text-xl   lg:leading-48 text-white lg:max-w-[362px]'>Amazon AWS - AI
                                1 year 69% Growth </h2>
                            <p className='font-normal text-base  leading-6 text-offgray lg:max-w-[557px]'>Microsoft A tech giant with diverse solutions for investors, including Azure cloud services. With market dominance in software, cloud, and hardware, Microsoft shows strong growth potential. Its leadership in enterprise software, Azure cloud computing, and innovation make it an attractive investment. </p>
                        </div>
                        <div className='lg:w-5/12 px-3 my-auto lg:pl-9 max-lg:mx-auto lg:pt-40 pt-10 '>
                            <div class=" sm:w-[400px]  sm:h-[400px]  rounded-full sm:bg-circlegradient sm:pt-[2px] sm:pb-[402px] sm:pl-[2px] sm:pr-[402px] mx-auto">
                                <div className=' max-[385px]:w-[280px] max-[385px]:h-[280px] w-[400px] h-[400px]  rounded-full bg-[#2e2238] flex justify-center items-center  '>
                                    <AiSvg3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className='bg-secbgagient absolute top-0 w-full'></div>
            </div>
        </div>
    )
}
export default StocksData

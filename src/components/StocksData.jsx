
import { stockCardItems } from './common/Helper'
import Stocks from './Stocks'

const StocksData = () => {
    return (
        <div  className='py-10 lg:pt-24 lg:pb-20 md:py-16'>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <h2 className='font-bold  text-md text-center leading-60 text-white'>Top 7 AI Stocks </h2>
                <div className='flex flex-row flex-wrap   -mx-3 '>
                    {stockCardItems.map((p) => <Stocks key={p.id} head={p.heading} para={p.paragraph} width={p.width} svg={p.svges} className='mt-5'  />)}
                </div>
            </div>
        </div>
    )
}
export default StocksData

function Stocks(props) {
    const { width } = props;
    return (
        <div id="Services" className={` px-2 lg:pt-0 lg:px-0  ${width}`}>
            {props.svg}
            <p className='font-bold  text-xxl  leading-48 text-white max-w-[362px] '>{props.head}</p>
            <p className='font-normal text-base  leading-6 text-offgray'>{props.para}</p>

        </div >
    )
}

export default Stocks
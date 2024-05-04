import React from 'react'
import { ArrowForward } from '@mui/icons-material';

const Bcard = ({ product }) => {
    
    return (

        <div className='flex flex-col  md:flex-row-reverse bg-[#f6f5e8] mb-7'>
            <div className=' md:w-1/2 w-full'>
                <img src={product.img} alt='' className='w-full' />
            </div>
            <div className='md:w-1/2 w-full h-[44rem] px-4 md:pl-56 md:pr-24 font-[ Suisse Regular, sans-serif]'>
                <div className='pt-8 md:pt-[123px] pb-12  md:pb-[180px] '>
                    <header>
                        <h3 className=' mb-5  font-[ Suisse, sans-serif] text-sm md:text-base font-medium '>
                            {product.subtitle}
                        </h3>
                        <h2 className=' texl-xl lg:text-[33px] md:text-[1.625rem] text-[#333] font-[ Suisse Regular, sans-serif] mb-[21px] leading-[1.33]'>
                            {product.title}
                        </h2>
                    </header>
                    <div>
                        <div className='mb-[30px] text-base leading-relaxed'>
                            <p className=' font-normal text-base leading-[1.7] font-[Suisse, sans-serif]'>
                                {product.quote}
                            </p>
                        </div>
                    </div>
                    <div className=' w-full md:w-[21rem]'>
                        <a className=' flex items-center justify-between font-medium cursor-pointer hover:bg-[#333] hover:text-white border border-[#33333326] px-[21px] py-[23px] transition-all duration-200 ease-in-out' style={{ transition: "all .2s cubic-bezier(.645,.045,.355,1)" }}>
                           {product.tag}
                            <ArrowForward />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bcard
import React from 'react'
import { ArrowForward } from '@mui/icons-material';

const Thirdsec = () => {
    return (
        <>
            <section className=' h-full w-full mt-52'>
                <div className=' grid lg:flex'>
                    <aside className=' w-[23rem] lg:w-[97rem] px-5 lg:pl-[86px] mb-[30px]'>
                        <article className='grid '>
                            <header className='grid gap-8'>
                                <h3 className=' text-[15px] font-medium leading-[1.7]'>A seasonal offer</h3>
                                <h2 className= ' text-[22px] font-medium lg:text-[1.875rem] mb-8'>Experience Karst Eau de Parfum</h2>
                            </header>
                            <div>
                                <p className=' font-medium text-[15px] leading-[1.6]  '>
                                    In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.)
                                </p>
                            </div>
                            <div className=' mt-8'>
                                <a className=' text-[.875rem] flex font-bold lg:font-medium cursor-pointer hover:bg-[#333] hover:text-white border border-[#33333326] px-[21px] py-[23px]  justify-between' style={{ transition: "all .2s cubic-bezier(.645,.045,.355,1)" }}>
                                    Explore summer formulations
                                    <ArrowForward />
                                </a>
                            </div>
                        </article>
                    </aside>
                    <div className=' lg:w-[198rem] w-[28rem] pl-5 md:pl-28 lg:pl-28'>
                        <img className=' lg:w-full  lg:h-full h-[299px] object-cover ' src='https://www.aesop.com/u1nb1km7t5q7/3UWzrNrjTbNjBomL9WkVaS/4aa0066ec853b88cfc0bd209174785c2/Aesop_Travel_2023_Web_Landing_Page_2_Secondary_Mid_Desktop_2560x1440px.jpg' alt='' />
                    </div>
                </div>
            </section>

            <section className=' pt-20 md:pt-[100%] lg:pt-[177px]'>
                <div className='flex flex-col-reverse lg:flex-row-reverse'>
                    <aside className=' lg:w-[97rem] px-5 lg:pr-[86px] mt-[30px]'>
                        <article className='grid '>
                            <header className='grid gap-4 lg:gap-8'>
                                <h3 className=' text-[15px] font-medium leading-[1.7] '>Options, streamlined</h3>
                                <h2 className='text-[22px] font-medium lg:text-[1.875rem] mb-8'>The Gift Finder</h2>
                            </header>
                            <div>
                                <p className=' font-medium text-[15px] leading-[1.6] lg:text-lg lg:leading-[1.7]'>
                                This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria.
                                </p>
                            </div>
                            <div className=' mt-8'>
                                <a className=' flex text-[.875rem] font-bold lg:font-medium cursor-pointer hover:bg-[#333] hover:text-white border border-[#33333326] px-[21px] py-[23px]  justify-between' style={{ transition: "all .2s cubic-bezier(.645,.045,.355,1)" }}>
                                Discover the Gift Finder
                                    <ArrowForward />
                                </a>
                            </div>
                        </article>
                    </aside>
                    <div className='lg:w-[198rem] w-auto pr-5 lg:pr-28 '>
                        <img className=' lg:w-full  lg:h-full h-[299px] object-cover object-right ' src='https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg' alt='' />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Thirdsec
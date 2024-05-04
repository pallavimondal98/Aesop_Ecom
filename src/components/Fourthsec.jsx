import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowForward, ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import './Ccard.css'

// import required modules
import { Scrollbar, Navigation } from 'swiper/modules';

const Fourthsec = () => {

    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    return (
        <>
            <section className=' h-full w-full mt-52'>
                <div className=' grid lg:flex'>
                    <aside className='  w-96 lg:w-[97rem] px-5 lg:pl-[86px] mb-[30px]'>
                        <article className='grid '>
                            <header className='grid gap-8'>
                                <h3 className=' text-[15px] font-medium leading-[1.7]'>High time for high coverage</h3>
                                <h2 className='text-[22px] font-medium lg:text-[1.875rem] mb-8'>Protective Facial Lotion SPF50 </h2>
                            </header>
                            <div>
                                <p className=' font-medium text-[15px] leading-[1.6]  '>
                                    Introducing a daily-use formulation offering broad-spectrum UV protection and sustained hydration—come rain or shine.
                                </p>
                            </div>
                            <div className=' mt-8'>
                                <a className=' text-[.875rem] flex font-bold lg:font-medium cursor-pointer hover:bg-[#333] hover:text-white border border-[#33333326] px-[21px] py-[23px]  justify-between' style={{ transition: "all .2s cubic-bezier(.645,.045,.355,1)" }}>
                                    Discover Protective Facial Lotion SPF50
                                    <ArrowForward />
                                </a>
                            </div>
                        </article>
                    </aside>
                    <div className=' lg:w-[198rem] w-auto  pl-5 lg:pl-28'>
                        <img className='lg:w-full  lg:h-full h-[299px] object-cover object-right ' src='https://www.aesop.com/u1nb1km7t5q7/6fNN0BAQNyzP9A9eOwmcaE/cb660d194f4078aa1e4e09b2da3983d5/Aesop_SPF50_2023_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg' alt='' />
                    </div>
                </div>
            </section>

            <section className=' pt-20 md:pt-[100%] lg:pt-[150px] cursor-pointer'>
                <div className=' pt-2 '>
                    <div className=' hidden lg:block'>
                        <Swiper
                            scrollbar={true}
                            slidesPerView={3}
                            onReachBeginning={() => setShowPrevButton(false)}

                            onReachEnd={() => setShowNextButton(false)}

                            onSlideChange={(swiper) => {
                                setShowPrevButton(!swiper.isBeginning);
                                console.log("prev:", setShowPrevButton);
                                setShowNextButton(!swiper.isEnd);
                                console.log("next:", setShowNextButton);
                            }}
                            navigation={{
                                nextEl: '.button-next-slide',
                                prevEl: '.button-prev-slide'
                            }}
                            modules={[Scrollbar, Navigation]}
                            className="mySwiper relative group"
                        >
                            <div className='swiper-wrapper'>
                                <SwiperSlide className='w-[391px] h-[31rem] mb-24 ml-20' sx={{ width: "391px" }}>
                                    <div className=' grid gap-5'>
                                        <header className=' gap-3 grid'>
                                            <h2>Sun Care and SPF</h2>
                                            <h3 className=' text-[1.875rem]'>Pair time in the sun with intelligent care</h3>
                                        </header>
                                        <div className='grid gap-4 h-[15rem]'>
                                            <div>
                                                <p className='text-[17px] font-normal leading-[1.7]'>Daily protection from damaging UVA and UVB sun rays is key to sustaining healthy, supple skin. In addition to protection, Aesop SPF formulations deliver hydration and skin-softening nourishment.
                                                </p>
                                            </div>
                                            <div>
                                                <a>Browse formulations <ArrowForward /></a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                    <div className='text-[#333]'>
                                        <a className='flex  flex-col-reverse h-full items-center'>
                                            <div className='flex flex-col justify-center items-center gap-3'>
                                                <h5 className=' font-bold text-[.875rem]'>Protective Facial Lotion SPF50</h5>
                                                <div>Offers protection from UVA and UVB rays </div>
                                            </div>
                                            <div className='flex h-[380px] lg:h-[435px]'>
                                                <img className='' src='https://www.aesop.com/u1nb1km7t5q7/7L3YKrc4RiwBlGCmIs6W6U/9274d84adce052caa7715ca62701c103/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_Large_900x916px.png' alt='' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                    <div className='text-[#333] '>
                                        <a className='flex flex-col h-full items-center'>
                                            <div className=' flex h-[380px] lg:h-[435px]'>
                                                <img className='' src='https://www.aesop.com/u1nb1km7t5q7/7rQwKlCTwpQ5vNOQBwg7KA/8c79ad1019aa5dfe09583f5a02c77701/Aesop_Skin_Protective_Facial_Lotion_SPF25_Asia_EU_Web_Large_782x796px.png' alt='' />
                                            </div>
                                            <div className='flex flex-col justify-center items-center gap-3'>
                                                <h5 className=' font-bold text-[.875rem]'>Protective Facial Lotion SPF25 </h5>
                                                <div>Broad-spectrum protection and hydration</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                    <div className='text-[#333]'>
                                        <a className='flex  flex-col-reverse h-full items-center'>
                                            <div className='flex flex-col justify-center items-center gap-3'>
                                                <h5 className=' font-bold text-[.875rem]'>Protective Body Lotion SPF50</h5>
                                                <div>Lightweight broad-spectrum protection</div>
                                            </div>
                                            <div className='flex h-[380px] lg:h-[435px]'>
                                                <img className='' src='https://www.aesop.com/u1nb1km7t5q7/WwwkgxzPJKjuFkMuYX9im/41fe8869aed9a94583ecc1f7ba369ad3/Aesop_Body_Protective_Body_Lotion_SPF50_Asia_EU_150mL_Web_Front_Large_900x1037px.png' alt='' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                    <div className='text-[#333]'>
                                        <a className='flex  flex-col-reverse h-full items-center'>
                                            <div className='flex flex-col justify-center items-center gap-3'>
                                                <h5 className=' font-bold text-[.875rem]'>Sage & Zinc Facial Hydrating Lotion SPF15 </h5>
                                                <div>Hydrating sun protection</div>
                                            </div>
                                            <div className='flex h-[380px] lg:h-[435px]'>
                                                <img className='mt-[41.392px] mb-0 ml-0 mr-0' src='https://images.ctfassets.net/u1nb1km7t5q7/b9vCmPWUXPXl7GEJfGQnT/136684eae4641f2d5e278fe91fa87075/Aesop_Skin_Sage_and_Zinc_Facial_Hydrating_Lotion_SPF15_50mL_Web_Large_782x796px.png' alt='' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                    <div className='text-[#333] '>
                                        <a className='flex flex-col h-full items-center'>
                                            <div className=' flex h-[380px] lg:h-[435px]'>
                                                <img className='' src='https://www.aesop.com/u1nb1km7t5q7/gkTD6WNjUvHKpj2MUjiyB/2ef25158ce59def7a3823422749a2ddc/Aesop_Body_Petitgrain_Reviving_Body_Gel_150mL_Web_Front_Large_900x1037px.png' alt='' />
                                            </div>
                                            <div className='flex flex-col justify-center items-center gap-3'>
                                                <h5 className=' font-bold text-[.875rem]'>Petitgrain Reviving Body Gel</h5>
                                                <div>Leaves skin feeling cooled, revived</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            </div>

                            {showPrevButton && (
                                <div className='z-10 absolute top-[50%] button-prev-slide group-hover:left-0 -left-[23rem] duration-500 w-[80px] h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                                    <ArrowBackIos />
                                </div>
                            )}
                            {showNextButton && (
                                <div className='z-10 absolute top-[50%] button-next-slide group-hover:right-0 -right-[23rem] duration-500 w-[80px] h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                                    <ArrowForwardIos />
                                </div>
                            )}
                        </Swiper>
                    </div>

                    <div className=' block lg:hidden'>
                        <aside className=' mx-5 mb-[60px]'>
                            <div className=' grid gap-5'>
                                <header className=' gap-3 grid'>
                                    <h2>Sun Care and SPF</h2>
                                    <h3 className=' text-[1.875rem]'>Pair time in the sun with intelligent care</h3>
                                </header>
                                <div className='grid gap-4 h-[15rem]'>
                                    <div>
                                        <p className='text-[17px] font-normal leading-[1.7]'>Daily protection from damaging UVA and UVB sun rays is key to sustaining healthy, supple skin. In addition to protection, Aesop SPF formulations deliver hydration and skin-softening nourishment.
                                        </p>
                                    </div>
                                    <div>
                                        <a>Browse formulations <ArrowForward /></a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <Swiper
                            scrollbar={true}
                            slidesPerView={1}
                            // onReachBeginning={() => setShowPrevButton(false)}

                            // onReachEnd={() => setShowNextButton(false)}

                            // onSlideChange={(swiper) => {
                            //     setShowPrevButton(!swiper.isBeginning);
                            //     console.log("prev:", setShowPrevButton);
                            //     setShowNextButton(!swiper.isEnd);
                            //     console.log("next:", setShowNextButton);
                            // }}
                            navigation={{
                                nextEl: '.button-next-slide',
                                prevEl: '.button-prev-slide'
                            }}
                            modules={[Scrollbar, Navigation]}
                            className="mySwiper relative group"
                        >
                            <SwiperSlide className='w-[391px] mb-9' sx={{ width: "391px" }}>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Protective Facial Lotion SPF50</h5>
                                            <div>Offers protection from UVA and UVB rays </div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img className='' src='https://www.aesop.com/u1nb1km7t5q7/7L3YKrc4RiwBlGCmIs6W6U/9274d84adce052caa7715ca62701c103/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_Large_900x916px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                <div className='text-[#333] '>
                                    <a className='flex flex-col h-full items-center'>
                                        <div className=' flex h-[380px] lg:h-[435px]'>
                                            <img className='' src='https://www.aesop.com/u1nb1km7t5q7/7rQwKlCTwpQ5vNOQBwg7KA/8c79ad1019aa5dfe09583f5a02c77701/Aesop_Skin_Protective_Facial_Lotion_SPF25_Asia_EU_Web_Large_782x796px.png' alt='' />
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Protective Facial Lotion SPF25 </h5>
                                            <div>Broad-spectrum protection and hydration</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Protective Body Lotion SPF50</h5>
                                            <div>Lightweight broad-spectrum protection</div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img className='' src='https://www.aesop.com/u1nb1km7t5q7/WwwkgxzPJKjuFkMuYX9im/41fe8869aed9a94583ecc1f7ba369ad3/Aesop_Body_Protective_Body_Lotion_SPF50_Asia_EU_150mL_Web_Front_Large_900x1037px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Sage & Zinc Facial Hydrating Lotion SPF15 </h5>
                                            <div>Hydrating sun protection</div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img className='mt-[41.392px] mb-0 ml-0 mr-0' src='https://images.ctfassets.net/u1nb1km7t5q7/b9vCmPWUXPXl7GEJfGQnT/136684eae4641f2d5e278fe91fa87075/Aesop_Skin_Sage_and_Zinc_Facial_Hydrating_Lotion_SPF15_50mL_Web_Large_782x796px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                                <div className='text-[#333] '>
                                    <a className='flex flex-col h-full items-center'>
                                        <div className=' flex h-[380px] lg:h-[435px]'>
                                            <img className='' src='https://www.aesop.com/u1nb1km7t5q7/gkTD6WNjUvHKpj2MUjiyB/2ef25158ce59def7a3823422749a2ddc/Aesop_Body_Petitgrain_Reviving_Body_Gel_150mL_Web_Front_Large_900x1037px.png' alt='' />
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Petitgrain Reviving Body Gel</h5>
                                            <div>Leaves skin feeling cooled, revived</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <div className='z-10 absolute top-[33%]  lg:top-[50%] button-prev-slide left-0 duration-500 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                                <ArrowBackIos />
                            </div>
                            <div className='z-10 absolute top-[33%] lg:top-[50%]  button-next-slide right-0 duration-500 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                                <ArrowForwardIos />
                            </div>
                        </Swiper>


                    </div>
                </div>

            </section>
        </>
    )
}

export default Fourthsec
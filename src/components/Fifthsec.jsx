// import React from 'react'
import { ArrowForwardIos, ArrowBackIos, ArrowForward } from '@mui/icons-material';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Scrollbar, Navigation } from 'swiper/modules';

const Fifthsec = () => {
    return (
        <>
            <section className=' h-full w-full mt-52'>
                <div className='flex flex-col-reverse lg:flex-row-reverse '>
                    <aside className=' w-96 lg:w-[97rem] px-5 lg:pr-[86px] mt-[30px] '>
                        <article className='grid '>
                            <header className='grid gap-4 lg:gap-8'>
                                <h3 className=' text-[15px] font-medium leading-[1.7]'>Facial Appointments</h3>
                                <h2 className='text-[22px] font-medium lg:text-[1.875rem] mb-8'>Composure for the skin and senses</h2>
                            </header>
                            <div>
                                <p className='font-medium text-[15px] lg:text-[16px] leading-[1.6]'>
                                    For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.
                                </p>
                            </div>
                            <div className=' mt-8'>
                                <a className=' text-[.875rem] flex font-bold lg:font-medium cursor-pointer hover:bg-[#333] hover:text-white border border-[#33333326] px-[21px] py-[23px]  justify-between' style={{ transition: "all .2s cubic-bezier(.645,.045,.355,1)" }}>
                                    Learn More
                                    <ArrowForward />
                                </a>
                            </div>
                        </article>
                    </aside>
                    <div className=' lg:w-[198rem] w-auto pr-5 lg:pr-28'>
                        <img className='lg:w-full  lg:h-full h-[299px] object-cover object-right ' src='https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg' alt='' />
                    </div>
                </div>
            </section>

            <section className=' pt-20 md:pt-[100%] lg:pt-[177px]'>
                <div className=' grid lg:flex  '>
                    <aside className=' w-96 lg:w-[97rem] px-5 lg:pl-[86px] mb-[30px]'>
                        <article className='grid '>
                            <header className='grid gap-8'>
                                <h2 className='text-[1.875rem] mb-8'>Store locator</h2>
                            </header>
                            <div>
                                <p className=' text-lg leading-[1.7] w-96'>
                                    Our consultants are available to host you in-store and provide tailored guidance on gift purchases.
                                </p>
                            </div>
                            <div className=' mt-8'>
                                <a className=' flex w-[349px] font-medium text-[14px] flex-auto cursor-pointer hover:bg-[#333] hover:text-white border border-[#33333326] px-[21px] py-[23px]  justify-between' style={{ transition: "all .2s cubic-bezier(.645,.045,.355,1)" }}>
                                    Find a nearby store
                                    <ArrowForward />
                                </a>
                            </div>
                        </article>
                    </aside>
                    <div className=' w-[25rem] lg:w-[53rem] pl-5 lg:pl-28'>
                        <Swiper
                            navigation={{
                                nextEl: '.button-next-slide',
                                prevEl: '.button-prev-slide'
                            }}
                            loop={true}
                            scrollbar={true}
                            modules={[Scrollbar, Navigation]}
                            className="mySwiper relative group"
                            slidesPerView={1}
                        >
                            <SwiperSlide className=' mb-16 '>
                                <img className='w-[370px] lg:w-full h-[370px] lg:h-full object-cover ' src='https://www.aesop.com/u1nb1km7t5q7/3zcvjyxtts2FpeU5DHqO93/d075d2ac71f0a36fe38fce6fd2fb8155/Aesop_Hollywood_Road_II_Hero_Bleed_Desktop_2880x1620px.jpg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='w-[370px] lg:w-full h-[370px] lg:h-full object-cover ' src='https://www.aesop.com/u1nb1km7t5q7/smo9jFDCxanZL9fgDNpek/cc6a6a583ca0035cc39dc45ef792aaa7/Aesop_MO_Stores_DFS_Macau_Four_Seasons_Hero_Bleed_Desktop_2880x1620px.jpg' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='w-[370px] lg:w-full h-[370px] lg:h-full object-cover ' src='https://www.aesop.com/u1nb1km7t5q7/3qMKbyDUTGRWyBlMLWxsRu/24c4cbb32427080bbb48dca6d5161962/Aesop_Fashion_Walk_II_Hero_Bleed_Desktop_2880x1620px.jpg' alt='' />
                            </SwiperSlide>

                            <div className='z-10 absolute top-[33%] lg:top-[50%]  button-prev-slide left-0 lg:group-hover:left-0 lg:-left-[23rem] duration-500 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                                <ArrowBackIos />
                            </div>
                            <div className='z-10 absolute top-[33%] lg:top-[50%]  button-next-slide right-[10px] lg:group-hover:right-0 lg:-right-[23rem] duration-500 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                                <ArrowForwardIos />
                            </div>
                        </Swiper>
                        <h3 className=' mt-10 mb-3'>Aesop Fashion Walk</h3>
                    </div>
                </div>
            </section>

            <section className=' mt-20 md:mt-[100px] lg:mt-[150px]'>
                <div>
                    <div className='flex flex-col-reverse items-center lg:flex-row-reverse content-center'>
                        <div className=' pl-5 lg:pl-[8.3333333333%] pr-5 lg:pr-[16.6666666667%] '>
                            <article>
                                <header>
                                    <h2 className=' text-[#333] text-2xl lg:text-[1.875rem] leading-[1.33] mb-8'>Eminently suited to all</h2>
                                </header>
                                <div className=' text-[#333] text-base'>
                                    <p className=' text-[15px] font-bold lg:text-base '>
                                        An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections.
                                    </p>
                                </div>
                                <div className=' mt-[30px]'>
                                    <a className=' flex font-medium mb-5 cursor-pointer hover:bg-[#333] hover:text-white border border-[#33333326] px-[21px] py-[23px]  justify-between' style={{ transition: "all .2s cubic-bezier(.645,.045,.355,1)" }}>
                                        Purchase now
                                        <ArrowForward />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <aside className=' ml-24  w-[526px] lg:w-[33.3333333333%]'>
                            <picture className=' flex w-[23rem] h-auto'>
                                <img src='https://www.aesop.com/u1nb1km7t5q7/40maT6HjV7m3W6O2g1bgVg/1d6cc93d4f5e5e7e019066815fb92c84/Aesop-Other-Digital-Gift-Card-Large.png' alt='' />
                            </picture>
                        </aside>
                    </div>
                </div>
            </section>

            <section className=' py-[50px]'>
                <div>
                    <div className=' py-20 px-5 md:py-[100px] md:px-[34px] lg:py-[150px] lg:px-[40px]'>
                        <div className=' ml-0 mr-0  lg:ml-[19rem] lg:mr-[20rem] '>
                            <blockquote>
                                <p className=' text-[21px] font-medium text-xl lg:text-[30px] text-center leading-[41px] font-["Marcellus", serif]'>
                                    ‘Your best and wisest refuge from all troubles is in your science.’
                                </p>
                                <h3 className=' text-center font-bold lg:font-medium font-["Marcellus", serif]'>Ada Lovelace</h3>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fifthsec
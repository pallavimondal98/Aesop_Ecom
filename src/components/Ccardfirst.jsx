import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowForward, ArrowForwardIos, ArrowBackIos, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import './Ccard.css'

// import required modules
import { Scrollbar, Navigation } from 'swiper/modules';

const Ccardfirst = () => {

    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    const PreviousBtn = (props) => {
        console.log(props);
        return (
            <div>
                <KeyboardArrowLeft />
            </div>
        )
    }
    const nextBtn = (props) => {
        return (
            <div>
                <KeyboardArrowRight />
            </div>
        )
    }


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <section className=' pt-20 md:pt-[100%] lg:pt-[150px] cursor-pointer'>
            <div className=' pt-2 '>
                <div className=' hidden lg:block'>
                   <Swiper
                    scrollbar={true}
                    slidesPerView={3}
                    // onReachBeginning={() => setShowPrevButton(false)}

                    // onReachEnd={() => setShowNextButton(false)}

                    // onSlideChange={(swiper) => {
                    //     setShowPrevButton(!swiper.isBeginning);
                    //     console.log("prev:", setShowPrevButton);
                    //     setShowNextButton(!swiper.isEnd);
                    //     console.log("next:", setShowNextButton);
                    // }}
                    navigation={{
                        prevEl: '.button-prev-slide',
                        nextEl: '.button-next-slide'

                    }}
                    modules={[Scrollbar, Navigation]}
                    className="mySwiper relative group "
                >
                        <div className='swiper-wrapper' style={{marginLeft:"80px", marginRight:"80px"}}>
                            <SwiperSlide className='w-[391px] h-[31rem] mb-14 ml-20'>
                                <div className=' grid gap-5'>
                                    <header className=' gap-3 grid'>
                                        <h2>Skin Care+</h2>
                                        <h3 className=' text-[1.875rem]'>Intensive formulations for complex skin</h3>
                                    </header>
                                    <div className='grid gap-4 h-[15rem]'>
                                        <div>
                                            <p className='text-[17px] font-normal leading-[1.7]'>Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.</p>
                                        </div>
                                        <div>
                                            <a>Browse formulations <ArrowForward /></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Immaculate Facial Tonic</h5>
                                            <div>Exfoliating tonic with a light finish</div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img src='https://www.aesop.com/u1nb1km7t5q7/3NERkrIn0dOcjmOMTiqDlv/70be9f433dc806b809b4fa3cd73559b0/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_Large_900x916px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333]'>
                                    <a className='flex flex-col h-full items-center'>
                                        <div className=' flex h-[380px] lg:h-[435px]'>
                                            <img className=' mt-[211.136px]' src='https://www.aesop.com/u1nb1km7t5q7/2ktb83uFs1cbgNIr4kP4ol/3143dee7a7056dacdb1f7d87d2fb5d12/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Front_Large_1800x955px.png' alt='' />
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>B Triple C Facial Balancing Gel</h5>
                                            <div>Embracing, vitamin-rich hydration</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Lucent Facial Concentrate</h5>
                                            <div>A Vitamin C-rich layering serum</div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img className='' src='https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Exalted Eye Serum </h5>
                                            <div>Lightweight, vitamin-rich serum </div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img className='0' src='https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333] '>
                                    <a className='flex flex-col h-full items-center'>
                                        <div className=' flex h-[380px] lg:h-[435px]'>
                                            <img className=' mt-[211.136px]' src='https://images.ctfassets.net/u1nb1km7t5q7/7rW6gSSdQaKEYUYCzvyUAO/bbe51282897aa259c0943a39f92fe996/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png' alt='' />
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Sublime Replenishing Night Masque</h5>
                                            <div>Richly nourishing hydration for overnight use</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px] mr-[80px]'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Damascan Rose Facial Treatment </h5>
                                            <div>A blend of vitamin-rich botanical extracts </div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img src='https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        </div>


                    <div className='z-10 absolute top-[50%] button-prev-slide group-hover:left-0 -left-[23rem] duration-500 w-[80px] h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                        <ArrowBackIos />
                    </div>
                    <div className='z-10 absolute top-[50%] button-next-slide group-hover:right-0 -right-[23rem] duration-500 w-[80px] h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                        <ArrowForwardIos />
                    </div>

                </Swiper> 
                </div>
                

                <div className=' block lg:hidden'>
                    <aside className=' mx-5 mb-[60px]'>
                        <div className=' grid gap-5'>
                            <header className=' gap-3 grid'>
                                <h2 className=' font-bold'>Skin Care+</h2>
                                <h3 className=' text-[1.875rem]'>Intensive formulations for complex skin</h3>
                            </header>
                            <div className='grid gap-4 h-[15rem]'>
                                <div>
                                    <p className='text-[17px] font-medium  leading-[1.7]'>Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.</p>
                                </div>
                                <div>
                                    <a className=' font-bold'>Browse formulations <ArrowForward /></a>
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
                            prevEl: '.button-prev-slide',
                            nextEl: '.button-next-slide'

                        }}
                        modules={[Scrollbar, Navigation]}
                        className="mySwiper relative group "
                    >
                        <div className='swiper-wrapper'>
                            <SwiperSlide className='w-[391px] mb-9'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Immaculate Facial Tonic</h5>
                                            <div>Exfoliating tonic with a light finish</div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img src='https://www.aesop.com/u1nb1km7t5q7/3NERkrIn0dOcjmOMTiqDlv/70be9f433dc806b809b4fa3cd73559b0/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_Large_900x916px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333]'>
                                    <a className='flex flex-col h-full items-center'>
                                        <div className=' flex h-[380px] lg:h-[435px]'>
                                            <img className=' mt-[211.136px]' src='https://www.aesop.com/u1nb1km7t5q7/2ktb83uFs1cbgNIr4kP4ol/3143dee7a7056dacdb1f7d87d2fb5d12/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Front_Large_1800x955px.png' alt='' />
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>B Triple C Facial Balancing Gel</h5>
                                            <div>Embracing, vitamin-rich hydration</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Lucent Facial Concentrate</h5>
                                            <div>A Vitamin C-rich layering serum</div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img className='' src='https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Exalted Eye Serum </h5>
                                            <div>Lightweight, vitamin-rich serum </div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img className='0' src='https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px]'>
                                <div className='text-[#333] '>
                                    <a className='flex flex-col h-full items-center'>
                                        <div className=' flex h-[380px] lg:h-[435px]'>
                                            <img className=' mt-[211.136px]' src='https://images.ctfassets.net/u1nb1km7t5q7/7rW6gSSdQaKEYUYCzvyUAO/bbe51282897aa259c0943a39f92fe996/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png' alt='' />
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Sublime Replenishing Night Masque</h5>
                                            <div>Richly nourishing hydration for overnight use</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-[391px] mr-[80px]'>
                                <div className='text-[#333]'>
                                    <a className='flex  flex-col-reverse h-full items-center'>
                                        <div className='flex flex-col justify-center items-center gap-3'>
                                            <h5 className=' font-bold text-[.875rem]'>Damascan Rose Facial Treatment </h5>
                                            <div>A blend of vitamin-rich botanical extracts </div>
                                        </div>
                                        <div className='flex h-[380px] lg:h-[435px]'>
                                            <img src='https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png' alt='' />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        </div>


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
    )
}

export default Ccardfirst
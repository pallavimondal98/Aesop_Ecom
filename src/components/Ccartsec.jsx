import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowForward, ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import './Ccard.css'

// import required modules
import { Scrollbar, Navigation } from 'swiper/modules';

const Ccartsec = () => {

    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);

    return (
        <section className=' pt-20 md:pt-[100%] lg:pt-[150px] cursor-pointer'>
            <div className=' pt-2 '>
                <Swiper
                    scrollbar={true}
                    
                    slidesPerView={1}
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                        },
                        
                    }}
                    // onReachBeginning={() => setShowPrevButton(false)}

                    // onReachEnd={() => setShowNextButton(false)}

                    // onSlideChange={(swiper) => {
                    //     console.log("Slide changed");
                    //     setShowPrevButton(!swiper.isBeginning);
                    //     console.log("prev:", !swiper.isBeginning);
                    //     setShowNextButton(!swiper.isEnd);
                    //     console.log("next:", !swiper.isEnd);
                    // }}
                    navigation={{
                        prevEl: '.button-prev-slide',
                        nextEl: '.button-next-slide'
                        
                    }}
                    
                    modules={[Scrollbar, Navigation]}
                    className="mySwiper relative group "
                >
                    <div className='swiper-wrapper'>
                        <SwiperSlide className='w-[391px] h-[31rem]  m-0 lg:ml-20' sx={{ width: "391px" }}>
                            <div className='text-[#333]'>
                                <a className='flex  flex-col-reverse h-full items-center'>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Immaculate Facial Tonic</h5>
                                        <div>Exfoliating tonic with a light finish</div>
                                    </div>
                                    <div className='flex h-[380px] lg:h-[435px]'>
                                        <img  src='https://www.aesop.com/u1nb1km7t5q7/3NERkrIn0dOcjmOMTiqDlv/70be9f433dc806b809b4fa3cd73559b0/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_Large_900x916px.png' alt='' />
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
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
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                            <div className='text-[#333] '>
                                <a className='flex flex-col h-full items-center'>
                                    <div className=' flex h-[380px] lg:h-[435px]'>
                                        <img className='' src='https://www.aesop.com/u1nb1km7t5q7/7L3YKrc4RiwBlGCmIs6W6U/9274d84adce052caa7715ca62701c103/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_Large_900x916px.png' alt='' />
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Protective Facial Lotion SPF50</h5>
                                        <div>Offers protection from UVA and UVB rays </div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                            <div className='text-[#333]'>
                                <a className='flex  flex-col-reverse h-full items-center'>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Geranium Leaf Duet</h5>
                                        <div>A gentle cleanser and aromatic balm</div>
                                    </div>
                                    <div className='flex h-[380px] lg:h-[435px]'>
                                        <img className=' mt-[211.136px]' src='https://www.aesop.com/u1nb1km7t5q7/4hQAXgS0eGue4ds2OyZOIK/5557c667d029da695fd286e5c39f75b1/Aesop-Geranium-Leaf-Duet-with-Product-Large-1584x962px.png' alt='' />
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                            <div className='text-[#333]'>
                                <a className='flex  flex-col-reverse h-full items-center'>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Rōzu Eau de Parfum </h5>
                                        <div>Floral, green and woody </div>
                                    </div>
                                    <div className='flex h-[380px] lg:h-[435px]'>
                                        <img className='' src='https://www.aesop.com/u1nb1km7t5q7/3diH0GAnUrFpI7JU19ZfMQ/99b51cbd41d6c18c3e75cd225ec22674/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png' alt='' />
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                            <div className='text-[#333] '>
                                <a className='flex flex-col h-full items-center'>
                                    <div className=' flex h-[380px] lg:h-[435px]'>
                                        <img className='' src='https://www.aesop.com/u1nb1km7t5q7/63tJ9VwYYIp1EjOJJtzejf/7b3547dce05e449b122c703a91644ec5/Aesop_Home_Aganice_Aromatique_Candle_Web_Front_A_Large_1800x1573px.png' alt='' />
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Aganice Aromatique Candle</h5>
                                        <div>Cardamom, Mimosa, Tobacco</div>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                            <div className='text-[#333]'>
                                <a className='flex  flex-col-reverse h-full items-center'>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Cleansing & Hydration for Dry Skin</h5>
                                        <div>Ideal for those who favour cream-based formulations</div>
                                    </div>
                                    <div className='flex h-[380px] lg:h-[435px]'>
                                        <img  src='https://www.aesop.com/u1nb1km7t5q7/3jqPva1xtBadadHegSTGmm/15e2abea6103475fc23442370737331b/Aesop_Bundle_Cleansing_and_Hydration_for_Dry_Skin_Web_Large_960x1090px.png' alt='' />
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                            <div className='text-[#333]'>
                                <a className='flex  flex-col-reverse h-full items-center'>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Resurrection Hand Care Duo</h5>
                                        <div>Two staples for deserving hands</div>
                                    </div>
                                    <div className='flex h-[380px] lg:h-[435px]'>
                                        <img  src='https://www.aesop.com/u1nb1km7t5q7/3Nhd8WCdxq9zWNMs3uvOBC/f74a12b5ff26a9a6d845a68e0e115dd7/Aesop_Bundle_Resurrection_Hand_Care_Duo_Web_Large_960x1090px.png' alt='' />
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[391px]' sx={{ width: "391px" }}>
                            <div className='text-[#333]'>
                                <a className='flex  flex-col-reverse h-full items-center'>
                                    <div className='flex flex-col justify-center items-center gap-3'>
                                        <h5 className=' font-bold text-[.875rem]'>Tacit Ensemble</h5>
                                        <div>For those who enjoy citrus aromas</div>
                                    </div>
                                    <div className='flex h-[380px] lg:h-[435px]'>
                                        <img  src='https://www.aesop.com/u1nb1km7t5q7/7HiBQE8eBJQl5hsO7l3yTi/8fe99fb794f72fda03d157b266337215/Aesop_Bundle_Tacit_Ensemble_Web_Large_960x1090px.png' alt='' />
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    </div>
                        <div className='z-10 absolute top-[33%] lg:top-[50%]  button-prev-slide left-0 lg:group-hover:left-0 lg:-left-[23rem] duration-500 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                            <ArrowBackIos />
                        </div>
                        <div className='z-10 absolute top-[33%] lg:top-[50%]  button-next-slide right-0 lg:group-hover:right-0 lg:-right-[23rem] duration-500 w-[60px] lg:w-[80px] h-[60px] lg:h-[80px] text-white bg-[#333] grid place-items-center cursor-pointer'>
                            <ArrowForwardIos />
                        </div>
                </Swiper>

            </div>

        </section>
    )
}

export default Ccartsec
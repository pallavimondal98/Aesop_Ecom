import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlik = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        // <div className='w-3/4 m-auto'>
        //     <div className='pt-20'>
        //         <Slider {...settings} className=''>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>
        //             <div className=' bg-white h-[450px] text-black rounded-xl'>
        //                 <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
        //                     <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='h-44 w-44 rounded-full'/>
        //                 </div>

        //                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
        //                     <p className=' text-xl font-semibold'>Lorem ipsum dolor</p>
        //                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti odit illo, voluptatem alias modi possimus neque maiores molestiae hic?</p>
        //                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
        //                 </div>
        //             </div>

        //         </Slider>
        //     </div>
        // </div>
        <div className=' grid place-items-center'>
            <div className=' bg-green-300 shadow-xl rounded-lg overflow-hidden '>
                <div className=' relative bg-red-400 pb-[66.666667%]'>
                    <img className=' absolute h-full w-full object-cover' src='https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </div>
                

                <div className='p-6'>



                </div>
            </div>
        </div>

    )
}

export default ReactSlik
import React from 'react'
import { Add, FavoriteBorder, Search,Menu } from '@mui/icons-material';


const Header = () => {
    return (
        <React.Fragment>
            <div className=' bg-[#c2c2af] px-5 py-[10px] justify-center flex gap-3'>
                <p className=' text-[13px] md:text-[15px] font-bold md:font-normal'>
                    Purchase two eligible seasonal products to receive a Karst Eau de Parfum sample.
                    <a className=' font-extrabold md:font-medium'> <u>Browse formulations</u></a>
                </p>
            </div>
            <div className=' bg-[#252525] px-5 py-[10px] gap-4 justify-center flex text-white'>
                <p className='text-[13px] md:text-[15px]'>
                    Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on all orders.
                </p>
                <Add className=' p-1 mt-[2px]' />
            </div>

            <header className=' flex bg-transparent md:bg-white md:relative absolute w-full z-10 md:z-0 justify-between px-4 lg:px-10'>
                <nav className="h-[89px]">
                    <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex lg:text-[15px] lg:font-medium">
                                <li className='h-[90px] flex items-center mr-[0.75vw] '>
                                    <a href="#" className="block p-1 " aria-current="page">Skin Care</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1 text-[calc(10px + .3vw)]">Body & Hand</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1 text-[calc(10px + .3vw)]">Hair</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1 text-[calc(10px + .3vw)]">Fragrance</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1">Home</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1">Kits & Travel</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1">Gifts</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1">Read</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1">Stores</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <a href="#" className="block p-1">Facial Appointments</a>
                                </li>
                                <li className='h-[90px] flex items-center mr-[0.75vw]'>
                                    <button className='p-1 w-12'>
                                        <svg className=' text-slate-500' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true"><title>Search Icon</title><path fill="currentColor" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23&#10;            s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92&#10;            c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17&#10;            s-17-7.626-17-17S14.61,6,23.984,6z" /></svg>
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                <nav>
                    <ul className="flex gap-5 lg:font-medium">
                        <li className='h-[90px] flex items-center mr-[0.75vw] '>
                            <a href="#" className=" p-1  hidden lg:block" aria-current="page">Login</a>
                            <Search sx={{
                                display: "block", color:"white", '@media (min-width:600px)': {
                                    display: 'none', // width for screens larger than 600px
                                }
                            }} />
                        </li>
                        <li className='h-[90px] flex items-center mr-[0.75vw]'>
                            <a href="#" className="block p-1 text-[calc(10px + .3vw)]  hidden lg:block">Cabinet</a>
                            <FavoriteBorder sx={{
                                display: "block", color:"white", '@media (min-width:600px)': {
                                    display: 'none', // width for screens larger than 600px
                                }
                            }} />
                        </li>
                        <li className='h-[90px] flex items-center mr-[0.75vw]'>
                            <a href="#" className="block text-white md:text-[#333] p-1 text-[calc(10px + .3vw)]">cart</a>
                        </li>
                        <li className='h-[90px] flex items-center mr-[0.75vw] lg:hidden'>
                           <Menu sx={{color:"white"}}/>
                        </li>
                    </ul>

                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header
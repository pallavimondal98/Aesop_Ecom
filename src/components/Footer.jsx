import React from 'react'
import { ArrowForward, Check, ArrowOutward } from '@mui/icons-material';
import '../App.css'

const Footer = () => {
    return (
        <footer >
            <div>
                <div className=' bg-[#f6f5e8] py-[50px]'>
                    <div>
                        <div className='flex flex-wrap md:flex-nowrap gap-5 lg:gap-10 p-5 justify-around lg:py-[50px] lg:px-[80px] md:py-[50px] md:px-[34px] lg:text-center'>
                            <div className=' max-w-[100%] lg:max-w-[400px]'>
                                <h4 className=' mb-[9px] text-[16px] font-bold lg:font-medium'>Certified B Corp</h4>
                                <p className=' text-[16px]  lg:text-[17px] font-semibold lg:font-medium leading-[1.7]'>We meet the highest verified standards of social and environmental performance, transparency and accountability.</p>
                            </div>
                            <div>
                                <h4 className=' mb-[5px] text-[16px] font-bold lg:font-medium'>Leaping Bunny approved</h4>
                                <p className=' text-[16px]  lg:text-[17px] font-semibold lg:font-medium  leading-[1.7]'>Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.</p>
                            </div>
                            <div>
                                <h4 className=' mb-[5px] text-[16px] font-bold lg:font-medium'>PETA recognition</h4>
                                <p className=' text-[16px]  lg:text-[17px] font-semibold lg:font-medium  leading-[1.7]'>We appear on PETA's internationally recognised vegan and cruelty-free lists.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' bg-[#252525] text-[14px] lg:text-[16px] border-b-4 border-[#d6d5cb] grid gap-[40px] md:gap-[35px] lg:gap-[40px] grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-[auto 1fr] py-[35px] md:py-[40px] px-[20px] md:px-[34px] lg:py-[50px] lg:px-[40px] text-white'>
                    <div className=' col-start-1 col-end-3'>
                        <section>
                            <h3 className=' font-semibold'>Subscribe to Aesop communications</h3>
                            <div className='border-b border-[#fffef2] lg:my-[25px] mt-[10px] mb-0 '></div>
                            <div className='mt-[10px] lg:mt-5'>
                                <div>
                                    <form>
                                        <div className='flex border lg:border-2  border-white pt-2 pb-0 px-2 lg:p-[13px] justify-between rounded-none lg:rounded-md mb-3'>
                                            <div>
                                                <label for='newseletter-email' className=' absolute text-[22px] leading-[1.1]'>
                                                    Email address
                                                </label>
                                                <input className=' bg-transparent relative  ' id='newseletter-email' type='text' />

                                            </div>
                                            <div>
                                                <ArrowForward />
                                            </div>
                                        </div>
                                    </form>
                                    <div>
                                        <div className='flex'>
                                            <label htmlFor='check-box-1' className=' cursor-pointer relative flex'>
                                                <input type='checkbox' id='check-box-1' className=' appearance-none h-4 w-4 border-[1px] border-white  bg-transparent grow-0 shrink-0 basis-[15px] ' />
                                                <Check className='check-1' sx={{ fontSize: "", height: "15px", width: "15px", position: "absolute", opacity: "0" }} />
                                            </label>

                                            <label className='ml-[10px]'>
                                                <p>
                                                    Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our
                                                    <a> <u>privacy policy</u> </a>
                                                </p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section>
                        <h3 className=' font-semibold'>Orders and support</h3>
                        <div className=' border-b border-[#fffef2] mt-[18px] my-[25px] md:my-[25px '></div>
                        <ul className=' gap-4 grid'>
                            <li>
                                <a className=''>
                                    Contact us
                                    <ArrowOutward />
                                </a>
                            </li>
                            <li>
                                <a>
                                    FAQs
                                    <ArrowOutward />
                                </a>
                            </li>
                            <li>
                                <a>
                                    Shipping
                                    <ArrowOutward />
                                </a>
                            </li>
                            <li>
                                <a>
                                    Returns
                                    <ArrowOutward />
                                </a>
                            </li>
                            <li>
                                <a>
                                    Order history
                                </a>
                            </li>
                            <li>
                                <a>
                                    Check gift card balance
                                </a>
                            </li>
                            <li>
                                <a>
                                    Terms and conditions
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className=' font-semibold'>Services</h3>
                        <div className='border-b border-[#fffef2] my-[25px] md:my-[25px '></div>
                        <ul className=' gap-4 grid'>
                            <li>
                                <a className=''>
                                    Live assistance
                                </a>
                            </li>
                            <li>
                                <a>
                                    Corporate gifts
                                </a>
                            </li>
                            <li>
                                <a>
                                    Facial Appointments
                                </a>
                            </li>
                            <li>
                                <a>
                                    Click and Collect
                                </a>
                            </li>
                            <li>
                                <a>
                                    Video consultation
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className=' font-semibold'>Location preferences</h3>
                        <div className='border-b border-[#fffef2] my-[25px] md:my-[25px '></div>
                        <div className=' mt-[21px] lg:mt-5 '>
                            <ul className=' gap-4 grid'>
                                <li>
                                    <span>Shipping:</span>
                                    <a className=' block leading-[2.5]'><u>Hong Kong, SAR</u></a>
                                </li>
                                <li>
                                    <span className=' block leading-[2.5]'>Language:</span>
                                    <ul>
                                        <li><u>English</u></li>
                                        <li>繁體中文</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className='col-span-1 lg:col-span-2'>
                        <h3 className=' font-semibold'>Sustainability</h3>
                        <div className=' border-b border-[#fffef2] my-[25px] md:my-[25px] '></div>
                        <div>
                            <p>
                                All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
                            </p>
                        </div>
                    </section>
                    <section>
                        <h3 className=' font-semibold'>About</h3>
                        <div className='border-b border-[#fffef2] my-[25px] md:my-[25px '></div>
                        <ul className=' gap-4 grid'>
                            <li>
                                <a className=''>
                                    Our story
                                </a>
                            </li>
                            <li>
                                <a>
                                    Foundation
                                </a>
                            </li>
                            <li>
                                <a>
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a>
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a>
                                    Video consultation
                                </a>
                            </li>
                            <li>
                                <a>
                                    Accessibility
                                </a>
                            </li>
                            <li>
                                <a>
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className=' font-semibold'>Social media</h3>
                        <div className=' border-b border-[#fffef2] my-[25px] md:my-[25px] '></div>
                        <ul className=' gap-4 grid'>
                            <li>
                                <a className=''>
                                    Instagram
                                    <ArrowOutward />
                                </a>
                            </li>
                            <li>
                                <a>
                                    Twitter
                                    <ArrowOutward />
                                </a>
                            </li>
                            <li>
                                <a>
                                    LinkedIn
                                    <ArrowOutward />
                                </a>
                            </li>
                            <li>
                                <a>
                                    WeChat
                                </a>
                            </li>
                            <li>
                                <a>
                                    Weibo
                                    <ArrowOutward />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className=' text-[17px] bg-[#252525] text-white flex items-center justify-between h-[72px] px-5 md:px-[34px] lg:px-[40px]'>
                    <span>© Aesop</span>
                </div>
            </div>

        </footer>
    )
}

export default Footer
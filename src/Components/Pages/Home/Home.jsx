import React from 'react';
import { faPlayCircle } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//img import 
import img1 from '../../../Image/img-1 (1).jpg'
import img2 from '../../../Image/img-1 (2).jpg'
import img3 from '../../../Image/img-1 (3).jpg'

const Home = () => {
    return (
        <div className=' bg-slate-600 lg:p-20 p-10'>
            
            <div className=' border-8 border-solid border-[color:rgb(241,141,77)] p-5'>
                <div className=' grid grid-cols-4 gap-4 justify-center items-center'>
                    <div className='col-span-4 lg:col-span-2 justify-center items-center text-center pt-24 lg:pt-0 '>
                        <h1 className=' text-[#79e320]  lg:text-6xl text-4xl font-bold pb-3'> WELLCOME TO <span className='text-[color:rgb(241,141,77)]'>&FLIX</span> </h1>
                        <h2 className=' text-white lg:text-3xl text-xl font-bold pb-3'>LIFE IS BORING TO ENJOY WATCH &FLIX</h2>
                        <h3 className=' text-white lg:text-3xl text-xl  font-bold pb-3'> FIND THE LATEST DRAMA AND MOVIE</h3>
                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-xl">Watch Now  <FontAwesomeIcon className=" text-white"icon={faPlayCircle} /></button>
                    </div>
                     <div className='col-span-2 invisible lg:visible'>
                        <Swiper autoplay={true} pagination={true} navigation={true} modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
                            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                        </Swiper>
                     </div>
                </div>
             

            </div>   
        </div>
    );
};

export default Home;
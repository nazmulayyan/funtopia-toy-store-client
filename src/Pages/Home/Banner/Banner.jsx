import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import img1 from '../../../assets/banner/img1.png'
import img2 from '../../../assets/banner/img2.png'
import img3 from '../../../assets/banner/img3.png'
import img4 from '../../../assets/banner/img4.png'

const Banner = () => {

    SwiperCore.use([Pagination, Autoplay]);

    return (
        <div className='w-11/12 mx-auto items-center lg:h-screen flex lg:py-0 py-10'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true} // Enable loop
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }} 
                speed={2000}
            >
                <SwiperSlide>
                    <div className='flex lg:flex-row flex-col-reverse  items-center'>

                        <div className='lg:text-left text-center lg:pt-0 pt-5'>
                            <h1 className='md:text-7xl text-5xl font-bold uppercase'>play run <br /> enjoy & repeat</h1>
                            <button className='md:py-4 py-3 md:px-8 px-5 text-white font-semibold text-lg mt-10 bg-pink-500 uppercase  rounded-lg '>explore more</button>
                        </div>
                        <div className='m-auto'>
                            <img src={img1} alt="" className='w-fit' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex lg:flex-row flex-col-reverse items-center'>

                        <div className='lg:text-left text-center lg:pt-0 pt-5'>
                            <h1 className='md:text-7xl text-5xl font-bold uppercase'>play run <br /> enjoy & repeat</h1>
                            
                            <button className='md:py-4 py-3 md:px-8 px-5 text-white font-semibold text-lg mt-10 bg-pink-500 uppercase  rounded-lg '>explore more</button>
                        </div>
                        <div className='m-auto'>
                            <img src={img2} alt="" className='w-fit' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex lg:flex-row flex-col-reverse  items-center'>

                        <div className='lg:text-left text-center lg:pt-0 pt-5'>
                            <h1 className='md:text-7xl text-5xl font-bold uppercase'>play run <br /> enjoy & repeat</h1>
                            <button className='md:py-4 py-3 md:px-8 px-5 text-white font-semibold text-lg mt-10 bg-pink-500 uppercase  rounded-lg '>explore more</button>
                        </div>
                        <div className='m-auto'>
                            <img src={img3} alt="" className='w-fit' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex lg:flex-row flex-col-reverse  items-center'>

                        <div className='lg:text-left text-center lg:pt-0 pt-5'>
                            <h1 className='md:text-7xl text-5xl font-bold uppercase'>play run <br /> enjoy & repeat</h1>
                            <button className='md:py-4 py-3 md:px-8 px-5 text-white font-semibold text-lg mt-10 bg-pink-500 uppercase  rounded-lg '>explore more</button>
                        </div>
                        <div className='m-auto'>
                            <img src={img4} alt="" className='w-fit' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
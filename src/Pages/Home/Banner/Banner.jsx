import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import img1 from '../../../assets/banner/img1.png'
import img2 from '../../../assets/banner/img2.png'
import img3 from '../../../assets/banner/img3.png'
import img4 from '../../../assets/banner/img4.png'

const Banner = () => {


    return (
        <div className='lg:max-w-screen-2xl py-10 px-5 h-screen'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='flex  items-center'>
                        <div>
                            <h1 className='text-8xl font-bold uppercase'>play run <br /> enjoy & repeat</h1>
                        </div>
                        <div className='m-auto'>
                            <img src={img1} alt="" className='w-fit' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Banner;
import { useEffect } from 'react'
import img1 from '../../../assets/gallrey/img1.png'
import img2 from '../../../assets/gallrey/img2.png'
import img3 from '../../../assets/gallrey/img3.png'
import img4 from '../../../assets/gallrey/img4.png'
import img5 from '../../../assets/gallrey/img5.png'
import img6 from '../../../assets/gallrey/img6.png'
import img7 from '../../../assets/gallrey/img7.png'
import img8 from '../../../assets/gallrey/img8.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Gallery = () => {

    useEffect(()=>{
        Aos.init({
            duration: 2000,

        })
    },[])

    return (
        <div className='lg:max-w-screen-2xl lg:p-0 px-5 m-auto mb-36'>
            <h3 className='text-center font-bold text-4xl uppercase text-pink-500 for-border pb-20'>toys gallrey</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 '>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img1} alt="" />
                </div>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img2} alt="" />
                </div>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img3} alt="" />
                </div>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img4} alt="" />
                </div>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img5} alt="" />
                </div>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img6} alt="" />
                </div>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img7} alt="" />
                </div>

                <div className='p-14 shadow-xl rounded-xl border hover:shadow-none duration-200' data-aos='fade-up'>
                    <img className='w-72 h-72 m-auto' src={img8} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;
import { useEffect } from 'react'
import img1 from '../../../assets/tranding/img1.png'
import img2 from '../../../assets/tranding/img2.png'
import img3 from '../../../assets/tranding/img3.png'
import img4 from '../../../assets/tranding/img4.png'
import img5 from '../../../assets/tranding/img5.png'
import img6 from '../../../assets/tranding/img6.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TrandingToys = () => {

    useEffect(()=>{
        Aos.init({
            duration: 2000,

        })
    },[])

    return (
        <div className='lg:max-w-screen-2xl py-10 mb-36 px-5'>
            <h3 className='text-center font-bold text-4xl uppercase text-pink-500 for-border'>tranding toys</h3>

            <div className=''>
                <div className='grid md:grid-cols-3 grid-cols-1 pt-36 gap-12'>

                    <div className='border shadow-xl rounded-xl duration-200 hover:shadow-none text-center px-10 pt-10 pb-10' data-aos='fade-up'>
                        <img className='w-80 h-80 -mt-28 m-auto' src={img1} alt="" />
                        <h5 className='text-xl font-bold pt-10'>Toy Name: Diddy Knong</h5>
                    </div>

                    <div className='border shadow-xl rounded-xl duration-200 hover:shadow-none text-center px-10 pt-10 pb-10 md:mt-0 mt-28' data-aos='fade-up'>
                        <img className='w-80 h-80 -mt-28 m-auto' src={img2} alt="" />
                        <h5 className='text-xl font-bold pt-10'>Toy Name: Diddy Knong</h5>
                    </div>

                    <div className='border shadow-xl rounded-xl duration-200 hover:shadow-none text-center px-10 pt-10 pb-10 md:mt-0 mt-28' data-aos='fade-up'>
                        <img className='w-80 h-80 -mt-28 m-auto' src={img3} alt="" />
                        <h5 className='text-xl font-bold pt-10'>Toy Name: Diddy Knong</h5>
                    </div>

                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 pt-36 gap-12'>

                    <div className='border shadow-xl rounded-xl duration-200 hover:shadow-none text-center px-10 pt-10 pb-5' data-aos='fade-up'>
                        <img className='w-70 h-80 -mt-28 m-auto' src={img4} alt="" />
                        <h5 className='text-xl font-bold pt-10'>Toy Name: Diddy Knong</h5>
                    </div>

                    <div className='border shadow-xl rounded-xl duration-200 hover:shadow-none text-center px-10 pt-10 pb-10 md:mt-0 mt-28' data-aos='fade-up'>
                        <img className='w-70 h-80 -mt-28 m-auto' src={img5} alt="" />
                        <h5 className='text-xl font-bold pt-10'>Toy Name: Diddy Knong</h5>
                    </div>

                    <div className='border shadow-xl rounded-xl duration-200 hover:shadow-none text-center px-10 pt-10 pb-10 md:mt-0 mt-28' data-aos='fade-up'>
                        <img className='w-70 h-80 -mt-28 m-auto' src={img6} alt="" />
                        <h5 className='text-xl font-bold pt-10'>Toy Name: Diddy Knong</h5>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TrandingToys;
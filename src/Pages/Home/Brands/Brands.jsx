import img1 from '../../../assets/brands/img1.jpg'
import img2 from '../../../assets/brands/img2.jpg'
import img3 from '../../../assets/brands/img3.jpg'
import img4 from '../../../assets/brands/img4.jpg'
import img5 from '../../../assets/brands/img5.jpg'
const Brands = () => {
    
    return (
        <div className='w-11/12 mb-36 mx-auto'>
            <div className='mb-20'>
                <h4 className='text-center font-bold text-3xl md:text-4xl uppercase text-pink-500 for-border'>Connected with Top Brands</h4>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4'>
                <img className='m-auto' src={img1} alt="" />
                <img className='m-auto' src={img2} alt="" />
                <img className='m-auto' src={img3} alt="" />
                <img className='m-auto' src={img4} alt="" />
                <img className='m-auto md:hidden lg:block block' src={img5} alt="" />
            </div>
            
        </div>
    );
};

export default Brands;
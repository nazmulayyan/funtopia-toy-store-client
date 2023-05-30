import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RxArrowRight } from "react-icons/rx";
import { Link, } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

const ShopByCategory = () => {

  const [toys, setToys] = useState([]);
  const [animalToys, setAnimalToys] = useState([]);
  const [birdToys, setBirdToys] = useState([]);
  const [reptileToys, setReptileToys] = useState([]);

  //aos
  useEffect(() => {
    Aos.init({
      duration: 2000,

    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        filterToys(data, 'Animal', setAnimalToys);
        filterToys(data, 'Birds', setBirdToys);
        filterToys(data, 'Reptiles', setReptileToys);
      });
  }, []);

  const filterToys = (data, subcategory, setFilteredToys) => {
    const filteredData = data.filter((toy) => toy.subcategory === subcategory);
    setFilteredToys(filteredData);
  };

  return (
    <div className='my-36 lg:max-w-screen-2xl lg:p-0 px-5 mx-auto'>
      <Tabs>
        <TabList className={`bg-pink-500 text-center py-4 w-fit px-10 m-auto flex justify-center gap-6 mb-20`}>
          <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Animal</Tab>
          <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Birds</Tab>
          <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Reptiles</Tab>
        </TabList>

        <TabPanel>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
              animalToys.map(toy => (
                <div key={toy._id} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl' data-aos='fade-up'>
                  <img className='h-80 m-auto' src={toy.picture} alt={toy.name} />
                  <div className='font-xl pt-8'>
                    <div>
                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Name:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.name}</span>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Price:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.price}</span>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">rating:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <Link to={`/toyDetails/${toy._id}`} className='cursor-pointer text-4xl text-gray-800 hover:text-pink-500 duration-300 border-gray-800 hover:border-pink-500 text-center '>
                      <RxArrowRight />
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
              birdToys.map(toy => (
                <div key={toy._id} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl' data-aos='fade-up'>
                  <img className='h-80 m-auto' src={toy.picture} alt={toy.name} />
                  <div className='font-xl pt-8'>
                    <div>
                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Name:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.name}</span>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Price:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.price}</span>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">rating:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <Link to={`/toyDetails/${toy._id}`} className='cursor-pointer text-4xl text-gray-800 hover:text-pink-500 duration-300 border-gray-800 hover:border-pink-500 text-center '>
                      <RxArrowRight />
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
              reptileToys.map(toy => (
                <div key={toy._id} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl' data-aos='fade-up'>
                  <img className='h-80 m-auto' src={toy.picture} alt={toy.name} />
                  <div className='font-xl pt-8'>
                    <div>
                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Name:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.name}</span>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Price:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.price}</span>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">rating:</span>
                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{toy.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <Link to={`/toyDetails/${toy._id}`} className='cursor-pointer text-4xl text-gray-800 hover:text-pink-500 duration-300 border-gray-800 hover:border-pink-500 text-center '>
                      <RxArrowRight />
                    </Link>
                  </div>
                </div>
          ))
            }
        </div>
      </TabPanel>

    </Tabs>
    </div >
  );
};

export default ShopByCategory;



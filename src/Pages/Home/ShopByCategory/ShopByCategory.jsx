import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RxArrowRight } from "react-icons/rx";
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  const [toys, setToys] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => setToys(data[0])); // Update to set the first object in the array
  }, []);

  return (
    <div className='my-36 lg:max-w-screen-2xl lg:p-0 px-5 mx-auto'>
      <Tabs>
        <TabList className={`bg-pink-500 text-center py-4 w-fit px-10 m-auto flex justify-center gap-6 mb-20`}>
          <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Mammals</Tab>
          <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Birds</Tab>
          <Tab className={`cursor-pointer py-3 px-6 bg-white focus:outline-none rounded-full focus:text-pink-500`}>Reptiles</Tab>
        </TabList>

        <TabPanel>
          {toys && toys.mammals && (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {toys.mammals.map((toy) => (
                <div key={toy.name} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl'>
                  <img className='h-80 m-auto' src={toy.picture} alt={toy.name} />
                  <div className='flex justify-end font-xl pt-8'>
                    <Link to={`/toys/${toy._id}`} className='cursor-pointer text-4xl text-gray-800 hover:text-pink-500 duration-300 p-1   border-gray-800 hover:border-pink-500 text-center '>
                      <RxArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {toys && toys.birds && (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {toys.birds.map((toy) => (
                <div key={toy.name} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl'>
                  <img className='h-80 m-auto' src={toy.picture} alt={toy.name} />
                  <div className='flex justify-end font-xl pt-8'>
                    <Link className='cursor-pointer text-4xl text-gray-800 hover:text-pink-500 duration-300 p-1   border-gray-800 hover:border-pink-500 text-center '>
                      <RxArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {toys && toys.reptiles && (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {toys.reptiles.map((toy) => (
                <div key={toy.name} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl'>
                  <img className='h-80 m-auto' src={toy.picture} alt={toy.name} />
                  <div className='flex justify-end font-xl pt-8'>
                    <Link className='cursor-pointer text-4xl text-gray-800 hover:text-pink-500 duration-300 p-1   border-gray-800 hover:border-pink-500 text-center '>
                      <RxArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

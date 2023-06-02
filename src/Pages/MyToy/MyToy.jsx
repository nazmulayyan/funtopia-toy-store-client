import { Link, useLoaderData } from "react-router-dom";
import { RxArrowRight } from "react-icons/rx";

const MyToy = () => {

    const myToys = useLoaderData();
    console.log(myToys)

    return (
        <div>
            <h3>this is my toy {myToys.length} </h3>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Toy shorting</option>
                <option>ascending</option>
                <option>descending</option>
            </select>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>

                {
                    myToys.map(myToy => <div key={myToy._id} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl' >
                            <img className='h-80 m-auto' src={myToy.photoUrl} alt={myToy.name} />
                            {/* <div className='font-xl pt-8'>
                                <div>
                                    <div className="grid grid-cols-3">
                                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Name:</span>
                                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{myToy.name}</span>
                                    </div>

                                    <div className="grid grid-cols-3">
                                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">Price:</span>
                                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{myToy.price}</span>
                                    </div>

                                    <div className="grid grid-cols-3">
                                        <span className="col-span-2 font-bold text-lg text-gray-600 pb-3">rating:</span>
                                        <span className="col-span-1 font-bold text-lg  text-gray-800 pb-3">{myToy.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <Link to={`/toyDetails/${myToy._id}`} className='cursor-pointer text-4xl text-gray-800 hover:text-pink-500 duration-300 border-gray-800 hover:border-pink-500 text-center '>
                                    <RxArrowRight />
                                </Link>
                            </div> */}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyToy;
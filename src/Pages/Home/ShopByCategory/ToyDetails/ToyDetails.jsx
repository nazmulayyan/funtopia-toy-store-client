import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../../hooks/useTitle";


const ToyDetails = () => {
    useTitle('ToyDetails')

    const toyDetails = useLoaderData();

    return (
        <div className='w-11/12 mx-auto mt-20 mb-36'>

            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 mb-10">
                <div className="text-center">
                    <h3 className="md:text-5xl text-4xl font-bold text-white">toy details</h3>
                    <div className="flex mt-5">
                        <Link to='/allToys' className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg ">go back</Link>
                        <p className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg text-pink-500 ml-5">toy details</p>
                    </div>
                </div>
            </div>

            <div className="md:grid md:grid-cols-3 p-10 gap-8 border-2 rounded-xl py-14">

                <div className="md:col-span-1">
                    <img className="w-full" src={toyDetails.picture} alt="" />
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-5xl font-bold pb-10">{toyDetails.name}</h2>

                    <div className="p-10 border-2 bg-gray-200 rounded-xl shadow-lg hover:shadow-none duration-300 ">

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-sm text-gray-600 pb-5">Name:</span>
                            <span className="col-span-1 font-bold text-sm text-gray-800 pb-5">{toyDetails.name}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-sm text-gray-600 pb-5">Price:</span>
                            <span className="col-span-1 font-bold text-sm text-gray-800 pb-5">{toyDetails.price}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-sm text-gray-600 pb-5">rating:</span>
                            <span className="col-span-1 font-bold text-sm text-gray-800 pb-5">{toyDetails.rating}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-sm text-gray-600 pb-5">Seller:</span>
                            <span className="col-span-1 font-bold text-sm text-gray-800 pb-5">{toyDetails.seller}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-sm text-gray-600 pb-5">subcategory:</span>
                            <span className="col-span-1 font-bold text-sm text-gray-800 pb-5">{toyDetails.subcategory}</span>
                        </div>
                        <div className="grid grid-cols-3">
                            <span className=" col-span-3 font-bold text-sm text-gray-600 pb-5">
                            description: <small className="col-span-3 font-bold text-sm text-gray-800 pb-5">{toyDetails.description}</small>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ToyDetails;
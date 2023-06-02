import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toyDetails = useLoaderData();

    

    return (
        <div className='lg:w-fit lg:p-0 px-5 m-auto my-36'>
            <div className="md:grid md:grid-cols-3 p-10 gap-8 border-2 rounded-xl py-14">

                <div className="md:col-span-1">
                    <img className="w-full" src={toyDetails.picture} alt="" />
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-5xl font-bold pb-10">{toyDetails.name}</h2>

                    <div className="p-10 border-2 bg-gray-200 rounded-xl shadow-lg hover:shadow-none duration-300 ">

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-2xl text-gray-600 pb-5">Name:</span>
                            <span className="col-span-1 font-bold text-2xl text-gray-800 pb-5">{toyDetails.name}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-2xl text-gray-600 pb-5">Price:</span>
                            <span className="col-span-1 font-bold text-2xl text-gray-800 pb-5">{toyDetails.price}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-2xl text-gray-600 pb-5">rating:</span>
                            <span className="col-span-1 font-bold text-2xl text-gray-800 pb-5">{toyDetails.rating}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-2xl text-gray-600 pb-5">Seller:</span>
                            <span className="col-span-1 font-bold text-2xl text-gray-800 pb-5">{toyDetails.seller}</span>
                        </div>

                        <div className="grid grid-cols-3">
                            <span className="col-span-2 font-bold text-2xl text-gray-600 pb-5">subcategory:</span>
                            <span className="col-span-1 font-bold text-2xl text-gray-800 pb-5">{toyDetails.subcategory}</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ToyDetails;
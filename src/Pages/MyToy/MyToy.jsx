import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { RxArrowRight } from "react-icons/rx";

const MyToy = () => {

    const { user } = useContext(AuthContext);

    // const myToys = useLoaderData();
    // console.log(myToys)
    const [myToys, setMyToys] = useState([user]);
    const [sortingOrder, setSortingOrder] = useState(""); // State for sorting order


    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    //shoring data
    useEffect(() => {
        if (sortingOrder) {
          // Sort the toys based on the selected sorting order
          const sortedToys = [...myToys].sort((a, b) => {
            if (sortingOrder === "ascending") {
              return a.price - b.price;
            } else if (sortingOrder === "descending") {
              return b.price - a.price;
            }
            return 0;
          });
          setMyToys(sortedToys);
        }
      }, [sortingOrder, myToys]);
    
      const handleSortingOrderChange = (event) => {
        setSortingOrder(event.target.value);
      };

    return (
        <div className="my-36 lg:max-w-screen-2xl lg:p-0 px-5 mx-auto">
            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <div className="text-center">
                    <h3 className="md:text-5xl text-4xl font-bold text-white">MY Toys</h3>
                    <div className="flex mt-5">
                        <Link to='/' className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-lg rounded-full ">go back</Link>
                        <p className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-lg rounded-full text-pink-500 ml-5">my toys</p>
                    </div>
                </div>
            </div>
            <div className="bg-pink-500 h-24 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 mb-10 mt-6">
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={sortingOrder}
                    onChange={handleSortingOrderChange}
                >
                    <option disabled value="">
                        Toy sorting
                    </option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>

                {
                    myToys.map(myToy => <div key={myToy._id} className='p-10 border shadow-xl hover:shadow-none duration-200 rounded-xl' >
                        <img className='h-80 m-auto' src={myToy.photoUrl} alt={myToy.name} />
                        <div className='font-xl pt-8'>
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
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyToy;
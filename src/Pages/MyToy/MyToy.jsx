import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {

    useTitle('MyToy')

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

    //delete
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        const reaming = myToys.filter(toy => toy._id != _id)
                        setMyToys(reaming)
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                        }
                    })
                    .catch((error) => {
                        console.log("Error deleting toy:", error);
                    });
            }
        });
    };

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
        <div className="mb-36 mt-20 w-11/12 mx-auto">
            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <div className="text-center">
                    <h3 className="md:text-5xl text-4xl font-bold text-white">MY Toys</h3>
                    <div className="flex mt-5">
                        <Link to='/' className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-lg rounded-lg ">go back</Link>
                        <p className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-lg rounded-lg text-pink-500 ml-5">my toys</p>
                    </div>
                </div>
            </div>
            <div className="bg-pink-500 h-24 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 mb-10 mt-6 md:px-0 px-5">
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

            <div className="overflow-x-auto">
                <table className="table w-full rounded-none">
                    <thead>
                        <tr>
                            <th>sl no</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {
                            myToys.map((toy, index) => (
                                <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subcategory}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td className="flex space-x-2">
                                        <button className="my-3">
                                            <Link
                                                to={`/updateToy/${toy._id}`}
                                                className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 rounded-lg lg:mr-0 capitalize text-sm bg-pink-500"
                                            >
                                                update
                                            </Link>
                                        </button>
                                        <button onClick={() => handleDelete(toy._id)} className="my-3">
                                            <Link className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 rounded-lg lg:mr-0 capitalize text-sm bg-pink-500">
                                                delete
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;
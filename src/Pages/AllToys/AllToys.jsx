import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllToys = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredToys, setFilteredToys] = useState([]);
    const [allToys, setAllToys] = useState([]); //state for all toys
    console.log(allToys);

    useEffect(() => {
        // Fetch all toys when the component mounts
        fetch("http://localhost:5000/toys")
            .then((res) => res.json())
            .then((data) => {
                setAllToys(data);
            })
            .catch((error) => {
                console.log("Error fetching toys:", error);
            });
    }, []);

    useEffect(() => {
        if (searchQuery === "") {
            // Show all toys when search query is empty
            setFilteredToys(allToys);
        } else {
            const filteredData = allToys.filter((toy) =>
                toy.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredToys(filteredData);
        }
    }, [searchQuery, allToys]);


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
                        const remaind = allToys.filter(toy=>toy._id!=_id)
                        setAllToys(remaind)
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

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        setSearchQuery(search);
    };

    return (
        <div className="my-36 lg:max-w-screen-2xl lg:p-0 px-5 mx-auto">
            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 mb-10">
                <h3 className="md:text-5xl text-3xl font-bold text-white">all toys</h3>
            </div>
            <div className="bg-pink-500 h-24 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 mb-10">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-3 text-gray-700 rounded-full lg:rounded-none "
                        name="search"
                    />
                    <button
                        type="submit"
                        className="md:px-6 px-4 font-semibold text-gray-700 py-3 lg:rounded-none rounded-full md:ms-2 ms-1 bg-white"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full rounded-none">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {filteredToys.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No matching toys found.
                                </td>
                            </tr>
                        ) : (
                            filteredToys.map((toy) => (
                                <tr key={toy._id}>
                                    <td>{toy.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subcategory}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td className="flex space-x-2">
                                        <button className="my-3">
                                            <Link
                                                to={`/toyDetails/${toy._id}`}
                                                className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 lg:rounded-none rounded-full lg:mr-0 capitalize text-sm bg-pink-500"
                                            >
                                                view
                                            </Link>
                                        </button>
                                        <button className="my-3">
                                            <Link
                                                to={`/updateToy/${toy._id}`}
                                                className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 lg:rounded-none rounded-full lg:mr-0 capitalize text-sm bg-pink-500"
                                            >
                                                update
                                            </Link>
                                        </button>
                                        <button onClick={() => handleDelete(toy._id)} className="my-3">
                                            <Link className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 lg:rounded-none rounded-full lg:mr-0 capitalize text-sm bg-pink-500">
                                                delete
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;

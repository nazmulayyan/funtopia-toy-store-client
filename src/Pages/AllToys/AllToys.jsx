import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    useTitle('AllToys')

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredToys, setFilteredToys] = useState([]);
    const [allToys, setAllToys] = useState([]); //state for all toys

    useEffect(() => {
        // Fetch all toys when the component mounts
        fetch("https://funtopia-toy-store-server.vercel.app/toys")
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

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        setSearchQuery(search);
    };


    return (
        <div className="mt-20 mb-36 w-11/12 mx-auto">
            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 my-10">
                <div className="text-center">
                    <h3 className="md:text-5xl text-4xl font-bold text-white">all toys</h3>
                    <div className="flex mt-5">
                        <Link to='/' className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-lg rounded-lg ">go back</Link>
                        <p className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-lg rounded-lg text-pink-500 ml-5">all toys</p>
                    </div>
                </div>
            </div>
            <div className="bg-pink-500 h-24 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 mb-10">
                <form onSubmit={handleSearch} className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="md:px-3 md:py-3 px-2 py-1 md:w-4/5 w-2/3 text-gray-700 rounded-lg "
                        name="search"
                    />
                    <button
                        type="submit"
                        className="md:px-6 md:w-fit w-1/4 px-2 font-semibold text-gray-700 md:py-3 rounded-lg md:ms-2 ms-1 bg-white"
                    >
                        Search
                    </button>
                </form>
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
                        {filteredToys.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No matching toys found.
                                </td>
                            </tr>
                        ) : (
                            filteredToys.map((toy, index) => (
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
                                                to={`/toyDetails/${toy._id}`}
                                                className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 rounded-lg lg:mr-0 capitalize text-sm bg-pink-500"
                                            >
                                                view
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

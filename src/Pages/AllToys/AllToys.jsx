import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const addNewToys = useLoaderData()
    return (
        <div className="my-36 lg:max-w-screen-2xl lg:p-0 px-5 mx-auto">
            <h3>this is new toy {addNewToys.length}</h3>


            <div className="overflow-x-auto">
                <table className="table w-full rounded-none">
                    <thead >
                        <tr >
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
                            addNewToys.map(addNewToy => (
                                <tr key={addNewToy._id}  >
                                    <td>{addNewToy.sellerName}</td>
                                    <td>{addNewToy.name}</td>
                                    <td>{addNewToy.subcategory}</td>
                                    <td>{addNewToy.price}</td>
                                    <td>{addNewToy.quantity}</td>
                                    <button className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 my-3 lg:rounded-none rounded-full lg:mr-0 capitalize text-sm bg-pink-500">view details</button>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllToys = () => {
    const addNewToys = useLoaderData();

    const handleDelete = (_id) =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            console.log('delete confirm');
            }
          })
    }
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
                                    <div className="flex space-x-2">
                                        <button className="my-3">
                                            <Link to={`/toyDetails/${addNewToy._id}`} className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 lg:rounded-none rounded-full lg:mr-0 capitalize text-sm bg-pink-500">view</Link>
                                        </button>
                                        <button className="my-3">
                                            <Link to={`/toyDetails/${addNewToy._id}`} className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 lg:rounded-none rounded-full lg:mr-0 capitalize text-sm bg-pink-500">update</Link>
                                        </button>
                                        <button onClick={() => handleDelete(addNewToy._id)} className="my-3">
                                            <Link className="md:px-6 px-3 font-semibold text-white md:py-3 py-2 lg:rounded-none rounded-full lg:mr-0 capitalize text-sm bg-pink-500">delete</Link>
                                        </button>
                                    </div>
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
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {

    const updateToys = useLoaderData();

    const { _id, name, photoUrl, seller, sellerEmail, subcategory, price, rating, quantity, description } = updateToys;

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const seller = form.seller.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateNewToy = { name, photoUrl, seller, sellerEmail, subcategory, price, rating, quantity, description }

        console.log(updateNewToy);

        //send data to the server
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateNewToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'successfully updated new toy',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 w-11/12 mx-auto mb-36 ">

            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <div>
                    <h3 className="md:text-5xl text-4xl font-bold text-white">update toy</h3>
                    <div className="flex mt-5">
                        <Link to='/allToys' className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg ">go back</Link>
                        <p className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg text-pink-500 ml-5">update toy</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleUpdateToy}>
                <div className="bg-pink-500 p-8 h-fit rounded-xl shadow-xl hover:shadow-none duration-300">

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input className="w-full  rounded-lg py-3 px-6" type="text" name="name" defaultValue={name} placeholder="please enter your name" />
                    </div>

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input className="w-full  rounded-lg py-3 px-6" type="text" name="photoUrl" defaultValue={photoUrl} placeholder="please enter your photo URL" />
                    </div>

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold capitalize">seller name</span>
                        </label>
                        <input className="w-full  rounded-lg py-3 px-6" type="text" name="seller" defaultValue={seller} placeholder="please enter your email" />
                    </div>

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold capitalize">seller email</span>
                        </label>
                        <input className="w-full  rounded-lg py-3 px-6" type="email" name="sellerEmail" defaultValue={sellerEmail} placeholder="please enter your email" />
                    </div>

                    <div>
                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">subcategory</span>
                                </label>
                                <select className="w-full  rounded-lg py-3 px-6" name="subcategory" defaultValue={subcategory}>
                                    <option disabled selected>Pick one</option>
                                    <option value="animal">Animals</option>
                                    <option value="bird">Birds</option>
                                    <option value="reptile">Reptiles</option>
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">price</span>
                                </label>
                                <input className="w-full  rounded-lg py-3 px-6" type="text" name="price" defaultValue={price} placeholder="price" />
                            </div>

                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Rating</span>
                                </label>
                                <input className="w-full  rounded-lg py-3 px-6" type="text" name="rating" defaultValue={rating} placeholder="rating" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold"> Quantity</span>
                                </label>
                                <input className="w-full  rounded-lg py-3 px-6" type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" />
                            </div>


                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl font-semibold"> Description</span>
                            </label>
                            <textarea className="w-full  rounded-lg py-3 px-6" name="description" defaultValue={description} rows="5"></textarea>
                        </div>

                    </div>

                    <input className="w-full  rounded-lg bg-white mt-5 py-3 text-xl font-bold uppercase mb-3 cursor-pointer" type="submit" value="update a toy" />

                </div>
            </form>
        </div>
    );
};

export default UpdateToy;
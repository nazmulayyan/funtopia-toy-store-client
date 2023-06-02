import Swal from 'sweetalert2'

const AddToy = () => {

    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addNewToy = { name, photoUrl, sellerName, sellerEmail, subcategory, price, rating, quantity, description }
        console.log(addNewToy);

        //send data to the server
        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'successfully added new toy',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 lg:max-w-screen-2xl lg:p-0 px-5 m-auto mb-36 ">

            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <h3 className="md:text-5xl text-3xl font-bold text-white">add a new toy</h3>
            </div>
            <form onSubmit={handleAddToy}>
                <div className="bg-pink-500 p-8 h-fit rounded-xl shadow-xl hover:shadow-none duration-300">

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="name" placeholder="please enter your name" />
                    </div>

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="photoUrl" placeholder="please enter your photo URL" />
                    </div>

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold capitalize">seller name</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="sellerName" placeholder="please enter your email" />
                    </div>

                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold capitalize">seller email</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="email" name="sellerEmail" placeholder="please enter your email" />
                    </div>

                    <div>
                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">subcategory</span>
                                </label>
                                <select className="w-full lg:rounded-none rounded-full py-3 px-6" name="subcategory">
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
                                <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="price" placeholder="price" />
                            </div>

                        </div>

                        <div className="flex gap-6">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Rating</span>
                                </label>
                                <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="rating" placeholder="rating" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold"> Quantity</span>
                                </label>
                                <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="quantity" placeholder="Available quantity" />
                            </div>
                            

                        </div>
                        <div>
                                <label className="label">
                                    <span className="label-text text-xl font-semibold"> Description</span>
                                </label>
                                <textarea className="w-full lg:rounded-none rounded-full py-3 px-6" name="description"  rows="5"></textarea>
                            </div>

                    </div>

                    <input className="w-full lg:rounded-none rounded-full bg-white mt-5 py-3 text-xl font-bold uppercase mb-3 cursor-pointer" type="submit" value="add a toy" />

                </div>
            </form>
        </div>
    );
};

export default AddToy;
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 lg:max-w-screen-2xl lg:p-0 px-5 m-auto mb-36 ">

            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <h3 className="md:text-5xl text-3xl font-bold text-white">excited to see you there</h3>
            </div>
            <form >
                <div className="bg-pink-500 p-8 h-fit rounded-xl shadow-xl hover:shadow-none duration-300">
                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="name" id="" placeholder="please enter your email" />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="text" name="photo" id="" placeholder="please enter your email" />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="email" name="email" id="" placeholder="please enter your email" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6 " type="password" name="password" id="" placeholder="please enter your password" />
                    </div>
                    <input className="w-full lg:rounded-none rounded-full bg-white mt-5 py-3 text-xl font-bold uppercase mb-3 cursor-pointer" type="submit" value="register" />
                    <div>
                        <Link to='/login' className="text-lg capitalize font-semibold">have an account? <span className="hover:text-white duration-300">please login</span></Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
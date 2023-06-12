import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";


const auth = getAuth();
const Register = () => {

    const { registerUser, setUser, user } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoUrl);

        if (!name || !email || !photoUrl || !password) {
            setError('Please fill in all fields');
            return;
        }

        if (!/^(?=.*[A-Za-z\d]).{6,}$/.test(password)) {
            setError('Invalid password! Password must be 6 characters long');
            return;
        }
        if ((name, email, photoUrl, password)) {
            registerUser(email, password)
                .then((result) => {
                    setUser({ ...user, displayName: name, photoURL: photoUrl })
                    console.log(result.user);
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photoUrl
                    })
                    form.reset();
                })

                .catch((error) => {
                    setError(error.message);
                })
        }
    };

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 w-11/12 mx-auto mb-36 ">

            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <div className="text-center">
                    <h3 className="md:text-4xl text-3xl font-bold text-white">excited to see you there</h3>
                    <div className="flex mt-5 justify-center">
                        <Link to='/login' className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-none rounded-lg ">go back</Link>
                        <p className="py-3 px-4 bg-white font-semibold text-xl capitalize md:rounded-none rounded-lg text-pink-500 ml-5">register</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleRegistration}>
                <div className="bg-pink-500 p-8 h-fit rounded-xl shadow-xl hover:shadow-none duration-300">
                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-lg py-3 px-6" type="text" name="name" placeholder="please enter your name" />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-lg py-3 px-6" type="text" name="photoUrl" placeholder="please enter your photo URL" />
                    </div>
                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-lg py-3 px-6" type="email" name="email" placeholder="please enter your email" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-lg py-3 px-6 " type="password" name="password" placeholder="please enter your password" />
                    </div>
                    <input className="w-full lg:rounded-none rounded-lg bg-white mt-5 py-3 text-xl font-bold uppercase mb-3 cursor-pointer" type="submit" value="register" />
                    <div>
                        <Link to='/login' className="text-lg capitalize font-semibold">have an account? <span className="hover:text-white duration-300">please login</span></Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
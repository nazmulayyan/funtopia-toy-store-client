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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 lg:max-w-screen-2xl lg:p-0 px-5 m-auto mb-36 ">

            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <h3 className="md:text-5xl text-3xl font-bold text-white">excited to see you there</h3>
            </div>
            <form onSubmit={handleRegistration}>
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
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6" type="email" name="email" placeholder="please enter your email" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input className="w-full lg:rounded-none rounded-full py-3 px-6 " type="password" name="password" placeholder="please enter your password" />
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
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { loginUser, handleGoogleSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (email.trim() === '' || password.trim() === '') {
            setError('Please enter both email and password.');
        } else {
            setError('');
            loginUser(email, password)
                .then(result => {
                    const from = location.state?.from || '/';
                    console.log(result.user);
                    Navigate(from); // Redirect to private route
                })
                .catch((error) => {
                    console.log(error.message);
                    setError('Login failed. Please check your credentials.');
                });
        }
    };

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 lg:max-w-screen-2xl lg:p-0 px-5 m-auto mb-36 ">

            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200">
                <h3 className="md:text-5xl text-3xl font-bold text-white">excited to see you there</h3>
            </div>
            <form onSubmit={handleLogin}>
                <div className="bg-pink-500 p-8 h-fit rounded-xl shadow-xl hover:shadow-none duration-300">
                    {error && <p className="text-pink-500 py-2 px-6 lg:rounded-none rounded-full bg-white">{error}</p>}
                    <div >
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input className="w-full py-3 px-6 lg:rounded-none rounded-full" type="email" name="email" placeholder="please enter your email" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input className="w-full py-3 px-6 lg:rounded-none rounded-full " type="password" name="password" placeholder="please enter your password" />
                    </div>
                    <input className="w-full lg:rounded-none rounded-full bg-white mt-5 py-3 text-xl font-bold uppercase mb-3 cursor-pointer" type="submit" value="login" />
                    <div>
                        <Link to='/register' className="text-lg capitalize font-semibold">New to funtopia? <span className="hover:text-white duration-300">please register</span></Link>
                        <div>
                            <p className="text-lg capitalize font-semibold items-center flex ">OR sing in with  <button onClick={handleGoogleSignIn}><FcGoogle className="text-3xl bg-white p-1 rounded-full ml-2 " /></button></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
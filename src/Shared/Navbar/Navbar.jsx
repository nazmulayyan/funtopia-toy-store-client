import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-pink-500 h-20 relative z-10">
            <div className="flex justify-between lg:max-w-screen-2xl lg:p-0 px-5 mx-auto items-center h-full">
                <div>
                    <Link to='/' className="md:text-3xl text-2xl font-bold">FUNTOPIA</Link>
                </div>
                <div>
                    <form >
                        <input type="text" placeholder="Search..." className="p-3 text-gray-700 rounded-full lg:rounded-none " name="search" />
                        <button type="submit" className="md:px-6 px-4 font-semibold text-gray-700 py-3 lg:rounded-none rounded-full md:ms-2 ms-1 bg-white">Search</button>
                    </form>
                </div>
                <div>
                    <ul className={`list-none lg:flex lg:static duration-500 lg-p-0 p-5 text-center -z-10 lg:space-y-0 space-y-3  absolute lg:bg-none bg-pink-500 ${open ? 'right-10 top-24' : 'right-10  -top-60 '}`}>
                        <li className="px-6 hover:border-b-4 pb-1 transition-all duration-150  border-white">
                            <Link className="font-bold text-xl text-white" to='/'>Home</Link>
                        </li>
                        <li className="px-6 hover:border-b-4 pb-1 transition-all duration-150  border-white">
                            <Link className="font-bold text-xl text-white" to='/about'>About</Link>
                        </li>
                        <li className="px-6 hover:border-b-4 pb-1 transition-all duration-150  border-white">
                            <Link className="font-bold text-xl text-white" to='/service'>Service</Link>
                        </li>
                        <li className="px-6 hover:border-b-4 pb-1 transition-all duration-150  border-white">
                            <Link className="font-bold text-xl text-white" to='/blog'>Blog</Link>
                        </li>
                        <li className="px-6 hover:border-b-4 pb-1 transition-all duration-150  border-white">
                            <Link className="font-bold text-xl text-white" to='/contact'>Contact</Link>
                        </li>
                    </ul>

                </div>
                <div onClick={() => setOpen(!open)} className="w-12 h-12 lg:hidden bg-white rounded-full text-pink-500 flex justify-center items-center font-bold text-2xl" >
                    <span>{open === true ? <RxCross2 /> : <RxHamburgerMenu />}</span>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
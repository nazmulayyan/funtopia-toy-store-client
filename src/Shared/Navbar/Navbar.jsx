import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveLink from "../../LayOut/ActiveLink/ActiveLink";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    const handleToggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    return (
        <nav className="bg-pink-500 h-20 relative z-10">
            <div className="flex justify-between w-11/12 mx-auto items-center h-full">
                {/* logo */}
                <div>
                    <Link to="/" className="md:text-3xl text-2xl font-bold cursor-pointer">
                        FUNTOPIA
                    </Link>
                </div>
                {/* search bar */}
                {/* <div className="md:hidden lg:block block">
                    <form>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-3 text-gray-700 rounded-full lg:rounded-none cursor-pointer"
                            name="search"
                        />
                        <button
                            type="submit"
                            className="md:px-6 px-4 font-semibold text-gray-700 py-3 lg:rounded-none rounded-full md:ms-2 ms-1 bg-white cursor-pointer"
                        >
                            Search
                        </button>
                    </form>
                </div> */}
                {/* menu item */}
                <div className="flex gap-2 items-center">
                    <div className="justify-end">
                        <ul
                            className={`list-none lg:flex items-center lg:static duration-500 lg-p-0 p-5 text-center -z-10 lg:space-y-0 space-y-3  absolute lg:bg-none bg-pink-500 ${open ? "right-10 top-24" : "right-10  -top-72 "
                                }`}
                        >
                            <li className="px-6 cursor-pointer font-bold text-xl  text-white">
                                <ActiveLink to="/">
                                    Home
                                </ActiveLink>
                            </li>
                            <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                <ActiveLink className="" to="/allToys">
                                    All Toys
                                </ActiveLink>
                            </li>
                            {user?.email || user?.providerData ? (
                                <>

                                    <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                        <ActiveLink className="" to="/myToys">
                                            My Toys
                                        </ActiveLink>
                                    </li>
                                    <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                        <ActiveLink className="" to="/addToy">
                                            Add a Toy
                                        </ActiveLink>
                                    </li>
                                </>
                            ) : (
                                <>

                                </>
                            )}
                            <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                <ActiveLink className="" to="/blog">
                                    Blog
                                </ActiveLink>
                            </li>

                            {user?.email || user?.providerData ? (
                                <li>
                                    <button onClick={handleLogOut} className="font-bold text-xl hover:text-gray-800 transition-all duration-150 text-white">
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <li className="px-6 cursor-pointer font-bold text-xl text-white">
                                    <ActiveLink to="/login">
                                        Login
                                    </ActiveLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    {/* user photo */}
                    <div>
                        {user?.photoURL && (
                            <div
                                className="relative hover:bg-gray-800 transition-all duration-150 bg-white p-1 rounded-full w-12 h-12 cursor-pointer"
                                onMouseEnter={handleToggleTooltip}
                                onMouseLeave={handleToggleTooltip}
                            >
                                {showTooltip && (
                                    <span className="absolute -bottom-14 -left-4 bg-gray-800 text-white px-2 py-1 rounded shadow w-fit">
                                        {user.displayName}
                                    </span>
                                )}
                                <img className="rounded-full " src={user.photoURL} alt="User Photo" />
                            </div>
                        )}
                    </div>
                    {/* hamburger menu */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="w-12 h-12 lg:hidden bg-white rounded-full text-pink-500 flex justify-center items-center font-bold text-2xl cursor-pointer"
                    >
                        <span>{open === true ? <RxCross2 /> : <RxHamburgerMenu />}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

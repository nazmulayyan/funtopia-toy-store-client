
const Footer = () => {
    return (
        <div className="bg-pink-500 py-20">

            <footer className=" grid lg:grid-cols-4 md:grid-cols-2 lg:gap-y-0 gap-y-4 grid-cols-1 w-11/12 mx-auto">
                <div>
                    <span className="text-gray-800 font-bold uppercase text-xl">Services</span>
                    <a className="link link-hover block text-white text-lg">Branding</a>
                    <a className="link link-hover block text-white text-lg">Design</a>
                    <a className="link link-hover block text-white text-lg">Marketing</a>
                    <a className="link link-hover block text-white text-lg">Advertisement</a>
                </div>
                <div>
                    <span className="text-gray-800 font-bold uppercase text-xl">Company</span>
                    <a className="link link-hover block text-white text-lg">About us</a>
                    <a className="link link-hover block text-white text-lg">Contact</a>
                    <a className="link link-hover block text-white text-lg">Jobs</a>
                    <a className="link link-hover block text-white text-lg">Press kit</a>
                </div>
                <div>
                    <span className="text-gray-800 font-bold uppercase text-xl">Legal</span>
                    <a className="link link-hover block text-white text-lg">Terms of use</a>
                    <a className="link link-hover block text-white text-lg">Privacy policy</a>
                    <a className="link link-hover block text-white text-lg">Cookie policy</a>
                </div>
                <div>
                    <span className="text-gray-800 font-bold uppercase text-xl">Newsletter</span>
                    <div className="form-control w-fit">
                        <label className="label">
                            <span className="text-white text-lg">Enter your email address</span>
                        </label>
                        <div className="flex">
                            <input type="email" placeholder="username@site.com" className="p-3 text-gray-700 rounded-lg w-3/4 " />
                            <button className="px-2 font-semibold text-gray-700 py-3 rounded-lg md:ms-2 ms-1 lg:mr-0 w-fit bg-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
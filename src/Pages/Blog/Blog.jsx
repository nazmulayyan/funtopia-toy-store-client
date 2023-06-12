import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const Blog = () => {
    useTitle('Blog')

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.map(blog => ({ ...blog, expanded: false }))))
    }, []);

    const toggleAnswer = (index) => {
        setBlogs(prevBlogs => {
            const updatedBlogs = [...prevBlogs];
            updatedBlogs[index] = { ...updatedBlogs[index], expanded: !updatedBlogs[index].expanded };
            return updatedBlogs;
        });
    };

    return (
        <div className="w-11/12 mx-auto mt-20 mb-36">
            
            <div className="bg-pink-500 h-96 flex justify-center items-center capitalize rounded-xl shadow-xl hover:shadow-none duration-200 my-10">
                <div className="text-center">
                    <h3 className="md:text-5xl text-3xl font-bold text-white">welcome to our awesome blog</h3>
                    <div className="flex mt-5 justify-center">
                        <Link to='/' className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg ">go back</Link>
                        <p className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg text-pink-500 ml-5">blog</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {blogs.map((blog, index) => (
                    <div key={index}>
                        <img className="w-full h-80 rounded-xl" src={blog.picture} alt="" />
                        <h3 className="text-2xl text-pink-500 font-bold py-5 ">{blog.question}</h3>
                        <p className="text-lg">
                            {blog.answer.length > 200 && !blog.expanded
                                ? `${blog.answer.substring(0, 200)}...`
                                : blog.answer}
                        </p>
                        {blog.answer.length > 200 && (
                            <button
                                onClick={() => toggleAnswer(index)}
                                className="text-white font-semibold mt-2 bg-pink-500 py-3 px-5 rounded-lg"
                            >
                                {blog.expanded ? "See Less" : "See More"}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;

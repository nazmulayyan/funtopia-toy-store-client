import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

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
        <div className="lg:max-w-screen-2xl lg:p-0 px-5 m-auto mb-36">
            <div className="bg-pink-500 md:h-96 h-60 flex items-center justify-center mt-10 mb-10 rounded-xl">
                <h3 className="text-white font-bold md:text-5xl text-3xl capitalize">welcome to our awesome blog</h3>
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
                                className="text-white font-semibold mt-2 bg-pink-500 py-3 px-5 md:rounded-none rounded-full"
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

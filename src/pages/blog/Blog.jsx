import { NavLink } from "react-router-dom";
import { RouteWrapper } from "../../lib";

import "./Blog.css";

const BlogPosts = [
    {
        title: "Title of blog post",
        description:
            "Short summary of post that will show when navigating the posts.",
        tags: ["C++", "Reverse Engineering", "Cryptography"],
        link: "link-to-blog-post",
    },
    {
        title: "Title of blog post",
        description:
            "Short summary of post that will show when navigating the posts.",
        tags: ["C++", "Reverse Engineering", "Cryptography"],
        link: "link-to-blog-post",
    },
];

const Blog = () => {
    const Component = (
        <>
            <div id="blog">
                {BlogPosts.map((post) => (
                    <div className="blog-post">
                        <h2>{post.title}</h2>
                        <div className="blog-tags">
                            {post.tags.map((tag) => (
                                <p>{tag}</p>
                            ))}
                        </div>
                        <div className="blog-description">
                            <p>{post.description}</p>
                            <NavLink to={post.link}>Read More</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

    return RouteWrapper({ Component: Component });
};

export default Blog;

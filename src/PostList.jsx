import React from "react";
import { useState, useEffect } from "react";
import CommentList from "./CommentList.jsx";
import "./PostList.css";

const PostList = ({ user }) => {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id} className="post-list__item">
                    <div className="post-list__wrapper">
                        <span className="post-list__title">{post.title}</span>
                        <br/>
                        <span className="post-list__body">{post.body}</span>
                        <button className="post-list__comments-button" onClick={() => setSelectedPost(post)}>
                            comments
                        </button>
                    </div>
                    {selectedPost?.id === post.id ? (
                        <CommentList post={selectedPost}/>
                    ) : (null)}
                </li>
            ))}
        </ul>
    );
};

export default PostList;
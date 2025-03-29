import React from "react";
import { useState, useEffect } from "react";
import "./CommentList.css";

const CommentList = ({ post }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, []);
    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.id} className="comment-list__item">
                    <div className="comment-list__user">
                        <p><strong>name:</strong> {comment.name}</p>
                        <p><strong>Email:</strong> {comment.email}</p>
                        
                    </div>
                    <p><strong></strong> {comment.body}</p>
                </li>
            ))}
        </ul>
    );
};

export default CommentList;
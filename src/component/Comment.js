import React from "react";



const Comment = ({author, text}) => {

    return (
        <>
            <h4>{text}</h4>
            <p>{author}</p>
        </>
    )
}

export default Comment;
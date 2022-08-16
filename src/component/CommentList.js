import React from "react";
import Comment from "./Comment"



const CommentList = ({comments}) => {

    const commentNodes = comments.map((comment, index)=>{
        return <Comment author={comment.author} text ={comment.text} key={index}/>
    })

    return (
        <>
         {commentNodes}

        </>




    )
}





export default CommentList;
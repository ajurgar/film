import React, {useState} from "react";
import CommentList from "../component/CommentList";
import CommentForm from "../component/CommentForm";


const CommentBox = () => {

    const [comments, setComments] = useState ([
        {
            id: 1,
            author: "Rick",
            text: "Crop rotation in the 14th century was considerably more widespread...."
        },
        {
            id:2,
            author: "Quin",
            text: "We're gonna need a bigger boat"
        },
        {
            id:3,
            author: "Alex",
            text: "Love this book"
        },
    ])

    const addComment = (submittedComment) => {
        submittedComment.id = Date.now();
        const updatedComments = [...comments, submittedComment];
        setComments(updatedComments);
    }
    return (
        <div>
            <h1>Comments</h1>
            <CommentList comments={comments} />

            

            <h2> Add a comment</h2>

            <CommentForm onCommentSubmit={(comment) => {addComment(comment)} }/>

        </div>

    )
}

export default CommentBox;
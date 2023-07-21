import "./comments.scss";
import { useEffect, useRef } from "react";
import { commentsData } from "../../config/data";
import SingleComment from "./SingleComment";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const Comments = () => {
    const { currentUser } = useContext(AuthContext)
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className="comments">
            <div className="write-comment">
                <img src={currentUser.userImg} alt="" />
                <input type="text" placeholder="write a comment" ref={inputRef} />
                <button>Send</button>
            </div>
            {commentsData.map(com => (
                <SingleComment comment={com} key={com.id} />
            ))}
        </div>
    )
}

export default Comments;
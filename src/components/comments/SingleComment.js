
const SingleComment = ({ comment: { desc, name, userId, profilePicture, commentDate } }) => {
    return (
        <div>
            <div className="comment-boxes">
                <div className="comment">
                    <img src={profilePicture} alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p>
                            {desc}
                        </p>
                    </div>
                    <span>
                        {commentDate}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SingleComment;
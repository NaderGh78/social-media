import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Comments from "../comments/Comments";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { commentsData } from "../../config/data"

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const Post = ({ post: { postId, postImg, postName, posTime, postDesc, postBg } }) => {

    const [commentIsOpen, setCommentIsOpen] = useState(false);

    const liked = false;

    //toggle the comment
    const commentToggle = () => {
        setCommentIsOpen(!commentIsOpen);
    }

    const handleClickLinks = () => {
        //make scroll top to page when we need to enter to it
        document.documentElement.scrollTo(0, 0);
    }

    return (
        <div className="postsBox">
            <div className="postTop">
                <div>
                    <Link to={`/profile/${postId}`}>
                        <img src={postImg} alt="" onClick={handleClickLinks} />
                    </Link>

                    <div>
                        <Link to={`/profile/${postId}`} style={{ textDecoration: "none" }}>
                            <h5 onClick={handleClickLinks}>{postName}</h5>
                        </Link>
                        <span>{posTime}</span>
                    </div>
                </div>
                <span><MoreHorizIcon /></span>
            </div>
            <div className="postMiddle">
                <p>{postDesc}</p>
                {postBg && <div><img src={postBg && postBg} alt="" /></div>}
            </div>
            <div className="postBottom">
                <span>
                    {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                    <h5>13 likes</h5>
                </span>
                <span>
                    <SmsOutlinedIcon onClick={commentToggle} />
                    <h5>{`${commentsData.length} comments`}</h5>
                </span>
                <span>
                    <ShareIcon />
                    <h5>share</h5>
                </span>
            </div>
            {commentIsOpen && <Comments />}
        </div>
    )
}

export default Post;

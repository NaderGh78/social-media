import "./posts.scss";
import { PostsData } from "../../config/data";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

import Post from "./Post";
const Posts = () => {
    return (
        <div className="posts">
            {PostsData.map(post => (
                <Post post={post} key={post.postId} />
            ))}
        </div>
    )
}

export default Posts;
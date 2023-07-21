import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaceIcon from "@mui/icons-material/Place";
import { useParams } from "react-router-dom";
import Post from "../../components/posts/Post";
import { PostsData } from "../../config/data";
import "./profile.scss";
/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const Profile = () => {
  const { id } = useParams();

  //get single user info in order to draw ui for every user data
  var getSingleUserInfo = PostsData.find((e) => e.postId === Number(id));

  return (
    <div className="profile">
      <div className="banner">
        <img src={getSingleUserInfo.userProfileBg} alt="" />
      </div>
      <div className="container">
        <div className="profile-info">
          <div className="img-box">
            <img src={getSingleUserInfo.postImg} alt="" />
            <h4>{getSingleUserInfo.postName}</h4>
          </div>
          <div className="center">
            <div className="icons">
              <ul>
                {getSingleUserInfo.userSocialIcons &&
                  getSingleUserInfo.userSocialIcons.map((icon, i) => {
                    const Icon = icon;
                    return (
                      <li key={i}>
                        <Icon />
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="address">
              <ul>
                <li>
                  <PlaceIcon />
                  usa
                </li>
                <li>
                  <LanguageIcon />
                  naderweb.com
                </li>
              </ul>
              <button>Follow</button>
            </div>
            <div className="right">
              <ul>
                <li>
                  <EmailOutlinedIcon />
                </li>
                <li>
                  <MoreVertIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="posts">
          {PostsData.filter((dT) => dT.postUserId === Number(id)).map(
            (post) => {
              return <Post post={post} key={post.postId} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

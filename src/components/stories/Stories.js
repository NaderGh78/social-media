import './stories.scss';
import { StoriesData } from "../../config/data";
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import SingleStory from "./SingleStory";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='stories'>
      <div className="storieBoxImgs">
        <div className="storieImg">
          <img src={currentUser.userImg} alt="" />
          <span>+</span>
        </div>
        {StoriesData.map(story => (
          <SingleStory story={story} key={story.id} />
        ))}
      </div>
    </div>
  )
}

export default Stories;
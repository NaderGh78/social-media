import "./share.scss";
import AddImg from "../../assets/img.png";
import addPlace from "../../assets/map.png";
import Tagfriends from "../../assets/friend.png";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const Share = () => {
    const { currentUser } = useContext(AuthContext);
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="share">
            <div className="top">
                <img src={currentUser.userImg} alt="" />
                <input type="text" placeholder={`what's on your mind ${currentUser.name}?`} ref={inputRef} />
            </div>
            <hr />
            <div className="bottom">
                <ul>
                    <li>
                        <img src={AddImg} alt="" />
                        <span>add image</span>
                    </li>
                    <li>
                        <img src={addPlace} alt="" />
                        <span>add place</span>
                    </li>
                    <li>
                        <img src={Tagfriends} alt="" />
                        <span>tag friends</span>
                    </li>
                </ul>
                <button>Share</button>
            </div>
        </div>
    )
}

export default Share;
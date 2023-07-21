import "./leftBar.scss"; 
import Friends from "../../assets/1.png";
import Group from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memory from "../../assets/5.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const LeftBAr = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="user">
          <img src={currentUser.userImg} alt="" />
          <span>{currentUser.name}</span>
        </div>
        <div className="items">
          <ul>
            <li>
              <img src={Friends} alt="" />
              <span>Friends</span>
            </li>
            <li>
              <img src={Group} alt="" />
              <span>Group</span>
            </li>
            <li>
              <img src={Market} alt="" />
              <span>Marketplace</span>
            </li>
            <li>
              <img src={Watch} alt="" />
              <span>Watch</span>
            </li>
            <li>
              <img src={Memory} alt="" />
              <span>Memories</span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="items">
          <ul>
            <li>
              <img src={Friends} alt="" />
              <span>Friends</span>
            </li>
            <li>
              <img src={Group} alt="" />
              <span>Group</span>
            </li>
            <li>
              <img src={Market} alt="" />
              <span>Marketplace</span>
            </li>
            <li>
              <img src={Watch} alt="" />
              <span>Watch</span>
            </li>
            <li>
              <img src={Memory} alt="" />
              <span>Memories</span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="items">
          <ul>
            <li>
              <img src={Friends} alt="" />
              <span>Friends</span>
            </li>
            <li>
              <img src={Group} alt="" />
              <span>Group</span>
            </li>
            <li>
              <img src={Market} alt="" />
              <span>Marketplace</span>
            </li>
            <li>
              <img src={Watch} alt="" />
              <span>Watch</span>
            </li>
            <li>
              <img src={Memory} alt="" />
              <span>Memories</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LeftBAr;
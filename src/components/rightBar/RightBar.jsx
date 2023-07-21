import "./rightbar.scss";
import UserInfo from "../../assets/hero.jpg";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const RightBar = () => {

  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <h2>Suggestions For You</h2>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <h5>Jane Doe</h5>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <h5>Jane Doe</h5>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <h2>Latest Activities</h2>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <h5>
                <span>Jane Doe</span>
                <p>hello lolo.</p>
              </h5>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <h5>
                <span>Jane Doe</span>
                <p>hello lolo.</p>
              </h5>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <h5>
                <span>Jane Doe</span>
                <p>hello lolo.</p>
              </h5>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <h5>
                <span>Jane Doe</span>
                <p>hello lolo.</p>
              </h5>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <h2>Online Friends</h2>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <div className="online"></div>
              <h5>Jane Doe</h5>
            </div>
          </div>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <div className="online"></div>
              <h5>Jane Doe</h5>
            </div>
          </div>
          <div className="user">
            <div className="usrInfo">
              <img src={UserInfo} alt="" />
              <div className="online"></div>
              <h5>Jane Doe</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar;
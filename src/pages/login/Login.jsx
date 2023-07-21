import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const Login = () => {
  const {login } = useContext(AuthContext);

  return (
    <div className="login">
      <h4>to see the project ,please just on [Login button]</h4>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <span>Don't you have an account ?</span>
          <Link to="/Register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h3>Login</h3>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="passowrd" />
            <button onClick={login}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

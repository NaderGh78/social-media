import './register.scss';
import { Link } from 'react-router-dom';

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h3>Register</h3>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="passowrd" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <span>Do you have an account ?</span>
          <Link to="/Login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register;
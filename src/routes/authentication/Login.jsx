import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles/login.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup} from "firebase/auth";
import { Fade } from "react-awesome-reveal";


const Login = () => {

const {signIN, setUser} = useContext(AuthContext)

const googleProvider = new GoogleAuthProvider();

const location = useLocation()
const navigate = useNavigate();

const handleSignIN = e =>{

  e.preventDefault();

  const form = new FormData(e.currentTarget);
  const email = form.get("email");
  const password = form.get("password");
console.log(email, password);

signIN(email, password)
.then((result) =>{
  toast.success('Welcome back')
  console.log(result);
  navigate(location?.state ? location.state : "/");
  
}).catch((error)=>{
  console.log(error);
  toast.error('something is going wrong')
})

e.target.reset()


}

const handleGoogleLogin = () =>{
signInWithPopup(auth, googleProvider)
.then(result =>{
    
  setUser(result.user)
  toast.success('log in successfully')
  navigate(location?.state ? location.state : "/");
})
.catch(error=> {
  toast.error('something is wrong')
  console.log(error);
})
}


  return (
    <Fade duration={5000}>
      <div className="flex justify-center">
      <div className="login-container">
    <div className="heading">Sign In</div>
    <form onSubmit={handleSignIN}  className="form-section">
      <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>

      
      <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
      <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
      <input className="login-button" type="submit" value="Sign In"/>
      
    </form>
    <div className="social-account-container">
        <span className="title">Or Sign in with</span>
        <div className="social-accounts">
          <button 
          onClick={handleGoogleLogin}
          className="social-button google">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg></button>
          <button className="social-button apple">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
            </svg>
          </button>
          <button className="social-button twitter">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </button>
        </div>
      </div>
      <p className="agreement">Do not  have an account? <Link to="/register" > <span className="underline">Register</span>  </Link>  </p>
  </div>
    </div>
    </Fade>
  );
};

export default Login;

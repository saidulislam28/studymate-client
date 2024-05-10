import { Link } from "react-router-dom";
import "./styles/login.css";
const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="login-container max-w-xl">
    <div className="heading">Register </div>
    <form action="" className="form-section">


      <input required="" className="input" type="text" name="Name" id="email" placeholder="Name"/>


      <input required="" className="input" type="text" name="photo" id="email" placeholder="Photo URL"/>


      <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
     
     
     
     
      <input required="" className="input" type="password" name="password" id="password" placeholder="Password"/>
     
     
     

      <input className="login-button" type="submit" value="Sign In"/>
      
    </form>
   
      <p className="agreement">Already have an account? <Link to="/login" > <span className="underline">Signin</span>  </Link>  </p>
  </div>
    </div>
  );
};

export default Register;

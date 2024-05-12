import { Link } from "react-router-dom";
import "./styles/login.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

const {signUp, updateProfileinfo} = useContext(AuthContext);


    const handleSignUp = e =>{

        e.preventDefault()
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');
    console.log(name, email, password, photo);


    signUp(email, password)
    .then(result =>{
      console.log(result.user);
      
      updateProfileinfo(name, photo)
      .then(alert('succsful'))
      .catch(error => {
        console.log(error);
      })

    })
    .catch(err =>{
      console.log(err);
    })
    console.log(name, email, typeof(password), photo);
    e.target.reset();
    }



  return (
    <div className="flex justify-center">
      <div className="login-container max-w-xl">
    <div className="heading">Register </div>
    <form onSubmit={handleSignUp} className="form-section">
    


      <input required="" className="input" type="text" name="name"  placeholder="Name"/>


      <input required="" className="input" type="text" name="photo"  placeholder="Photo URL"/>


      <input required="" className="input" type="email" name="email" placeholder="E-mail"/>
     
     
     
     
      <input required="" className="input" type="password" name="password" placeholder="Password"/>
     
     
     

      <input className="login-button" type="submit" value="Sign In"/>
      
    </form>
   
      <p className="agreement">Already have an account? <Link to="/login" > <span className="underline">Signin</span>  </Link>  </p>
  </div>
    </div>
  );
};

export default Register;

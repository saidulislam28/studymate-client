import { Link } from "react-router-dom";
import "./styles/login.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;


const Register = () => {

const {signUp, updateProfileinfo} = useContext(AuthContext);


    const handleSignUp = e =>{

        e.preventDefault()
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');


    if(password.length <8){
      return toast.error('Password must be at least 6 characters long.')
     ;
  
    }

    
    if(!uppercaseRegex.test(password)){
      return toast.error('Password must contain at least one uppercase letter.')
      
    }
    if(!lowercaseRegex.test(password)){
      return toast.error('Password must contain at least one lowercase letter.')
     
    }





    console.log(name, email, password, photo);


    signUp(email, password)
    .then(result =>{
      toast.success('succcessfully registered')
      console.log(result.user);
      
      updateProfileinfo(name, photo)
      .then()
      .catch(error => {
       toast.error('something went wrong')
       console.log(error);
      })

    })
    .catch(err =>{
      toast.error("something went wrong")
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

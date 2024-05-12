import { useContext } from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {

const {ami} = useContext(AuthContext);

console.log(ami);
  return (
    <div>

      <Banner></Banner>


      <Feature></Feature>

      <Faq></Faq>
     
    </div>
  );
};

export default Home;
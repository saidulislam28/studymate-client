import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Marquee className="bg-gray-300 rounded-xl my-5 container mx-auto">
        <span className="mr-10">Stay focused, stay determined, and keep pushing forward. You have got
        this!</span>
      </Marquee>

      <Feature></Feature>

      <Faq></Faq>
    </div>
  );
};

export default Home;

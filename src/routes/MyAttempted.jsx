import { useLoaderData } from "react-router-dom";
import Assignments from "./Assignments";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AttemptedCard from "../components/AttemptedCard";

const MyAttempted = () => {
const attemptedData = useLoaderData();
const {user } = useContext(AuthContext);
 
const myAttemptedData = attemptedData.filter(assignment => assignment?.email === user?.email );

console.log(myAttemptedData);




  return (
    <div className="max-w-4xl my-10 mx-auto">

      {
        myAttemptedData.map(assignment => <AttemptedCard key={assignment._id}
        assignment={assignment}
        ></AttemptedCard> )
      }


     
    </div>
  );
};

export default MyAttempted;

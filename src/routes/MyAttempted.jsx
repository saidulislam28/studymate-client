import { useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import AttemptedCard from "../components/AttemptedCard";

const MyAttempted = () => {
const attemptedData = useLoaderData();
const {user } = useContext(AuthContext);
 
const myAttemptedData = attemptedData.filter(assignment => assignment?.email === user?.email );

console.log(myAttemptedData);




  return (
    <div className="max-w-4xl my-10 mx-auto grid grid-cols-1 md: grid-cols-2 gap-5">

      {
        myAttemptedData.map(assignment => <AttemptedCard key={assignment._id}
        assignment={assignment}
        ></AttemptedCard> )
      }


     
    </div>
  );
};

export default MyAttempted;

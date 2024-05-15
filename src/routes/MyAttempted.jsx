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
   <div className="container mx-auto min-h-[500px] border border-cyan-500 p-5">
 <h1 className="text-center font-bold text-3xl my-10">You can find your submitted  assignments result <br /> here and you can track you submission</h1>
 <div className="divider"></div>

     <div className="max-w-4xl my-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

{
  myAttemptedData.map(assignment => <AttemptedCard key={assignment._id}
  assignment={assignment}
  ></AttemptedCard> )
}





</div>
   </div>
  );
};

export default MyAttempted;

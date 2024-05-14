import { useLoaderData } from "react-router-dom";
import PendingCard from "../components/PendingCard";

const PendingAssignments = () => {
  const data = useLoaderData();
  // console.log(data);

  const pendingData = data.filter((takeData) => (takeData.status == "Pending"));



  console.log(pendingData.length);

  return (
    <div className="container mx-auto my-10 border">

      <h1 className="font-bold text-4xl opacity-50 my-5 text-center">All the pending assignment is here </h1>
     <p className="text-end my-5 "><span className="bg-sky-200 px-2 py-1 rounded-xl mr-4">Pending assignment : {pendingData.length}</span></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pendingData.map((pending) => (
          <PendingCard key={pending._id} pending={pending}></PendingCard>
        ))}
      </div>
    </div>
  );
};

export default PendingAssignments;

import { useLoaderData } from "react-router-dom";
import PendingCard from "../components/PendingCard";

const PendingAssignments = () => {
  const data = useLoaderData();
  // console.log(data);

  const pendingData = data.filter((takeData) => (takeData.status = "pending"));

  console.log(pendingData.length);

  return (
    <div className="container mx-auto my-10">
     <h5 className="text-end my-5">Pending assignment : {data.length}</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pendingData.map((pending) => (
          <PendingCard key={pending._id} pending={pending}></PendingCard>
        ))}
      </div>
    </div>
  );
};

export default PendingAssignments;

import { Link } from "react-router-dom";

const PendingCard = ({pending}) => {

  const {_id} = pending;

  console.log(_id);




  return ( <div className="shadow-2xl  flex justify-center items-start border w-full lg:w-72 bg-base-100 flex-grow">
  <div className="card-body">
  <h2 className="card-title text-2xl underline">{pending.title}</h2>
    
    <p className="font-semibold">
    Name : <span className="">{pending.name}</span>
    </p>
    <p className="font-semibold">
     Status : <span>{pending.status}</span>
    </p>
    <p className="font-semibold">
     Marks : <span>{pending.marks}</span>
    </p>
    <Link to={`/takeAssignment/${_id}`}>
    <button className="btn">Give mark</button>
    </Link>
  </div>
</div>
  );
};

export default PendingCard;
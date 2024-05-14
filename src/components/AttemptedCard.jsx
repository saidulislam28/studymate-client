
const AttemptedCard = ({assignment}) => {
  return (
    <div className="min-h-[300px] shadow-2xl  flex justify-center items-start border w-72 bg-base-100 ">
    <div className="card-body">
    <h2 className="card-title text-2xl underline">{assignment.title}</h2>
      
      <p>
       Status : <span>{assignment.status}</span>
      </p>
      <p>
       Marks : <span>{assignment.marks}</span>
      </p>
      <p>
       Your obtained mark: {assignment.givenMark ? <span>{assignment.givenMark}</span> : ""}
      </p>
      <p>
      Feedback: <span>{assignment.givenMark ? <span>{assignment.feedback}</span> : ""}</span>
      </p>
      {
        assignment.status == "complete"? <h5 className="mt-10 font-bold text-green-500 text-center">Assignment Marked</h5> : "" 
      }
    </div>
  </div>
  );
};

export default AttemptedCard;
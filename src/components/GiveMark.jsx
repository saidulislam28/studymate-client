import { useLoaderData, useParams } from "react-router-dom";

const GiveMark = () => {


const assignment = useLoaderData()

const {id} = useParams()
const myAssignment = assignment.find(data => data._id === id )





  return (
    <div className="border max-w-xl mx-auto flex flex-col p-5">
     <div className="flex flex-col gap-1 mb-2">
     <label htmlFor="">PDF LINK</label>
      <input type="text" value={myAssignment.filePath} className="input input-bordered input-primary w-full " />
     </div>
     <div className="flex flex-col gap-1 mb-2">
     <label htmlFor="">Notes</label>
      <input type="text" value={myAssignment.notes} className="input input-bordered input-primary w-full" />
     </div>
     <div className="flex flex-col gap-1 mb-2">
     <label htmlFor="">Mark</label>
      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
     </div>
     <div className="flex flex-col gap-1 mb-2">
      <label htmlFor="">Feedback</label>
     <textarea className="textarea textarea-success w-full" placeholder="Bio"></textarea>
     </div>
     <input type="submit" className="btn mt-4" value="Give mark" />

      
    </div>
  );
};

export default GiveMark;
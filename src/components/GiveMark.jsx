import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";

const GiveMark = () => {
  const assignment = useLoaderData();

  const {user} = useContext(AuthContext);

  const { id } = useParams();
  const myAssignment = assignment.find((data) => data._id === id);

  const handleGiveMark = (e) => {
    e.preventDefault();

    if(user?.email !== myAssignment?.email){
      const form = e.target;
      const givenMark = form.givenMark.value;
      const feedback = form.feedback.value;
      const status = "complete";
  
      const givemarkFeedback = {
        givenMark,
        feedback,
        status,
      };
  
      fetch(`http://localhost:5000/takeAssignment/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(givemarkFeedback),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) toast.success("Assignment marked");
        });
    }else{
      toast.error('You did not have the permission')
    }
   

      e.target.reset();

    // console.table(givenMark, feedback, status);
  };

  return (
    <form onSubmit={handleGiveMark}>
      <div className="border max-w-xl mx-auto flex flex-col p-5">
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">PDF LINK</label>
          <input
            type="text"
            readOnly
            defaultValue={myAssignment.filePath}
            className="input input-bordered input-primary w-full "
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Notes</label>
          <input
            type="text"
            readOnly
            defaultValue={myAssignment.notes}
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Mark</label>
          <input
            type="text"
            name="givenMark"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="flex flex-col gap-1 mb-2">
          <label htmlFor="">Feedback</label>
          <textarea
            name="feedback"
            className="textarea textarea-success w-full"
            placeholder="Bio"
          ></textarea>
        </div>
        <input type="submit" className="btn mt-4" value="Give mark" />
      </div>
    </form>
  );
};

export default GiveMark;

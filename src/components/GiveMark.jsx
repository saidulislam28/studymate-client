import { useLoaderData, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const GiveMark = () => {
  const assignment = useLoaderData();

  const { id } = useParams();
  const myAssignment = assignment.find((data) => data._id === id);

  const handleGiveMark = (e) => {
    e.preventDefault();
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

    console.table(givenMark, feedback, status);
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

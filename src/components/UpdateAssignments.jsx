import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateAssignments = () => {
  const { id } = useParams();

  const [assignment, setAssignment] = useState([]);

  const {
    title,
    email,
    description,
    marks,
    thumbnailImageUrl,
    difficultyLevel,
    dueDate,
  } = assignment;

  useEffect(() => {
    fetch(`http://localhost:5000/updateAssignments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignment(data);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const thumbnailImageUrl = form.thumbnailImageUrl.value;
    const difficultyLevel = form.difficultyLevel.value;
    const dueDate = form.dueDate.value;

    const assignmentInfo = {
      title,
      description,
      marks,
      thumbnailImageUrl,
      difficultyLevel,
      dueDate,
    };

    fetch(`http://localhost:5000/updateAssignments/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) console.log("update successful");
      });

    console.log(
      title,
      description,
      marks,
      thumbnailImageUrl,
      difficultyLevel,
      dueDate
    );
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Account settings
      </h2>

      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200">Title</label>
            <input
              defaultValue={title}
              name="title"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Description
            </label>
            <input
              defaultValue={description}
              name="description"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Thumbnail Image
            </label>
            <input
              defaultValue={thumbnailImageUrl}
              name="thumbnailImageUrl"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200">
              Difficulty Level
            </label>
            <input
              defaultValue={difficultyLevel}
              name="difficultyLevel"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">Marks</label>
            <input
              defaultValue={marks}
              name="marks"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">Due Date</label>
            <input
              defaultValue={dueDate}
              name="dueDate"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200">Email</label>
            <input
              value={email}
              className="block w-full  opacity-50 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateAssignments;

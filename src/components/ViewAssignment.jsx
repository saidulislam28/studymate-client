import { useLoaderData, useParams } from "react-router-dom";
import "./cssFiles/button.css";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ViewAssignment = () => {

  const {user} = useContext(AuthContext)
  const assignment = useLoaderData();
  const { id } = useParams();

  const myAssignment = assignment.find((assignment) => assignment._id === id);

  const [filePath, setFilePath] = useState(null);

  const titles = myAssignment.title;
  const mark = myAssignment.marks;

  // console.log(title, marks);

  // console.log(myAssignment);

  // const myAssignment = {
  //   email,
  //   title,
  //   description,
  //   marks,
  //   thumbnailImageUrl,
  //   difficultyLevel,
  //   dueDate
  // }

  const handleTakeAssignment = e =>{
    e.preventDefault();

    const form = e.target;
    const notes = form.notes.value;
    const email = user.email;
    const name = user.displayName;
    const status = 'Pending';
    const marks = mark;
    const title = titles;
    const filePath = form.file.value;

    console.log(filePath);



    

   

    const takeAssInfo = {
      notes, email, status, filePath, marks , title , name
    }
   




    if(user.email !== myAssignment.email){
      fetch('http://localhost:5000/takeAssignment',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(takeAssInfo)
      })
      .then(res=> res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
         toast.success('submitted successfully');
        }
      })
      .catch(error =>{
        toast.error('something you did wrong')
      })
    }else{
      toast.error('you do not have the permission , try another one')
    }
   e.target.reset();

  }

  return (
    <div className="my-10 container mx-auto max-w-4xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 pb-12">
      <img
        className="object-cover w-full h-64"
        src={myAssignment.thumbnailImageUrl}
        alt="Article"
      />

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            assignment
          </span>
          <p
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
          >
            {myAssignment.title}
          </p>
          <p className="mt-2 text-m text-gray-600 dark:text-gray-400">
            {myAssignment.description}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex flex-col items-start">
            <div className="flex  items-center">
              <p>
                Remaining Date:{" "}
                <span className="mx-1 text-s text-gray-600 dark:text-gray-300">
                  {" "}
                  {myAssignment.dueDate}
                </span>{" "}
              </p>
            </div>
            <p>
              Difficulty:{" "}
              <span className="mx-1 text-s text-gray-600 dark:text-gray-300">
                {" "}
                {myAssignment.difficultyLevel}
              </span>{" "}
            </p>
            <p>
              Marks:{" "}
              <span className="mx-1 text-s text-gray-600 dark:text-gray-300">
                {" "}
                {myAssignment.marks}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-end">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="style-btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Take Assignment
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              {/* cross button  */}
            <div className="flex justify-end">
                <form method="dialog">
                 
                  <button className="btn ">X</button>
                </form>
              </div>
              <form onSubmit={handleTakeAssignment}>

              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-300">
                  PDF
                </label>

                {/* <input
                id="file"
                name="file"
                  type="file"
                  className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                /> */}
                <input name="file" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
              </div>
              <div>
                <label className="block text-sm text-gray-500 dark:text-gray-300">
                Quick Notes
                </label>

                <textarea

                required

                name="notes"
                  placeholder="text here"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                ></textarea>

                
              </div>

              <input className="btn my-5" type="submit" value="Submit" />
             



              </form>
              
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;

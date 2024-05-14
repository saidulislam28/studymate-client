import { Link } from "react-router-dom";
import "./cssFiles/card.css";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";




const AssignmentCard = ({ assignment }) => {

  const {user} = useContext(AuthContext);

  const {_id, email, title, description, marks, thumbnailImageUrl, difficultyLevel, dueDate} = assignment;

  // console.log(user?.email, email);


  const handleDelete = _id =>{
    if(user?.email === email){
      console.log('operation going on');
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result)=>{
        if(result.isConfirmed){
          fetch(`http://localhost:5000/assignments/${_id}`, {
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your added assignment has been deleted.",
                icon: "success",
              })
            }
          })
        }
      })
    }else{
      console.log('not going on');
    }
  }







const formattedDueDate = new Date(dueDate).toLocaleDateString();

  return (
    <div className="card">
      <img src={thumbnailImageUrl} alt="" />
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">
          {description}
        </p>
        <p className="mt-2">Assignment Marks: <span className="font-semibold text-black">{marks}</span></p>
        <p className="mt-2">Dificulty Level: <span className="font-semibold text-black">{difficultyLevel}</span></p>
        <p className="mt-2">Due Date: <span className="font-semibold text-black">{formattedDueDate}</span></p>
        <div className="mt-2">
          
          <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-500 text-white">Delete</button>
          
         
          
         <Link to={`/updateAssignments/${_id}`}>
         
         <button 
          className="btn btn-primary">Update</button>
         </Link>
         <Link to={`/assignments/${_id}`}>
         
         <button
          className="underline ml-4 font-semibold text-green-400 btn">view..</button>
         </Link>
          
          
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;

import { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState("");

  useEffect(() => {
    fetch("https://study-mate-server-eight.vercel.app/assignments")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);
  const handleDifficultyLevelChange = (event) => {
    setSelectedDifficultyLevel(event.target.value);
  };

  const filteredAssignments = selectedDifficultyLevel && selectedDifficultyLevel !== "All"
  ? assignments.filter(
      (assignment) => assignment.difficultyLevel.toLowerCase() === selectedDifficultyLevel.toLowerCase()
    )
  : assignments;

    

  return (
    <div className="border container mx-auto  my-10 p-5 space-y-5 rounded-xl">

<h1 className=" text-2xl lg:text-4xl font-bold text-center font-serif opacity-40">Explore Engaging Assignments</h1>

<p className="font-semibold opacity-50 text-center">Welcome to our platform dedicated to helping you excel in your studies. <br /> Here, you will find a wide array of thought-provoking assignments designed to challenge and inspire. </p>
<p className="text-center underline opacity-30">(click or hover on the images)</p>



      <div className="flex justify-end">

      <select
      onChange={handleDifficultyLevelChange}
      value={selectedDifficultyLevel}
      name='difficultyLevel' className='rounded-md my-5 bg-teal-400 px-2 py-1'>
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
      </div>

      <div className="container border mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {filteredAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default Assignments;

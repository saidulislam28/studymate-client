import { useEffect, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/assignments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div>
      <div>

      <select
      onChange={handleDifficultyLevelChange}
      value={selectedDifficultyLevel}
      name='difficultyLevel' className='rounded-md my-5'>
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

import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const CreateAssignment = () => {

  const [dueDates, setDueDates] = useState(null);

  const handleDateChange = (date) => {
    setDueDates(date);
  };



  const handleSubmitAssignment = event =>{
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const marks = form.elements.marks.value;
    const title = form.elements.title.value;
    const thumbnailImageUrl = form.elements.thumbnailImageUrl.value;
    const description = form.elements.description.value;
    const difficultyLevel = form.elements.difficultyLevel.value;
    const dueDate = dueDates;

    const assignmentInfo = {
      email,
      title, 
      description,
      marks,
      thumbnailImageUrl,
      difficultyLevel,
      dueDate
    }

    fetch('http://localhost:5000/assignments',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(assignmentInfo)
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        toast.success('you create a assignment successfully');
      }
    })
    .catch(error =>{
      toast.error('something is wrong');
    })
    

event.target.reset();

    console.table(email,marks, title, thumbnailImageUrl, description, difficultyLevel, dueDate);


  }



  return (
    <section className="p-6 bg-gray-500 dark:bg-gray-100 text-gray-50 dark:text-gray-900 container mx-auto my-10 border">

      <h1 className='font-bold text-3xl text-center text-white my-6 font-thin'>Create your Own Assignment here</h1>

      





      <form
      onSubmit={handleSubmitAssignment}
        className="container flex flex-col mx-auto space-y-12"
      >
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-400 dark:bg-gray-50">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Email
              </label>
              <input required
                name='email'
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-200 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
               Marks
              </label>
              <input required
              name='marks'
                type="text"
                placeholder="Marks"
                className="w-full  p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-200 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Assignment Title
              </label>
              <input required
              name='title'
                type="text"
                placeholder="title"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-200 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Thumbnail Image URL
              </label>
              <input required
              name='thumbnailImageUrl'
                type="text"
                placeholder="URL"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-200 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Description
              </label>
              <input required
              name='description'
                type="text"
                placeholder="description"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-200 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="dueDate" className="text-sm mr-2">
                Due Date
              </label>
              <DatePicker
                id="dueDate"
                selected={dueDates}
                onChange={handleDateChange}
                minDate={new Date()} // Set minimum date to today
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Due Date"
                className="w-full pl-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-300 dark:text-white focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-2 text-gray-600 font-semibold ">
              <label htmlFor="address" className="text-sm text-white mr-4 ">
                Difficulty level
              </label>
              <select name='difficultyLevel' className='rounded-md'>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
             
            </div>


          </div>
        </div>
            <input className="btn text-xl" type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default CreateAssignment;

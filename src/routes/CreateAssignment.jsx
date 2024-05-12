import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const CreateAssignment = () => {

  const [dueDate, setDueDate] = useState(null);

  const handleDateChange = (date) => {
    setDueDate(date);
  };



  return (
    <section className="p-6 bg-gray-500 dark:bg-gray-100 text-gray-50 dark:text-gray-900 container mx-auto">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-400 dark:bg-gray-50">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Email
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="Email"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
               Marks
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="Marks"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Assignment Title
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="title"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Thumbnail Image URL
              </label>
              <input
                id="email"
                type="email"
                placeholder="URL"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Description
              </label>
              <input
                id="address"
                type="text"
                placeholder="description"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 dark:text-gray-50 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-700 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="dueDate" className="text-sm mr-2">
                Due Date
              </label>
              <DatePicker
                id="dueDate"
                selected={dueDate}
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
              <select className='rounded-md'>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
             
            </div>


          </div>
        </fieldset>
            <input className="btn text-xl" type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default CreateAssignment;

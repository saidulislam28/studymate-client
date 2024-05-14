
const Faq = () => {


  return (
    <div>
      <div className="border my-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              FAQ
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
           
          Explore Common Queries About Assignments
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Our FAQ section is designed to provide clarity and assistance to ensure a smooth and hassle-free experience throughout your academic journey. 
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto border p-5">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              How do I submit an assignment?
              </p>
              <p className="text-gray-700">
              To submit an assignment, log in to your account and navigate to the assignment page. Click on the <span className="font-bold">Take Assignment</span> button and follow the instructions to upload your assignment file and provide any necessary notes. Once done, click the submit button.
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              Can I edit my submitted assignment?
              </p>
              <p className="text-gray-700">
              No, once an assignment is submitted, it cannot be edited. Make sure to review your assignment thoroughly before submission.
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              How can I view my submitted assignments?
              </p>
              <p className="text-gray-700">
              You can view your submitted assignments on your dashboard or profile page. They will be listed under the Submitted Assignments section.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
              How will I know if my assignment has been graded?
              </p>
              <p className="text-gray-700">
              You will receive a notification via email or on the platform when your assignment has been graded. You can also check your dashboard for any updates on your submitted assignments.
                
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              What should I do if I encounter technical difficulties while submitting my assignment?
              </p>
              <p className="text-gray-700">
              If you encounter any technical difficulties while submitting your assignment,<br />
                <br /> please reach out to our support team for assistance. Provide as much detail as possible about the issue you are facing for a quicker resolution.
                
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
              Is there a deadline for submitting assignments?
              </p>
              <p className="text-gray-700">
              Yes, each assignment has a specified deadline. Make sure to submit your assignment before the deadline to avoid any penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
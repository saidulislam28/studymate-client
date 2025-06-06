
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="border my-10 relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-400 uppercase rounded-full bg-teal-accent-400">
            join with us
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl sm:leading-none">
          Empower Your Learning 
            <br className="hidden md:block" />
            Journey with StudyMate
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 md:text-lg opacity-50">
          Welcome to StudyMate, your ultimate destination for collaborative learning! Join hands with friends, dive into engaging assignments, and unleash your potential together. Lets make learning an adventure!
          </p>
          <div className="flex items-center">
            <p
              className="inline-flex items-center btn  bg-gray-400 text-white justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center btn  bg-gray-400 text-white font-semibold transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
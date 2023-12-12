import React from "react"

const Portfolio = () => {
  return (
    <div>
      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10" />
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg mx-auto mb-8 text-center md:mb-16">
              <span className="font-bold text-primary-500">
                Dolor sit amet consectutar
              </span>
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl font-heading">
                Latest Projects
              </h2>
              <div className="inline-flex flex-wrap py-1 text-sm bg-white rounded sm:px-1 sm:space-x-1">
                <button className="w-full px-4 py-2 mx-1 mb-1 font-bold text-gray-500 transition duration-200 rounded sm:w-auto sm:mb-0 sm:mx-0 hover:bg-gray-50 hover:text-gray-900 hover:shadow focus:outline-none">
                  Category 1
                </button>
                <button className="w-full px-4 py-2 mx-1 mb-1 font-bold text-gray-900 transition duration-200 rounded shadow sm:w-auto sm:mb-0 sm:mx-0 bg-gray-50 focus:outline-none">
                  Category 2
                </button>
                <button className="w-full px-4 py-2 mx-1 mb-1 font-bold text-gray-500 transition duration-200 rounded sm:w-auto sm:mb-0 sm:mx-0 hover:bg-gray-50 hover:text-gray-900 hover:shadow focus:outline-none">
                  Category 3
                </button>
                <button className="w-full px-4 py-2 mx-1 mb-1 font-bold text-gray-500 transition duration-200 rounded sm:w-auto sm:mb-0 sm:mx-0 hover:bg-gray-50 hover:text-gray-900 hover:shadow focus:outline-none">
                  Category 4
                </button>
              </div>
            </div>
            <div className="flex flex-wrap mb-8 -mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <a href="#">
                  <img
                    className="object-cover w-full h-64 mx-auto rounded"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt
                  />
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <a href="#">
                  <img
                    className="object-cover w-full h-64 mx-auto rounded"
                    src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                    alt
                  />
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <div className="relative w-full h-64 mx-auto rounded-lg">
                  <img
                    className="relative object-cover w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt
                  />
                  <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      className="inline-block px-4 py-2 font-bold leading-loose transition duration-200 bg-transparent border-2 border-gray-400 hover:border-white text-gray-50 hover:bg-white hover:text-gray-900 rounded-l-xl rounded-t-xl"
                      href="#"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <a href="#">
                  <img
                    className="object-cover w-full h-64 mx-auto rounded"
                    src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80"
                    alt
                  />
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <a href="#">
                  <img
                    className="object-cover w-full h-64 mx-auto rounded"
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt
                  />
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <a href="#">
                  <img
                    className="object-cover w-full h-64 mx-auto rounded"
                    src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                    alt
                  />
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <a href="#">
                  <img
                    className="object-cover w-full h-64 mx-auto rounded"
                    src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80"
                    alt
                  />
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/4">
                <a href="#">
                  <img
                    className="object-cover w-full h-64 mx-auto rounded"
                    src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
                    alt
                  />
                </a>
              </div>
            </div>
            <div className="text-center">
              <a
                className="inline-block px-6 py-2 font-bold leading-loose rounded-l-xl rounded-t-xl bg-primary-500 hover:bg-primary-700 text-gray-50"
                href="#"
              >
                View More Projects
              </a>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

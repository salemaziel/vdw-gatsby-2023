import React from "react"

const GetStartedForm = props => {
  return (
    <form
      name="estimateform"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      action="/#"
      className="sticky z-20 flex-col w-full p-6 px-4 bg-gray-100 rounded md:z-10 lg:mt-10 lg:w-11/12 md:flex md:mx-auto lg:mx-auto"
    >
      <h2 className="block mb-5 text-3xl font-bold text-center text-blue-900 font-montserrat title-font">
        Request A Quote Today
      </h2>
      <div className="relative flex flex-col mb-3 md:flex-row">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="estimateform" />
        <div className="w-full md:w-1/2 md:pr-1">
          <label
            htmlFor="firstName"
            className="text-sm leading-7 text-gray-600"
          >
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="First Name"
            required
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-1">
          <label htmlFor="lastName" className="text-sm leading-7 text-gray-600">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="Last Name"
            required
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800"
          />
        </div>
      </div>

      <div className="relative mb-3">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800"
        />
      </div>
      <div className="relative mb-3">
        <label htmlFor="phone" className="text-sm leading-7 text-gray-600">
          Phone*
        </label>
        <input
          type="tel"
          id="tel"
          name="phone"
          required
          className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800"
        />
      </div>
      <div className="relative mb-3">
        <label htmlFor="message" className="text-sm leading-7 text-gray-600">
          What Can We Help You With?
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full h-32 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800"
          defaultValue={""}
        />
      </div>
      <div data-netlify-recaptcha="true"></div>

      <button className="w-full px-8 py-2 text-lg text-white bg-red-800 border-0 rounded focus:outline-none hover:bg-green-600">
        Submit
      </button>
    </form>
  )
}

export default GetStartedForm

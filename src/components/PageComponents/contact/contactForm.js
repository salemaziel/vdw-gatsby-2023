import React, { useState } from "react"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = useState()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
      <form name="ContactForm"
        action="/thanks"
        method="post"
        data-nelify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        className="mx-0 mt-0 mb-8 overflow-x-hidden"
        netlify
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="ContactForm" />
        <div className="flex flex-wrap m-auto">
          <div className="w-full mb-4 sm:w-11/12">
            <label
              style={{ display: "none" }}
              htmlFor="name"
              className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              aria-label="Name"
              placeholder="Name*"
              required
              onChange={handleChange}
              className="block overflow-visible py-8 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600 focus:outline-offset-2"
              /*className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 placeholder-[#e5e7eb] border-[#e5e7eb]  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"*/
              style={{
                borderImage: "initial",
                outline: 0,
                textDecoration: "none",
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap m-auto">
          <div className="w-full mb-4 sm:w-11/12">
            <label
              htmlFor="email"
              style={{ display: "none" }}
              className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Business Email*"
              aria-label="Email"
              required
              className="block overflow-visible py-8 px-4 m-0 w-full h-10 sm:h-14 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075]  focus:border-primary-600  focus:outline-offset-2"
              /*className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 placeholder-[#e5e7eb] border-[#e5e7eb]  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"*/
              style={{
                borderImage: "initial",
                outline: 0,
                textDecoration: "none",
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap m-auto">
          <div className="w-full mb-4 sm:w-11/12">
            <label
              htmlFor="tel"
              style={{ display: "none" }}
              className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              aria-label="Phone"
              onChange={handleChange}
              placeholder="Phone Number*"
              className="block overflow-visible py-8 px-4 m-0 w-full h-10 sm:h-14 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600 focus:outline-offset-2"
              /*className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 placeholder-[#e5e7eb] border-[#e5e7eb]  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"*/
              style={{
                borderImage: "initial",
                outline: 0,
                textDecoration: "none",
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap m-auto">
          <div className="w-full mb-4 sm:w-11/12">
            <label
              htmlFor="Current Website"
              style={{ display: "none" }}
              className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
            >
              Current Website
            </label>
            <input
              type="text"
              name="currentwebsite"
              id="currentwebsite"
              aria-label="Current Website URL"
              placeholder="Current Website URL"
              className="block overflow-visible py-8 px-4 m-0 w-full h-10 sm:h-14 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600 focus:outline-offset-2"
              onChange={handleChange}
              /*className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 placeholder-[#e5e7eb] border-[#e5e7eb]  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"*/
              style={{
                borderImage: "initial",
                outline: 0,
                textDecoration: "none",
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap m-auto">
          <div className="w-full mb-4 sm:w-11/12">
            <label
              htmlFor="textarea"
              style={{ display: "none" }}
              className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
            >
              Message
            </label>
            <input
              type="textarea"
              name="message"
              id="message"
              aria-label="Message"
              placeholder="Message"
              className="block overflow-visible py-20 px-4 m-0 w-full h-10 sm:h-14 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-primary-600"
              onChange={handleChange}
              required
              /*className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 placeholder-[#e5e7eb] border-[#e5e7eb]  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"*/
              style={{
                outline: 0,
                textDecoration: "none",
              }}
            />
          </div>
        </div>
        <div className="w-full mb-4 sm:w-11/12">
          <ul
            className="flex flex-col w-full p-0 my-0 mr-0 -ml-4 list-none cursor-default"
            style={{ listStyle: "none" }}
          >
            <li
              style={{ listStyle: "none" }}
              className="flex-grow flex-shrink w-full py-0 pl-4 pr-0 text-center align-middle list-none"
            >
              <div data-netlify-recaptcha="true"></div>
              <button
                type="submit"
                aria-label="Submit"
                value="Send Message"
                className="inline-block w-full h-auto px-20 py-3 mx-0 mt-8 mb-0 font-black text-white normal-case truncate transition duration-300 ease-in-out rounded cursor-pointer hover:text-white focus:bg-green-600 focus:text-white delay-0 focus:outline-none focus:shadow-outline bg-gradient-to-r from-[#543ab7] to-[#00acc1] hover:from-green-600 hover:to-green-600"
                onSubmit={handleSubmit}
                style={{
                  fontSize: "128%",
                  textDecoration: "none",

                  listStyle: "outside none none",
                }}
              >
                Submit
              </button>
            </li>
          </ul>
        </div>
      </form>
  )
}

export default ContactForm

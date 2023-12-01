import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo"

import { graphql } from "gatsby"



const Contact = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
        <Layout location={location} title={siteTitle}>

<section
      id="main"
      className="relative block px-0 pt-12 pb-10 font-light leading-9 text-left border-0 border-gray-200 border-solid text-zinc-600"
    >
      <div
        className="flex flex-wrap w-64 px-10 py-0 mx-auto my-0 leading-9 text-zinc-600"
        style={{ maxWidth: "70em" }}
      >
        <div className="w-full pl-6 text-left lg:w-3/4">
          <header
            className="inline-block w-40 h-px mx-0 mt-0 mb-12 text-zinc-600"
            style={{
              content: '""',
              backgroundImage:
                "linear-gradient(60deg, rgb(84, 58, 183), rgb(0, 172, 193))",
            }}
          >
            <h2 className="m-0 text-lg leading-normal tracking-widest uppercase">
              Contact Us
            </h2>
          </header>
          <div className="text-zinc-600">
            <p className="p-0 m-0">
              We’re available weekdays, and if you shoot us an email, we’re
              guaranteed to respond within 24 hours.
            </p>
            <p className="p-0 m-0">
              If you have questions or want to catch up, let us know!
            </p>
            <br className />
            <form
              action="/thanks"
              method="post"
              name="ContactForm"
              className="mx-0 mt-0 mb-8 overflow-x-hidden"
            >
              <input
                type="hidden"
                name="bot-field"
                className="w-full p-0 m-0 overflow-visible cursor-default"
                style={{ fontSize: "128%" }}
              />
              <input
                type="hidden"
                name="form-name"
                defaultValue="ContactForm"
                className="w-full p-0 m-0 overflow-visible cursor-default"
                style={{ fontSize: "128%" }}
              />
              <div className="flex flex-wrap m-auto">
                <div className="w-11/12 mb-4">
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
                    placeholder="Name*"
                    required
                    className="block overflow-visible py-0 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-sky-600 focus:outline-offset-2"
                    style={{
                      borderImage: "initial",
                      outline: 0,
                      textDecoration: "none",
                      boxShadow: "none",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap m-auto">
                <div className="w-11/12 mb-4">
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
                    placeholder="Business Email*"
                    required
                    className="block overflow-visible py-0 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-sky-600 focus:outline-offset-2"
                    style={{
                      borderImage: "initial",
                      outline: 0,
                      textDecoration: "none",
                      boxShadow: "none",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap m-auto">
                <div className="w-11/12 mb-4">
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
                    placeholder="Phone Number*"
                    className="block overflow-visible py-0 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-sky-600 focus:outline-offset-2"
                    style={{
                      borderImage: "initial",
                      outline: 0,
                      textDecoration: "none",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap m-auto">
                <div className="w-11/12 mb-4">
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
                    placeholder="Current Website"
                    className="block overflow-visible py-0 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-sky-600 focus:outline-offset-2"
                    style={{
                      borderImage: "initial",
                      outline: 0,
                      textDecoration: "none",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap m-auto">
                <div className="w-11/12 mb-4">
                  <label
                    htmlFor="Industry"
                    style={{ display: "none" }}
                    className="hidden mx-0 mt-0 mb-4 text-sm font-bold leading-8 text-gray-600 cursor-default"
                  >
                    What Industry Are You In?
                  </label>
                  <input
                    type="text"
                    name="industry"
                    id="industry"
                    placeholder="What Industry Are You In?*"
                    className="block overflow-visible py-0 px-4 m-0 w-full h-10 text-base leading-6 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-sky-600 focus:outline-offset-2"
                    style={{
                      borderImage: "initial",
                      outline: 0,
                      textDecoration: "none",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap m-auto">
                <div className="w-11/12 mb-4">
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
                    placeholder="Message"
                    className="block overflow-visible py-20 px-4 m-0 w-full h-10 rounded border border-solid appearance-none cursor-text border-neutral-200 bg-neutral-100 bg-opacity-[0.075] focus:border-sky-600"
                    style={{
                      fontSize: "128%",
                      outline: 0,
                      textDecoration: "none",
                    }}
                  />
                </div>
              </div>
              <div className="w-11/12 mb-4">
                <ul
                  className="flex flex-col w-full p-0 my-0 mr-0 -ml-4 cursor-default"
                  style={{ listStyle: "none" }}
                >
                  <li
                    style={{ listStyle: "none" }}
                    className="flex-grow flex-shrink w-full py-0 pl-4 pr-0 text-center align-middle"
                  >
                    <button
                      type="submit"
                      value="Send Message"
                      className="inline-block w-full h-12 px-20 py-0 mx-0 mt-8 mb-0 font-black text-white normal-case truncate rounded cursor-pointer hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white"
                      style={{
                        transition:
                          "border-bottom-color 0.2s ease 0s, color 0.2s ease 0s",
                        fontSize: "128%",
                        textDecoration: "none",
                        backgroundImage:
                          "linear-gradient(60deg, rgb(84, 58, 183), rgb(0, 172, 193))",
                        listStyle: "outside none none",
                      }}
                    >
                      Submit{/* */}
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/4 mx-auto my-0 text-left border-0 border-gray-200 border-solid">
          <section className="block text-zinc-600">
            <h4 className="flex px-0 py-4 m-auto text-xs leading-normal tracking-widest text-center uppercase">
              Email
            </h4>
            <p className="flex px-0 py-4 m-auto text-center">
              <a
                className="p-8 mb-1 text-xs font-bold leading-4 uppercase bg-blue-700 rounded cursor-pointer sm:mr-2 text-sky-600 outline-offset-2 hover:border-transparent hover:text-slate-400 focus:text-slate-400"
                href="#mailgo"
                data-address="contact"
                data-domain="viadelweb.com"
                data-subject="Hey, let's connect!"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  transition:
                    "border-bottom-color 0.2s ease 0s, color 0.2s ease 0s",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                  outline: "transparent solid 2px",
                }}
              >
                contact@viadelweb.com
              </a>
            </p>
            <h4 className="flex px-0 py-4 m-auto text-xs leading-normal tracking-widest text-center uppercase">
              Follow Us
            </h4>
            <div className="flex px-0 py-4 m-auto text-center">
              <a
                href="https://twitter.com/viadelweb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-transparent cursor-pointer text-sky-600 hover:border-transparent hover:text-slate-400 focus:text-slate-400"
                style={{
                  transition:
                    "border-bottom-color 0.2s ease 0s, color 0.2s ease 0s",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block overflow-hidden align-middle"
                >
                  <path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    className
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/viadelweb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-transparent cursor-pointer text-sky-600 hover:border-transparent hover:text-slate-400 focus:text-slate-400"
                style={{
                  transition:
                    "border-bottom-color 0.2s ease 0s, color 0.2s ease 0s",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block overflow-hidden align-middle"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    className
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com/viadelweb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-transparent cursor-pointer text-sky-600 hover:border-transparent hover:text-slate-400 focus:text-slate-400"
                style={{
                  transition:
                    "border-bottom-color 0.2s ease 0s, color 0.2s ease 0s",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block overflow-hidden align-middle"
                >
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    className
                  />
                </svg>
              </a>
            </div>
            <footer className="block" />
          </section>
          <hr
            className="box-content h-0 m-0 overflow-visible border-solid border-x-0 border-y border-neutral-200"
            style={{ borderWidth: "0px 0px 1px", borderImage: "initial" }}
          />
        </div>
      </div>
    </section>
        </Layout>
    )
}

export default Contact

export const Head = () => <Seo title="Contact" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

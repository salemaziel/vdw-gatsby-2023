import React from "react"
//import Section from "../Section"
import { Link } from "gatsby"

const CtaBanner = () => {
  return (
<section className="relative pt-24 overflow-hidden bg-black pb-28">
  <div className="container relative z-10 px-4 mx-auto">
    <h2 className="max-w-lg mx-auto mb-12 text-6xl font-bold text-center text-white font-heading sm:text-7xl">Hard to believe? Analyze your website</h2>
    <div className="mx-auto mb-9 md:max-w-lg">
      <div className="flex flex-col p-1 overflow-hidden bg-white rounded-md md:flex-row focus-within:ring-4 focus-within:ring-indigo-500">
        <input className="flex-1 block px-5 py-4 text-base text-gray-500 placeholder-gray-500 bg-transparent outline-none md:py-0 rounded-tl-xl rounded-bl-xl" type="text" placeholder="Enter email to get started" />
        <Link to="/" className="relative w-full px-8 py-5 overflow-hidden text-lg text-[#2579bceb] uppercase bg-white rounded-lg group font-bold md:w-auto tracking-px">
          <div className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0 bg-gradient-fuchsia" />
          <p className="relative z-10 font-lato">Connect now</p>
        </Link>
      </div>
    </div>
    {/*<p className="text-sm text-center text-gray-500">
      <span>Or, learn more</span>
      <a className="text-white hover:text-gray-200" href="#">about Gradia</a>
    </p>*/}
  </div>
  {/*<img className="absolute bottom-0 transform -translate-x-1/2 left-1/2" src="" alt />*/}
</section>

  )
}

export default CtaBanner

import React from "react"
//import Section from "../Section"
import { Link } from "gatsby"

const CtaBanner2 = ({title, description, buttonText, url}) => {
  return (
<section className="py-20 bg-[#2579bceb] md:py-28 bg-hero-background dark:bg-hero-background-dark bg-cover bg-fixed" /*style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}*/>
  <div className="container px-4 mx-auto">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="mb-4 text-3xl font-medium leading-loose tracking-wide text-white md:mb-8 md:text-4xl font-heading font-lato">{title}</h2>
      <p className="mb-6 text-lg font-medium leading-7 tracking-wide md:text-xl font-heading text-coolGray-500">{description}</p>
      {/*<a className="inline-block w-full py-3 text-lg font-medium leading-7 text-center bg-green-500 border border-transparent rounded-md shadow-sm px-7 md:w-auto text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" href="#">Get Started</a>*/}
      <Link className=" bg-white hover:bg-gray-100 inline-block w-full px-4 py-3 my-3 text-xl font-bold leading-loose text-center text-[#2579bceb] transition-colors ease-in-out delay-0 duration-300 hover:border rounded-lg sm:w-auto sm:mb-0 sm:mr-4" to={url}>{buttonText}</Link>
    </div>
  </div>
</section>


  )
}

export default CtaBanner2

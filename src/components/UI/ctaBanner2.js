import React from "react"
//import Section from "../Section"
import { Link } from "gatsby"
//import FormModal from "./formModal"

const CtaBanner2 = ({title, description, buttonText, url}) => {
  return (
<section className="py-20 bg-[#2579bceb] md:py-28 bg-hero-background dark:bg-hero-background-dark bg-cover bg-fixed" /*style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}*/>
  <div className="container px-4 mx-auto">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="mb-4 text-3xl font-medium leading-loose tracking-wide text-white md:mb-8 md:text-4xl font-heading font-lato">{title}</h2>
      <p className="mb-6 text-lg font-medium leading-7 tracking-wide text-gray-100 md:text-xl font-heading">{description}</p>
      <Link className=" bg-white hover:bg-[#2579bceb] hover:text-white inline-block w-full px-4 py-3 my-3 text-xl font-bold leading-loose text-center text-[#2579bceb] transition-colors ease-in-out delay-0 duration-300 focus-within:outline outline-white focus:outline-white hover:shadow-lg  rounded-lg sm:w-auto sm:mb-0 sm:mr-4" to={url}>{buttonText}</Link>
      
      {/*<FormModal />*/}

    </div>
  </div>
</section>


  )
}

export default CtaBanner2

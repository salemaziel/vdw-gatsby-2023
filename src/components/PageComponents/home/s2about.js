import React from 'react'
//import Section from '../../Section'
import Container from '../../UI/Container';


const S2about = ({ aboutTitle, aboutContent, ...props }) =>{

  return (
    <>
      <section className="relative pt-5 pb-3 bg-theme-light-bg dark:bg-theme-dark-bg">
        <Container className='text-center '>
          <div id="row" className='flex flex-wrap -mx-4 -mb-10 text-center row'>
            <div id="column" className='w-full px-4 mx-auto mb-10 sm:w-3/4'>
              <h2 className='py-12 mb-6 text-3xl tracking-wider text-center dark:text-gray-200'>{aboutTitle}</h2>


              <p className="px-4 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">{aboutContent}
              </p>

              <p className="px-4 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">We're more than just a web design agency - we're your partners in digital growth. With our unique blend of technological expertise and cloud solutions, we help you create and use your online digital real estate to better connect with your audience, drive your business forward, and expand your company's possibilities.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default S2about

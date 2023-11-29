import * as React from 'react'
import Section from '../../Section'
import Container from '../../UI/Container';


function S2about({title, subtitle, content, ...props}){
  const {
   bg, 
   bgImage, 
   textColor, 
   size, 
   bgImageOpacity, 
   bgImageRepeat, 
   className,
   ...otherProps
  } = props;

  return (
    <>
      <Section
        bg={bg}
        textColor={textColor}
        size={size}
        bgImage={bgImage}
        bgImageOpacity={bgImageOpacity}
        bgImageRepeat={bgImageRepeat}
        className={className}
      >
        <Container className='text-center '>
         <div id="row" className='flex flex-wrap -mx-4 -mb-10 text-center row'> 
         <div id="column" className='w-full px-4 mx-auto mb-10 sm:w-3/4'>
          <h2 className='py-12 mb-6 text-3xl tracking-wider text-center dark:text-gray-200'>{title}</h2>

          
          
          {/*<h3 className='py-16 text-2xl font-medium tracking-widest text-center dark:text-white'>{subtitle} 
          </h3>
          <h3 className='py-16 text-2xl font-medium text-center dark:text-white'>{subtitle} We believe in empowering businesses, not just building websites.
          </h3>*/}

          <p className="px-4 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">{content}
          </p>
          
          <p className="px-4 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">We're more than just a web design agency - we're your partners in digital growth. With our unique blend of technological expertise and cloud solutions, we help you create and use your online digital real estate to better connect with your audience, drive your business forward, and expand your company's possibilities.</p>
          </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default S2about
import * as React from 'react'
import Section from '../../Section'
import Container from '../../UI/Container';


function S2about(props){
  const {
   bg, 
   bgImage, 
   textColor, 
   size, 
   bgImageOpacity, 
   bgImageRepeat, 
   title, 
   subtitle,
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
        title={title}
        subtitle={subtitle}
        className={className}
      >
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 2rem',
          }}
          className='container mx-auto text-center '
        >
          <h2 className='py-12 text-3xl dark:text-gray-200'>Web Design ● Web Development ● Cloud Management ●  Digital Strategy</h2>
          <p className="px-4 pb-4 mx-8 text-lg text-left sm:px-16 dark:text-white">We are a San Diego-based Web Tech company specializing in helping local small businesses successfully expand into the digital world.
          </p>
          
          <h3 className='py-16 text-2xl font-medium text-center dark:text-white'> We believe in empowering businesses, not just building websites.
          </h3>
          
          <p className="px-4 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">We're more than just a web design agency - we're your partners in digital growth. With our unique blend of technological expertise and cloud solutions, we help you create and use your online digital real estate to better connect with your audience, drive your business forward, and expand your company's possibilities.</p>
        </Container>
      </Section>
    </>
  )
}

export default S2about
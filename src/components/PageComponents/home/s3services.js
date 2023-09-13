import React from "react";
import Section from "@/components/Section";
import Container from "@/components/UI/Container";

const S3Services = (props) => {
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

        className={className}
      >
        <Container
            className='container flex flex-col items-center justify-center px-8 py-0 mx-auto text-center align-middle'
        >
            <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">{title}</h3>
            <p className="px-4 py-6 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">{subtitle}</p>
        </Container>
        </Section>
        <Section
        bg={bg}
        textColor={textColor}
        size={size}
        bgImage={bgImage}
        bgImageOpacity={bgImageOpacity}
        bgImageRepeat={bgImageRepeat}
        className={className}
        >
        <Container
            className='container flex items-start justify-start px-8 py-0 mx-auto text-center align-middle'
        >
            <div className="flex flex-col items-start justify-start px-8 py-0 align-middle">
                <figure className="items-center justify-center px-8 py-8 align-middle">
                    <img className="w-full h-auto" src="https://source.unsplash.com/random/?city,night" alt="A generic square placeholder image with rounded corners in a figure."/>
                    <figcaption className="pt-4 text-sm text-left">A caption for the above image.</figcaption>
                </figure>

  
            </div>
            <div className="flex flex-col items-start justify-start px-8 py-0 align-middle">
            <h3 className="px-4 py-6 mb-6 text-3xl font-medium text-left sm:px-16 dark:text-white">Web Design</h3>
                <p className="px-4 py-6 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">We build beautiful, responsive websites that are designed to convert visitors into customers. We use the latest technologies and best practices to ensure that your website is modern, fast, secure, and easy to use.</p>
            </div>
        </Container>
        </Section>
        </>
    )
    }

export default S3Services
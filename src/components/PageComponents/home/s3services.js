import React from "react"
import Section from "@/components/Section"
import Container from "@/components/UI/Container"

import { StaticImage } from "gatsby-plugin-image"

const S3Services = props => {
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
//    ...otherProps
  } = props

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
        <Container className="container flex flex-col items-center justify-center px-8 py-0 mx-auto text-center align-middle">
          <h3 className="py-2 mb-6 text-3xl font-medium text-center sm:py-6 dark:text-white">
            {title}
          </h3>
          <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 sm:px-16 dark:text-white">
            {subtitle}
          </p>
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
      {/* First Row */}
      <Container className="pb-12 my-6 sm:py-6">
        <div className="flex flex-col items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-start order-2 w-full mx-auto mb-4 sm:order-1 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
              loading="eager"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-end order-1 w-full mx-auto mb-4 sm:order-2 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-2 mb-6 text-3xl font-medium text-center sm:py-6 dark:text-white">
              Web Design & Development
              </h3>
              <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 dark:text-white">
              Custom design and development of beautiful, functional websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* Second Row */}
      <Container className="py-12 my-6 text-white sm:py-6 bg-primary-500 dark:bg-primary-800 dark:text-gray-100 md:bg-transparent">
        <div className="flex flex-col-reverse items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-end order-2 w-full mx-auto mb-4 sm:order-1 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-2 mb-6 text-3xl font-medium text-center text-white dark:text-white md:text-heading-text sm:py-6">
              Custom E-Commerce Solutions for your online store.
              </h3>
              <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 md:text-regular-text md:dark:text-white">
              Custom E-Commerce websites built to scale. We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end order-1 w-full mx-auto mb-4 sm:order-2 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/ecommerce-500x.png"
              width={500}
              height={500}
              quality={95}
              alt="DALL·E 2023-11-22 15.21.11 - An image symbolizing eCommerce solutions. Visualize a digital shopping cart filled with various products and a computer screen showing an online store"
              loading="lazy"
              placeholder="blurred"
            />
          </div>
        </div>
      </Container>
      {/* Third Row */}
      <Container className="py-12 my-6 sm:py-6">
        <div className="flex flex-col items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-start order-2 w-full mx-auto mb-4 sm:order-1 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/ecommerce-design-mockup-removebg.png"
              width={500}
              quality={95}
              alt=""
              loading="lazy"
              placeholder="blurred"
            />
          </div>
          <div className="flex items-center justify-end order-1 w-full mx-auto mb-4 sm:order-2 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-2 mb-6 text-3xl font-medium text-center sm:py-6 dark:text-white">
              E-Commerce websites built to scale using your favorite platform.
              </h3>
              <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 dark:text-white">
               We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers. We can build your eCommerce website using your favorite platform, including: 
               <ul className="py-4 pl-6 list-disc">
                <li>
                Shopify
                </li>
                <li>
                WooCommerce
                </li>
                <li>
                Wix
                </li>
                <li>
                Squarespace
                </li>
                </ul>
                
              
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* Fourth Row */}
      <Container className="py-12 my-6 text-white sm:py-6 bg-primary-500 dark:bg-primary-800 md:bg-transparent dark:text-gray-100">
        <div className="flex flex-col-reverse items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-end order-2 w-full mx-auto mb-4 sm:order-1 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-2 mb-6 text-3xl font-medium text-center text-white sm:py-6 md:text-heading-text dark:text-gray-100">
              Email Marketing for E-Commerce
              </h3>
              <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 md:text-regular-text dark:text-white">
              Email marketing is one of the most effective ways to grow your business. We create email marketing campaigns that are designed to convert your subscribers into customers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end order-1 w-full mx-auto mb-4 sm:order-2 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/ecommerce-email-marketing-500x.png"
              width={500}
              height={400}
              quality={95}
              alt="DALL·E 2023-11-22 15.53.57 - An image representing email marketing services. The scene includes a laptop with an open email client, showcasing an attractive email template."
              loading="lazy"
              placeholder="blurred"
            />
          </div>
        </div>
      </Container>
      {/* Fifth Row */}
      <Container className="py-12 my-6 sm:py-6">
        <div className="flex flex-col items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-start order-2 w-full mx-auto mb-4 sm:order-1 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/ecommerce-seo-optimization-500x.png"
              width={500}
              height={400}
              quality={95}
              alt="DALL·E 2023-11-22 15.21.00 - An image illustrating SEO optimization services. Feature a magnifying glass focusing on a webpage with keywords highlighted. Include elements like sea"
              loading="lazy"
              placeholder="blurred"
            />
          </div>
          <div className="flex items-center justify-end order-1 w-full mx-auto mb-4 sm:order-2 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-2 mb-6 text-3xl font-medium text-center sm:py-6 dark:text-white">
              E-Commerce Automation & SEO Optimization
              </h3>
              <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 dark:text-white">
              We can help you automate your eCommerce business and optimize your website for conversions. We offer a variety of services, including email marketing automation, on-page and off-page SEO optimization, and more.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* Sixth Row */}
      <Container className="py-12 mt-6 text-white sm:my-6 sm:py-6 bg-primary-500 dark:bg-primary-800 dark:text-gray-100 md:bg-transparent ">
        <div className="flex flex-col-reverse items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-end order-2 w-full mx-auto mb-4 sm:order-1 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-2 mb-6 text-3xl font-medium text-center text-white md:text-heading-text sm:py-6 dark:text-gray-100">
              Video Marketing AI for Youtube
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white md:text-regular-text">
              Video Marketing for YouTube Sacramento. Social Media marketing with AI Generated Video. Build Your Brand Vith Video.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end order-1 w-full mx-auto mb-4 sm:order-2 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/video-marketing-500x.png"
              width={500}
              height={400}
              quality={95}
              alt="DALL·E 2023-11-22 15.20.38 - An image depicting video marketing services. The scene shows a camera filming a product with a computer screen in the background displaying video edit."
              loading="lazy"
              placeholder="blurred"
            />
          </div>
        </div>
      </Container>
      {/*<Container className="py-6 my-6">
        <div className="flex flex-col items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-start w-full mx-auto mb-4 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-4 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Wix and Squarespace Website Design and Development
              </h3>
              <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 dark:text-white">
              Wix and Squarespace websites built to scale. We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-6 my-6">
        <div className="flex flex-col items-center w-full mx-auto mb-4 sm:mb-12 sm:flex-row lg:w-5/6">
        <div className="flex items-center justify-end w-full mx-auto mb-4 sm:mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 py-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Email Marketing for E-Commerce
              </h3>
              <p className="px-0 py-6 pb-4 mx-auto text-lg text-left md:px-4 dark:text-white">
              Email marketing is one of the most effective ways to grow your business. We create email marketing campaigns that are designed to convert your subscribers into customers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-4 sm:mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
        </div>
  </Container>*/}
      </Section>
    </>
  )
}

export default S3Services

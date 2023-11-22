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
    ...otherProps
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
          <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
            {title}
          </h3>
          <p className="px-4 py-6 pb-4 mx-auto text-lg text-left sm:px-16 dark:text-white">
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
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-start w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Web Design & Development
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
              Custom web design and development of beautiful, functional websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Custom eCommerce Solutions for your online store.
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
              Custom eCommerce websites built to scale. We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
        </div>
      </Container>
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-start w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              E-Commerce websites built to scale using your favorite platform.
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
               We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers. We can build your eCommerce website using your favorite platform, including: 
               <ul className="list-disc md:pl-6">
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
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Email Marketing for E-Commerce
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
              Email marketing is one of the most effective ways to grow your business. We create email marketing campaigns that are designed to convert your subscribers into customers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
        </div>
      </Container>
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-start w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              E-Commerce Automation & SEO Optimization
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
              We can help you automate your eCommerce business and optimize your website for conversions. We offer a variety of services, including email marketing automation, on-page and off-page SEO optimization, and more.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Video Marketing AI for Youtube
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
              Video Marketing for YouTube Sacramento. Social Media marketing with AI Generated Video. Build Your Brand Vith Video.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
        </div>
      </Container>
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-start w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Wix and Squarespace Website Design and Development
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
              Wix and Squarespace websites built to scale. We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-6 my-6">
        <div className="flex flex-row items-center w-full mx-auto mb-12 lg:w-5/6">
        <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <div className="flex flex-col items-center justify-center w-full h-full p-8 lg:p-8">
              <h3 className="py-6 mb-6 text-3xl font-medium text-center dark:text-white">
              Email Marketing for E-Commerce
              </h3>
              <p className="px-4 py-6 pb-4 mx-auto text-lg text-left dark:text-white">
              Email marketing is one of the most effective ways to grow your business. We create email marketing campaigns that are designed to convert your subscribers into customers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end w-full mx-auto mb-12 lg:w-1/2">
            <StaticImage
              className=""
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../../images/web-design.png"
              width={500}
              height={300}
              quality={95}
              alt=""
            />
          </div>
        </div>
      </Container>
      </Section>
    </>
  )
}

export default S3Services

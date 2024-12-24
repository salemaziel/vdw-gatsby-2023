import React, { Suspense } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

//import HomeHero from "../components/PageComponents/home/homeHero"
import HomeHero from "../components/PageComponents/home/hero"
import S2about from "../components/PageComponents/home/s2about"
const S3Services = React.lazy(() => import('../components/PageComponents/home/s3services'));

//import S3services from "../components/PageComponents/home/s3services"
//import CtaBanner from "../components/UI/ctaBanner"
//import CtaBanner2 from "../components/UI/ctaBanner2"
const CTABanner2 = React.lazy(() => import('../components/UI/ctaBanner2'));


//import Banner from "../components/UI/banner"

const Index = ({ location }) => {
  //const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} /*title={siteTitle}*/>
      <HomeHero
        heroTitle="Web Solutions for Small Businesses and Entrepreneurs"
        heroSubtitle="Let's build your Digital Real Estate."
        heroLbutton="Work With Us"
        heroLButtonUrl="/get-started"
        heroRButton="Learn More"
        heroRButtonUrl="/about"
      />
      <S2about

        className="dark:bg-[rgba(26,26,57,1)] dark:text-white border-transparent"
        aboutTitle="Web Design ● Web/App Hosting ● Cloud Solutions ● Digital Strategy"
        aboutContent="We are a San Diego-based Web Tech company specializing in helping local small businesses successfully expand into the digital world."
      />
      {/*
      <S3services
        bg="white"
        textColor="dark"
        size="md"
        className="dark:bg-[rgba(26,26,57,1)] dark:text-white !pt-8 lg:!pt-16 !pb-0"
        title="Our Services"
        subtitle="We offer a wide range of services to help you grow your business online."
      />
      */}

      <Suspense fallback={<div>Loading...</div>}>
        <S3Services
        bg="white"
        textColor="dark"
        size="md"
        className="dark:bg-[rgba(26,26,57,1)] dark:text-white !pt-8 lg:!pt-16 !pb-0"
        title="Our Services"
        subtitle="We offer a wide range of services to help you grow your business online."
      />
      </Suspense>

      {/*
      <CtaBanner2
        title="The fastest way from idea to live site. Period."
        description="We'll take care of everything, from design to deployment, so you can focus on your business."
        buttonText="Get Started"
        url="/get-started"
      />
      */}

      <Suspense fallback={<div>Loading...</div>}>
        <CTABanner2
        title="The fastest way from idea to live site. Period."
        description="We'll take care of everything, from design to deployment, so you can focus on your business."
        buttonText="Get Started"
        url="/get-started"
      />
      </Suspense>

    </Layout>
  )
}

export default Index

export const Head = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;

  return (
    <>
      <Seo
        title={siteMetadata.title || "San Diego based Web Design and Cloud Technology Partner"}
        description={siteMetadata.description || "Latino Owned Web Design, Web Development, & Digital Marketing Agency based in San Diego, CA specializing in working with small businesses."}
        keywords={
          siteMetadata.keyword ||
          "website design, digital marketing, automation, consulting, software development, web development, web design, digital business, digital transformation, digital strategy, digital marketing strategy, digital marketing agency, digital marketing services, digital marketing company, digital marketing consultant"
        }
        image={siteMetadata.banner || "/logo/banner.png"}
        pathname="/" 
        article={false}
      />
      <link
        rel="preload"
        as="image"
        href="/static/annie-marek-night-barta-hKNVVGNba68-4dfc3ab88cdbadc4e0d9603c798f5c16.jpg"
      />
      <link
        rel="preload"
        as="image"
        href="/static/annie-marek-barta-hKNVVGNba68-unsplash-9a26e737ff605ea054cdeffb6b980c6a.jpg"
      />
      <link rel="preload" as="style" href="/static/styles/critical.css" />
    </>
  );
};

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        keyword
        siteUrl
        siteLanguage
        twitter
        banner
      }
    }
  }
`

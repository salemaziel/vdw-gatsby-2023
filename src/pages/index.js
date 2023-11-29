import * as React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import HomeHero from "../components/PageComponents/home/hero"
import S2about from "../components/PageComponents/home/s2about"
import S3services from "../components/PageComponents/home/s3services"
import CtaBanner from "../components/UI/ctaBanner"
import CtaBanner2 from "../components/UI/ctaBanner2"
//import Banner from "../components/UI/banner"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <HomeHero
        title="Web Solutions for Small Businesses and Entrepreneurs"
        subtitle="Let's build your Digital Real Estate."
        lbutton="Work With Us"
        lbuttonlink="/contact"
        rbutton="Learn More"
        rbuttonlink="/about"
      />
      <S2about
        bg="white"
        textColor="dark"
        size="md"
        className="dark:bg-[rgba(26,26,57,1)] dark:text-white"
        title="Web Design ● Web/App Hosting ● Cloud Solutions ● Digital Strategy"
        subtitle=""
        content="We are a San Diego-based Web Tech company specializing in helping local small businesses successfully expand into the digital world."
      />
      <S3services
        bg="white"
        textColor="dark"
        size="md"
        className="dark:bg-[rgba(26,26,57,1)] dark:text-white !py-8 lg:!py-16"
        title="Our Services"
        subtitle="We offer a wide range of services to help you grow your business online."
      />
      {/*<CtaBanner />*/}
      <CtaBanner2
      title="The fastest way from idea to live site. Period."
      description="We'll take care of everything, from design to deployment, so you can focus on your business."
      buttonText="Get Started"
      url="/contact"
       />
    </Layout>
  )
}

export default Index

export const Head = () => (
  <Seo title="San Diego based Web Design and Cloud Technology Partner" />
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

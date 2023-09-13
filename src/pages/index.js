import * as React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import HomeHero from "../components/PageComponents/home/hero"
import S2about from "../components/PageComponents/home/s2about"
import S3services from "../components/PageComponents/home/s3services"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <HomeHero
      title="Empowering Small Businesses with Custom Web Solutions"
      subtitle="Your Bilingual Web Design and Cloud Technology Partner in San Diego"
      lbutton="Contact Us"
      rbutton="Learn More"
       />
       <S2about
        bg="white"
        textColor="dark"
        size="md"
        className="dark:bg-[rgba(26,26,57,1)] dark:text-white"
        />
        <S3services
        bg="white"
        textColor="dark"
        size="lg"
        className="dark:bg-[rgba(26,26,57,1)] dark:text-white !py-16 lg:!py-32"
        title="Our Services"
        subtitle="We offer a wide range of services to help you grow your business online."
        />
    </Layout>
  )
}

export default Index

export const Head = () => <Seo title="San Diego based Web Design and Cloud Technology Partner" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

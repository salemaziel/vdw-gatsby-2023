import * as React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import HomeHero from "../components/PageComponents/home/hero"
import S2about from "../components/PageComponents/home/s2about"

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

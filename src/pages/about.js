import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

import Banner from "../components/UI/banner"
import SectionIntro from "../components/PageComponents/about/s1Intro"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      
      <SectionIntro
        bg=""
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={0.8}
        title="About Via Del Web"
        subtitle=""
        description={(
          <>
          <p className="mb-4">Via Del Web is a digital marketing agency based in Southern California. We specialize in web design, SEO, and ad campaigns. We are a team of dedicated professionals that are passionate about helping our clients reach their goals. We are committed to providing excellent customer service and building long-lasting relationships with our clients.</p>
          <p className="mb-4">Starting with only one customer, we have blossomed into a full-service digital marketing agency. Although we have grown exponentially and expanded significantly over the last several years, we're stuck to the same core values that helped us cater to our customers' needs from day one.</p>
          <p className="mb-4">We strive to provide effective marketing strategies to companies that range in a variety of size and industry. Regardless of your business, there's always room for marketing services. Allow us to surge the presence of your brand through web design, SEO, and ad campaigns. We offer proven digital marketing solutions, and we'll continue to do so, so get started today!</p>
</>
        )}
      />

    </Layout>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

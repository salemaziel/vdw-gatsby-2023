import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

//import Banner from "../components/UI/banner"
//import SectionIntro from "../components/PageComponents/about/s1Intro"

import ServicesHero from "../components/PageComponents/services/ServicesHero"
import S2Features from "../components/PageComponents/services/FeaturesSection2"
import CtaBanner2 from "../components/UI/ctaBanner2"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>

<ServicesHero
        title={
          <>
            We are <span className="font-light">Via Del Web</span>
          </>
        }
        subtitle="Let's build your Digital Real Estate."
        strapline=""
        size="md"
        bgColor=""
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />


      <S2Features
        title="The best tech under the hood"
        subtitle="Build user friendly and modern dashboards using the latest tech. Now is the time with a best selling UI framework."
        strapline="Created with passion"
        size="md"
        bgColor=""
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />

      
      {/*<SectionIntro
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
      />*/}



<CtaBanner2
      title="The fastest way from idea to live site. Period."
      description="We'll take care of everything, from design to deployment, so you can focus on your business."
      buttonText="Get Started"
      url="/contact"
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

import * as React from "react"
import { graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

//import S2about from "../components/PageComponents/home/s2about"
//import S3services from "../components/PageComponents/home/s3services"
import ServicesHero from "../components/PageComponents/services/ServicesHero"
//import S2Features from "../components/PageComponents/services/FeaturesSection2"
import ContentSection from "../components/PageComponents/services/ContentSection"
//import CtaSection2 from "../components/UI/CtaSection2"

import CtaBanner2 from "../components/UI/ctaBanner2"

const Services = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>


<ServicesHero
        title={
          <>
            We are <span className="font-light text-primary-500">Via Del Web</span>
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

      <ContentSection
        title="How Can We Help You Develop Your Digital Real Estate?"
        subtitle=""
        strapline=""
        size="md"
        bgColor=""
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      {/*<CtaSection2
        title="Ready? Let’s do it!"
        subtitle="Get your own custom dashboard and start building amazing services, always with the most solid and rock steady foundation."
        strapline=""
        size="lg"
        bgColor=""
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
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

export default Services

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

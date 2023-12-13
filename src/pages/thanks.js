import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "@/components/layout/layout"
import Section from "../components/Section"
import Container from "../components/UI/Container"

const Thanks = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Thanks for the message`
  return (
    <Layout location={location} title={siteTitle}>
      <Section
        id="thanks"
        className="py-8 bg-center bg-no-repeat md:py-16 text-regular-text dark:text-white bg-hero-background dark:bg-hero-background-dark"
        /*style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}*/
      >
        <Container className="container px-4 py-4 mx-auto md:py-16 lg:py-24 bg-white dark:bg-[#1a1a39]">
          <h1 className="mb-4">Thanks for reaching out.</h1>
          <h2>We will be in touch soon.</h2>
        </Container>
      </Section>
    </Layout>
  )
}

export default Thanks

export const Head = () => <Seo title="Thanks for the message" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

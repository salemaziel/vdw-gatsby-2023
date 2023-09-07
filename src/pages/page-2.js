import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"



const SecondPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
  <Layout location={location} title={siteTitle}>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}
export const Head = () => <Seo title="Page two" />

export default SecondPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
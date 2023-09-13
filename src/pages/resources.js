import * as React from 'react';
import { Link, graphql } from "gatsby"

import Seo from '../components/seo';
import Layout from "@/components/layout/layout";


const Resources = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Resources`
    return (
        
        <Layout location={location} title={siteTitle}>
        <h1>Resources</h1>
        </Layout>
    )
}

export default Resources;


export const Head = () => <Seo title="Resources" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

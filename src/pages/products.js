import * as React from 'react';
import { Link, graphql } from "gatsby"

import Seo from '../components/seo';
import Layout from "@/components/layout/layout";


const Products = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Products`
    return (
        
        <Layout location={location} title={siteTitle}>
        <h1>Products</h1>
        </Layout>
    )
}

export default Products;


export const Head = () => <Seo title="Products" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

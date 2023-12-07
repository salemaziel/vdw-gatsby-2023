import * as React from 'react';
import { graphql } from "gatsby"

import Seo from '../components/seo';
import Layout from "@/components/layout/layout";
import ContentSection from '../components/PageComponents/services/ContentSection';

import SideBarLayout from '../components/PageComponents/resources/sidebarlayout';
//import Container from '../components/UI/Container';
//import Section from '../components/UI/Section';


const Resources = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Resources`
    return (
        
        <Layout location={location} title={siteTitle}>

            <SideBarLayout>


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


            </SideBarLayout>
        








        
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

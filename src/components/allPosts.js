/* import React, { useState, Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
//import { useFlexSearch } from "react-use-flexsearch"
//import * as queryString from "query-string"
import "./searchPosts.css"




const AllPosts = () => {
    const data = useStaticQuery(graphql`
`)

    const posts = data.allMarkdownRemark.nodes

    return (
    <div className="mx-auto mt-5 mb-10">
      {console.log(posts)}
      <div className="CardDeck" >
        {posts.map(({ nodes }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="col-12 sm:col-4 md:col-6 lg:col-4" key="index">
            <div className="Card">
                {!!node.frontmatter.featuredImage && (
                  <Link
                    to={`/blog${node.fields.slug}`}
                    className="text-left bg-transparent shadow-none cursor-pointer text-cyan-600 hover:border-transparent hover:text-slate-400"
                  >
                    <img className="flex-shrink-0 block w-full h-auto max-w-full align-middle"
                    style={{borderTopLeftRadius: '4.75px', borderTopRightRadius: '4.75px'}} 
                      src={
                        node.frontmatter.featuredImage.childImageSharp.fluid.src
                      }
                      />
                  </Link>
                )}
                <div className="text-left" key={node.fields.slug}>
                  <Link
                    style={{ boxShadow: `none`, transition: 'border-bottom-color 0.2s ease 0s, color 0.2s ease 0s' }}
                    className="bg-transparent cursor-pointer text-cyan-600 hover:border-transparent hover:text-slate-400"
                    to={`/blog${node.fields.slug}`}
                  >
                    <h3
                      className="mx-0 mt-8 mb-4 text-base leading-normal tracking-widest text-center text-gray-700 uppercase"
                      style={{
                        color: "#434343",
                      }}
                    >
                      {title}
                    </h3>
                  </Link>
                  <div className="flex-auto p-5 break-words" style={{minHeight: 200}}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                      className="p-0 text-center"
                    />
                  </div>
                </div>
                <div className="py-3 px-5 text-left border-b-0 border-t border-solid border-x-0 border-neutral-200 bg-neutral-100 bg-opacity-[0.03]" style={{borderWidth: 0, borderRadius: '0px 0px 4.75px 4.75px'}}>
                  <small className="font-normal leading-7" style={{fontSize: '64%'}}>{node.frontmatter.date}</small>
                </div>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}

  export default AllPosts
  */
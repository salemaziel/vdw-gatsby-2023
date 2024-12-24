/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({
  description,
  lang,
  meta = [],
  keywords = [],
  title,
  image,
  pathname,
  article = false,
  children,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleAlt
            description
            author {
              name
            }
            siteLanguage
            siteUrl
            twitter
            logo
            banner
            keyword
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const titleAlt = site.siteMetadata.titleAlt
  const siteUrl = site.siteMetadata.siteUrl
  const twitterUsername = site.siteMetadata.twitter
  const metaLang = lang || site.siteMetadata.siteLanguage
  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${site.siteMetadata.banner}`
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl
  const metaKeywords = keywords.length > 0 ? keywords : site.siteMetadata.keyword.split(", ")

  const metaTags = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: metaTitle,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: article ? "article" : "website",
    },
    {
      property: "og:url",
      content: canonical,
    },
    {
      property: "og:image",
      content: metaImage,
    },
    {
      name: "twitter:card",
      content: metaImage ? "summary_large_image" : "summary",
    },
    {
      name: "twitter:creator",
      content: twitterUsername || "",
    },
    {
      name: "twitter:title",
      content: metaTitle,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
    {
      name: "twitter:image",
      content: metaImage,
    },
  ]

/*  
  if (metaKeywords.length > 0) {
    metaTags.push({
      name: "keywords",
      content: metaKeywords.join(", "),
    })
  }
*/

  return (
    <>
      <html lang={metaLang} />
      <title>{metaTitle}</title>
      <link rel="canonical" href={canonical} />
      {metaTags.concat(meta).map((tag, i) => {
        if (tag.name) {
          return <meta key={i} name={tag.name} content={tag.content} />
        } else if (tag.property) {
          return <meta key={i} property={tag.property} content={tag.content} />
        }
        return null
      })}
      {children}
    </>
  )
}

export default Seo

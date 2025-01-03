import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import SectionHeader from "../../SectionHeader";
//import { Link } from "./../util/router";
import Link from '@/resolvers/Link';

function ContentSection(props) {
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?fit=crop&w=800&h=600",
      title:
        "Web Design & Development",
      description:
        "Custom design and development of beautiful, functional websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.",
      url: "/get-started",
      tags: ["web-design", "web-development"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "March 3, 2023",
      readTime: "12 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=800&h=600",
      title: "Custom E-Commerce Solutions",
      description:
        "Custom E-Commerce websites built to scale. We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers.",
      url: "/get-started",
      tags: ["ecommerce", "web-design", "web-development"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 23, 2023",
      readTime: "20 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=800&h=600",
      title:
        "E-Commerce Design on Your Favorite Platform.",
      description:
        "We build eCommerce websites that are easy to use, easy to navigate, and are fully responsive web pages optimized for all devices and browsers - all using your favorite platform, including Shopify, Woocommerce, Wix, Squarespace, and more.",
      url: "/get-started",
      tags: ["ecommerce", "web-design", "web-development"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 15, 2023",
      readTime: "5 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?fit=crop&w=800&h=600",
      title:
        "Email Marketing for E-Commerce",
      description:
        "Email marketing is one of the most effective ways to grow your business. We create email marketing campaigns that are designed to convert your subscribers into customers.",
      url: "/get-started",
      tags: ["ecommerce", "automation", "marketing"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "March 3, 2023",
      readTime: "12 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=800&h=600",
      title: "E-Commerce Automation & SEO Optimization",
      description:
        "We can help you automate your eCommerce business and optimize your website for conversions. We offer a variety of services, including email marketing automation, on-page and off-page SEO optimization, and more.",
      url: "/get-started",
      tags: ["ecommerce", "automation", "seo-optimization", "marketing"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 23, 2023",
      readTime: "20 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=800&h=600",
      title:
        "Video Marketing AI for Youtube",
      description:
        "Video Marketing for YouTube. Social Media marketing with AI Generated Video. Build Your Brand Vith Video.",
      url: "/get-started",
      tags: ["automation", "marketing", "video"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 15, 2023",
      readTime: "5 min",
    },
  ];

  return (
<section className="relative pt-5 pb-3 bg-theme-light-bg dark:bg-theme-dark-bg">
      <div className="container space-y-16">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center text-theme-light-bg dark:text-theme-dark-bg"
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <Link as="div"
              to={post.url}
              className="flex flex-col items-center overflow-hidden rounded-lg shadow-sm dark:bg-primary-800 dark:text-gray-100 "
              key={index}
            >
              <Link to={post.url} className="relative block group">
                <div className="absolute inset-0 flex items-center justify-center transition duration-150 ease-out bg-blue-700 bg-opacity-75 opacity-0 group-hover:opacity-100">
                  <ArrowUpRightIcon className="inline-block w-10 h-10 text-white" />
                </div>
                <img src={post.image} alt="" />
              </Link>
              <div className="p-5 lg:p-6">
                <h4 className="mb-2 text-lg font-bold sm:text-xl">
                  <Link
                    to={post.url}
                    className="leading-7 hover:text-gray-600 text-heading-text dark:text-white dark:hover:text-gray-200"
                  >
                    {post.title}
                  </Link>
                </h4>
          {/*      <p className="mb-3 text-sm text-gray-600">
                  <Link
                    to={post.authorUrl}
                    className="font-medium text-blue-600 hover:text-blue-400"
                  >
                    {post.authorName}
                  </Link>{" "}
                  on <span className="font-medium">{post.date}</span> ·{" "}
                  {post.readTime} read
                </p>
          */}
                <p className="prose text-regular-text dark:text-gray-200">{post.description}</p>

                {post.tags && post.tags.length && (
                  <div className="mt-3 space-x-2">
                    {post.tags.map((tag, index) => (
                      <Link
                        to={`/tag/${tag}`}
                        className="font-semibold inline-flex px-2 leading-4 rounded-full text-blue-700 bg-blue-200 hover:opacity-80 text-xs py-0.5"
                        key={index}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
</section>
  );
}

export default ContentSection;

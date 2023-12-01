import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Section from "../../UI/Section";
import SectionHeader from "../../UI/SectionHeader";
//import { Link } from "./../util/router";
import Link from '@/resolvers/Link';

function ContentSection(props) {
  const posts = [
    {
      image:
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?fit=crop&w=800&h=600",
      title:
        "Lorem Ipsum",
      description:
        "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
      url: "/services#",
      tags: ["ecommerce", "automation"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "March 3, 2023",
      readTime: "12 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=800&h=600",
      title: "Lorem Ipsum",
      description:
        "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
      url: "/services#",
      tags: ["ecommerce", "web-design"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 23, 2023",
      readTime: "20 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=800&h=600",
      title:
        "Lorem Ipsum",
      description:
        "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
      url: "/services#",
      tags: ["ecommerce", "automation"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 15, 2023",
      readTime: "5 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?fit=crop&w=800&h=600",
      title:
        "Lorem Ipsum",
      description:
        "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
      url: "/services#",
      tags: ["ecommerce", "automation"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "March 3, 2023",
      readTime: "12 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?fit=crop&w=800&h=600",
      title: "Lorem Ipsum",
      description:
        "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
      url: "/services#",
      tags: ["ecommerce", "web-design"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 23, 2023",
      readTime: "20 min",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=800&h=600",
      title:
        "Lorem Ipsum",
      description:
        "Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum sleo mi nec lectus.",
      url: "/services#",
      tags: ["ecommerce", "automation"],
      authorName: "Salem Aziel",
      authorUrl: "/author/salem-aziel",
      date: "February 15, 2023",
      readTime: "5 min",
    },
  ];

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container space-y-16">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentSection;

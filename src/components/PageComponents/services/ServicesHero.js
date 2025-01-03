import React from "react";
import {
  CubeTransparentIcon,
  HeartIcon,
  BeakerIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  BoltIcon,
  FireIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";

import {StaticImage} from "gatsby-plugin-image";


//import LogoSVG from "@/images/logo-vertical-white2.svg";

import Section from "../../Section";
import SectionHeader from "../../SectionHeader";
import Container from "../../UI/Container";

function ServicesHero(props) {
  if (!props.title && !props.subtitle && !props.description && !props.list && !props.listTitle && !props.listItems) {
    return null;
  }
 {/*} const items = [
    {
      title: "Passion",
      icon: HeartIcon,
      iconColor: "text-slate-400",
    },
    {
      title: "Creativity",
      icon: BeakerIcon,
      iconColor: "text-emerald-500",
    },
    {
      title: "Design",
      icon: CheckBadgeIcon,
      iconColor: "text-orange-500",
    },
    {
      title: "Quality",
      icon: CheckCircleIcon,
      iconColor: "text-blue-500",
    },
    {
      title: "Simplicity",
      icon: BoltIcon,
      iconColor: "text-purple-500",
    },
    {
      title: "Motivation",
      icon: FireIcon,
      iconColor: "text-pink-500",
    },
  ];

  const itemsExtra = [
    {
      title: "Passion",
      description:
        "We are passionate with what we do and love crafting products that can make your life easier and help you succeed. We pay attention to small details and always aiming for the best.",
      icon: HeartIcon,
    },
    {
      title: "Commitment",
      description:
        "We are committed to our work and stand by our projects. Our aim is to improve them in every update and offer the most full-featured packages with the smallest possible footprint.",
      icon: ArrowDownIcon,
    },
    {
      title: "Less is more",
      description:
        "We believe that design should be invisible and enhance the user experience, not get in the way. This gives room for your content to breath and attracts your users’ attention.",
      icon: CubeTransparentIcon,
    },
  ];*/}

  return (
    <>
<section className="relative pt-5 pb-3 bg-theme-light-bg dark:bg-theme-dark-bg">
      <div className="container space-y-16">
        <div className="justify-center text-center">
          <StaticImage
            src="../../../images/logo-vertical.png"
            alt="Via Del Web Logo"
            width={300}
            height={300}
            className="inline-block w-32 h-32 mb-5" 
            layout="constrained"
            formats={["auto", "webp", "avif"]}
            quality={95}
            placeholder="blurred"
            loading="eager"

/>

        </div>





        {/*<div className="grid grid-cols-2 gap-8 p-8 text-center border rounded-lg sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, index) => (
            <div className="space-y-4" key={index}>
              <item.icon
                className={
                  "inline-block w-8 h-8" +
                  (item.iconColor ? ` ${item.iconColor}` : "")
                }
              />
              <h3 className="font-medium dark:text-white">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {itemsExtra.map((item, index) => (
            <div key={index}>
              <h3 className="flex items-center mb-2 space-x-2 text-lg font-bold tracking-wide uppercase dark:text-white">
                <item.icon
                  className={
                    "opacity-50 inline-block w-5 h-5" +
                    (item.iconColor ? ` ${item.iconColor}` : "")
                  }
                />
                <span>{item.title}</span>
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>*/}
      </div>
    </section>
          </>
  );
}

export default ServicesHero;

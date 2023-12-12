import React from "react";
/*import {
  CubeTransparentIcon,
  HeartIcon,
  BeakerIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  BoltIcon,
  FireIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
*/

import {StaticImage} from "gatsby-plugin-image";


//import LogoSVG from "@/images/logo-vertical-white2.svg";

import Section from "../../UI/Section";
import SectionHeader from "../../UI/SectionHeader";

function ServicesHero(props) {
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
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
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
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
          />
        </div>
      </div>
    </Section>
  );
}

export default ServicesHero;

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

import Section from "../../UI/Section";
import SectionHeader from "../../UI/SectionHeader";

function AboutHero(props) {
  const items = [
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
        <section className="relative block pt-5 pb-3 font-light leading-9 text-left text-neutral-700">
  <div className="leading-9 text-neutral-700">
    <div className="relative w-full px-4 mx-auto mt-4 mb-2 text-left xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md">
      <div className="flex flex-wrap items-stretch justify-center -mx-4 text-center">
        <div className="relative flex-grow w-full max-w-full px-1 py-3 basis-0">
          <header className="block px-2 text-neutral-700">
            <h1 className="mx-auto text-4xl font-extrabold tracking-tight text-heading-text dark:text-white font-merriweather " style={{lineHeight: '1.2'}}>
              About Us
            </h1>
            <p className="relative block p-0 mx-0 my-4 text-lg text-regular-text dark:text-gray-200 font-lato">
              Starting with only one customer, we have blossomed into a
              full-service digital marketing agency. Although we have grown
              exponentially and expanded significantly over the last several
              years, we're stuck to the same core values that helped us cater to
              our customers' needs from day one.
            </p>
            <p className="relative block p-0 mx-0 mt-0 mb-4 text-lg text-regular-text dark:text-gray-200 font-lato">
              We strive to provide effective marketing strategies to companies
              that range in a variety of size and industry. Regardless of your
              business, there's always room for marketing services. Allow us to
              surge the presence of your brand through web design, SEO, and ad
              campaigns. We offer proven digital marketing solutions, and we'll
              continue to do so, so get started today!
            </p>
            <ul className="p-0 m-0" style={{listStyle: 'none'}} />
          </header>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="relative block pt-5 pb-3 font-light leading-9 text-left text-neutral-700">
  <div className="leading-9 text-neutral-700">
    <div className="relative w-full px-4 mx-auto text-left xl:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md">
      <div className="flex flex-wrap items-center -mx-4 text-neutral-700">
        <div className="relative flex-grow w-full max-w-full px-4 basis-0">
          <figure className="block mx-auto my-0" style={{maxWidth: 570}}>
            {/*<img src="https://viadelweb.netlify.app/static/me-striped-shirt-585x780-5e8660a8b81ea15ef08eb324e5ad56d6.jpg" loading="lazy" className="block h-auto max-w-full align-middle" />*/}
            <StaticImage
            src="../../../images/me-striped-shirt-585x780.jpg"
            alt="Lead Developer Salem Aziel"
            width={585}
            height={780}
            className="block w-auto h-auto max-w-full align-middle" 
            layout="constrained"
            formats={["auto", "webp", "avif"]}
            quality={95}
            placeholder="blurred"
            loading="eager"

/>
          </figure>
        </div>
        <div className="relative py-12 px-4 mt-5 w-full rounded lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2 lg:text-left bg-opacity-[0.3] px-4 py-12 ">
          <header className="block px-2 text-lg">
            <p className="relative block p-0 mx-0 my-4 text-regular-text dark:text-gray-200 font-lato">
              My name is Salem, I am the owner and head developer of Via Del
              Web. I first got started with web development in 2014, building
              basic websites as class assignments while studying at the
              University of California, Santa Barbara.
            </p>
            <p className="relative block p-0 mx-0 mt-0 mb-4 text-regular-text dark:text-gray-200 font-lato">
              Beginning in 2017, I've done web design and website development
              both as a freelancer and as part of a fantastic team and agency by
              the name CodeStaff. At the start of 2020, CodeStaff began pivoting
              to build a freelancing platform. I continued to work alongside
              them, but began thinking of starting my own agency.
            </p>
            <p className="relative block p-0 mx-0 mt-0 mb-4 text-regular-text dark:text-gray-200 font-lato">
              Then COVID-19 started, and lots of things got thrown into the air
              at the point. To play it safe, I continued simply doing freelance
              work for clients I had already worked with around the country.
            </p>
            <p className="relative block p-0 mx-0 mt-0 mb-4 text-regular-text dark:text-gray-200 font-lato">
              As time went on and COVID-19 continued to spread with no end in
              sight, I realized that many small businesses we're not prepared
              with an online-focused business model, and we're hurting because
              of it. That was when I decided to begin laying the foundation to
              build my own web agency with a focus on local, small businesses.
            </p>
            <ul className="p-0 m-0" style={{listStyle: 'none'}} />
          </header>
        </div>
      </div>
    </div>
  </div>
</section>




        <div className="grid grid-cols-2 gap-8 p-8 text-center border rounded-lg sm:grid-cols-3 lg:grid-cols-6">
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
        </div>
      </div>
    </Section>
  );
}

export default AboutHero;

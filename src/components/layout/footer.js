import React from "react";
import Section from "../Section";
import Link from "@/resolvers/Link"
import { StaticImage } from "gatsby-plugin-image"

import Container from '@/components/UI/Container'

import FBSVG from "@/images/icon-facebook.svg"
import TwitterSVG from "@/images/icon-twitter.svg"
import IGSVG from "@/images/icon-instagram.svg"
import LinkedIn from "@/images/icon-linkedin.svg"


const Footer = (props) => (
  <footer className="bg-gradient-to-r from-[#543ab7] to-[#00acc1] text-white bg-center bg-cover bg-scroll bg-no-repeat">
    <div className="bg-[rgba(21,27,33,0.6)] py-[4.5em] px-0">
        <Container className="relative pt-5 pb-3 space-y-16">
          <div className="flex flex-wrap">
            {/* Logo Section */}
            <div className="w-full mb-8 md:w-4/12 md:mb-0">
              <Link to="/" className="inline-block">
                <StaticImage
                  layout="constrained"
                  formats={["auto", "webp", "avif"]}
                  src="../../images/logo-horiz-white2.png"
                  width={200}
                  quality={95}
                  alt="Via Del Web Logo"
                  loading="lazy"
                  placeholder="blurred"
                  className="w-[200px]"
                />
              </Link>
              
              {props.description && (
                <p className="mt-5">{props.description}</p>
              )}
              
              {props.copyright && (
                <p className="mt-4">{props.copyright}</p>
              )}
            </div>

            {/* Menu Section */}
            <div className="w-full md:w-8/12">
              <div className="flex flex-wrap">
                <div className="w-7/12 mt-3 md:w-1/2 md:mt-0">
                  
                  <ul className="space-y-2">
                    {[
                      ['About', '/about'],
                      ['Blog', '/blog'],
                      ['Contact', '/contact'],
                      ['Web Design', '/services/website-design'],
                      ['Graphic Design', '/services/graphic-design'],
                      ['Digital Marketing', '/services/digital-marketing']
                    ].map(([title, url]) => (
                      <li key={url}>
                        <Link 
                          to={url}
                          className="block px-3 py-2 transition-colors hover:bg-black/5 hover:rounded-md"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Section */}
                <div className="w-5/12 mt-3 md:w-1/2 md:mt-0">
                  
                  <ul className="space-y-2">
                    {[
                      [FBSVG, 'Facebook', 'https://www.facebook.com/viadelweb/'],
                      [IGSVG, 'Instagram', 'https://instagram.com/viadelweb'],
                      [TwitterSVG, 'Twitter', 'https://twitter.com/ViaDelWeb'],
                      [LinkedIn, 'LinkedIn', 'https://linkedin.com/company/viadelweb']
                    ].map(([icon, title, url]) => (
                      <li key={url}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="flex items-center px-3 py-2 transition-colors hover:bg-black/5 hover:rounded-md"
                        >
                          <img src={icon} alt={title} className="mr-2" />
                          <span>{title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </div>

    <p className="text-center text-sm py-[3em] px-0 bg-black/80">
      Via Del Web {new Date().getFullYear()}{" "}© All Rights Reserved
    </p>
  </footer>
);

export default Footer;

import React from "react";
import Section from "../Section";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
//import "./FooterMultiColumn.scss";
import "./FooterMultiColumn.css"

import { StaticImage } from "gatsby-plugin-image"

import Container from '@/components/UI/Container'

import FBSVG from "@/images/icon-facebook.svg"
import TwitterSVG from "@/images/icon-twitter.svg"
import IGSVG from "@/images/icon-instagram.svg"
import LinkedIn from "@/images/icon-linkedin.svg"

//import Logo2 from "../../images/logo-horiz-white2.png /images/logo-horiz-white2.png"

function FooterMultiColumn(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="row">
          <div className="col-12 md:col-4">
            <Link to="/">
              <div>
                {/*<img
                  className="FooterMultiColumn__logo"
                  src={props.logo}
                  alt="Logo"
                  loading="lazy"
                />*/}

<StaticImage
              
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../../images/logo-horiz-white2.png"
              width={200}
              quality={95}
              alt="Via Del Web Logo"
              loading="lazy"
              placeholder="blurred"
            />
            


              </div>
            </Link>

            {props.description && (
              <p className="FooterMultiColumn__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterMultiColumn__copyright">{props.copyright}</p>
            )}
          </div>
          <div  className="col-12 md:col-8">
            <div className="FooterMultiColumn__menus">
              <div className="row">

                <div className="mt-3 col-7 md:col-6 md:mt-0">
                  <h5>Menu</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/services/website-design">Web Design</Link>
                    </li>
                    <li>
                      <Link to="/services/graphic-design">Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="/services/digital-marketing">Digital Marketing</Link>
                    </li>

                  </ul>
                </div>
                <div className="px-0 mt-3 col-5 md:col-6 md:mt-0">
                  <h5>Social</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/viadelweb/"
                      >
                        <img
                          src={FBSVG}
                          alt="Facebook"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com/viadelweb"
                      >
                        <img
                          src={IGSVG}
                          alt="Instagram"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/ViaDelWeb"
                      >
                        <img
                          src={TwitterSVG}
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/company/viadelweb"
                      >
                        <img
                          src={LinkedIn}
                          alt="LinkedIn"
                        />
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FooterMultiColumn;

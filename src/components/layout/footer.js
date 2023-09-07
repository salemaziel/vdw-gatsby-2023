import React from "react";
//import { Link } from "gatsby";
//import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaResearchgate, FaLinkedin } from 'react-icons/fa'
import FooterMultiColumn from './FooterMultiColumn'

import LogoHorizWhite from '../../images/logo-horiz-white2.png'
//import Form from 'react-bootstrap/Form'

//import NewsletterSectionCentered from '../NewsletterSectionCentered'
//import footerStyles from "./footer.module.css";
import "./footer.css"
//import NewsletterForm from '../NewsletterForm'


const Footer = () => (

      <footer id="footer" className="Footer">
        <div className="content">

          <FooterMultiColumn
          bg=""
          textColor="light"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          description="Via Del Web is a bilingual San Diego, California based Web Design Agency building fast, beautiful, and responsive websites for small businesses."
          logo={LogoHorizWhite}
        />


        </div>
        <p className="copyright">
          Via Del Web {new Date().getFullYear()}{" "} © All Rights Reserved
          </p>

      </footer>
    );
;
export default Footer;

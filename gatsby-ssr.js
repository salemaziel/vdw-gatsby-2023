import React from 'react';
import fs from 'fs';
import path from 'path';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
/*
export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });

  // Determine the correct path based on the environment
  const cssPath = process.env.NODE_ENV === 'development'
    ? path.resolve(__dirname, '../../../styles/critical.css')
    : path.resolve(__dirname, '../../../styles/critical.css');

  // Check if the file exists
  if (fs.existsSync(cssPath)) {
    const criticalCSS = fs.readFileSync(cssPath, 'utf8');
    
    // Set the critical CSS in a style tag
    setHeadComponents([
      <style
        key="critical-css"
        dangerouslySetInnerHTML={{ __html: criticalCSS }}
      />,
    ]);
  } else {
    console.error(`Critical CSS file not found at ${cssPath}`);
  }
};
*/
import { createElement } from "react";

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('darkmode');
    document.getElementsByTagName("html")[0].className = mode === 'dark' ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  });
  setPreBodyComponents([script]);
};
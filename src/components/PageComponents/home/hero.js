import React from 'react';
import Link from '@/resolvers/Link';
import clsx from 'clsx';
import { data } from 'autoprefixer';
import Buttons from '@/components/UI/Buttons';

function HomeHero({ title, subtitle, lbutton, rbutton, data }) {
    const isCentered = data?.variant === 'centered'
    return (
        <section className="SectionWaves dark:text-[rgba(26,26,57,1)]">
        <div /*className="header bg-[linear-gradient(60deg,rgba(84, 58, 183, 0.9) 0%, rgba(0, 172, 193, 0.9) 100%), url('../../../images/annie-marek-barta-hKNVVGNba68-unsplash.jpg');] dark: dark:bg-black"*/ className="header bg-hero-background dark:bg-hero-background-dark">
          <div className="flex inner-header">
            {/*<h1>Simple CSS Waves</h1>*/}
            <div className="container flex flex-col items-center justify-center px-3 py-24 mx-auto">
              <div className="w-full text-center lg:pt-10 lg:mt-8 lg:w-2/3">
                <div className="flex flex-col pt-20 pb-24 md:pb-20 lg:py-8">
                {title && (
                  <h1 className="mb-8 text-4xl font-light text-white title-font sm:text-6xl font-lato headline">
                {title}    
                  </h1>
                )}
                {subtitle && (
                  <span className="max-w-2xl px-4 mt-8 text-xl leading-relaxed sm:text-3xl sm:px-4">{subtitle}</span>
                )}
                </div>
                <div className="flex py-4 justify-evenly md:mt-10">
              {lbutton && (
                  <Link
                    to="/about"
                    className="px-4 py-3 text-white border-white d-inline-block rounded-2xl "
                  >
                    Learn More
                  </Link>
              )}
              {rbutton && (
                  <Link
                    to="/contact"
                    id="work"
                    className="px-4 py-3 font-sans text-blue-600 bg-white rounded-lg d-inline-block"
                  >
                    Work with Us
                  </Link>
              )}
                </div>
              </div>
            </div>
          </div>
  
          {/*Waves Container*/}
          <div>
            <svg
              className="waves dark:text-[rgba(26,26,57,1)]"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                  className='dark:text-[rgba(26,26,57,1)] dark:fill-[#8585ad] dark:stroke-[#8585ad] dark:opacity-70'
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                  className='dark:text-[rgba(26,26,57,1)] dark:fill-[rgba(26,26,57,1)] dark:stroke-[rgba(26,26,57,1)] dark:opacity-50'
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                  className='dark:text-[rgba(26,26,57,1)] dark:fill-[rgba(26,26,57,1)] dark:stroke-[rgba(26,26,57,1)] dark:opacity-30'
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" className='dark:text-[rgba(26,26,57,1)] dark:fill-[rgba(26,26,57,1)] dark:stroke-[rgba(26,26,57,1)]' />
              </g>
            </svg>
          </div>
        </div>
      </section>
    );
};

export default HomeHero;
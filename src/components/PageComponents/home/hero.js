import React from 'react';
import Link from '@/resolvers/Link';
function HomeHero({ title, subtitle, lbutton, lbuttonlink, rbutton, rbuttonlink }) {
    return (
        <section className="SectionWaves dark:text-[rgba(26,26,57,1)]">
            <div className="hero bg-hero-background dark:bg-hero-background-dark">
                <div className="flex inner-hero">
                    {/* Simple CSS Waves */}
                    <div className="container flex flex-col items-center justify-center px-4 pt-32 pb-24 mx-auto md:py-24">
                        <div className="w-full md:text-left lg:pt-10 lg:mt-8 lg:w-2/3">
                            <div className="flex flex-col pt-24 pb-16 md:pb-20 lg:py-8">
                                {title ? (
                                    <h1 className="mb-8 text-4xl font-light leading-10 tracking-wide text-white title-font sm:text-6xl font-lato headline">
                                        {title}
                                    </h1>
                                ) : null}
                                {subtitle ? (
                                    <span className="max-w-2xl px-0 mx-auto mt-8 text-lg leading-relaxed tracking-wide text-center text-white sm:text-3xl sm:px-4">{subtitle}</span>
                                ) : null}
                            </div>
                            <div className="flex flex-wrap justify-center py-4 md:mt-10">
                                {lbutton ? (
                                    <Link
                                        to={lbuttonlink}
                                        /*className="inline-block w-full px-4 py-3 mb-3 text-xl font-bold leading-loose text-white transition duration-200 hover:border hover:border-white rounded-xl sm:w-auto sm:mb-0 sm:mr-4"*/
                                        className="bg-white hover:bg-[#2579bceb] hover:text-white inline-block w-full px-4 py-3 mb-3 text-xl font-bold leading-loose text-center text-[#2579bceb] transition-colors ease-in-out delay-0 duration-300 focus-within:outline outline-white focus:outline-white hover:shadow-lg  rounded-lg sm:w-auto sm:mb-0 sm:mr-4"
                                    >
                                        {lbutton}
                                    </Link>
                                ) : null}
                                {rbutton ? (
                                    <Link
                                        to={rbuttonlink}
                                        /*className="inline-block w-full px-4 py-3 mb-3 text-xl font-bold leading-loose text-blue-600 transition duration-200 bg-white rounded-xl sm:w-auto sm:mb-0 sm:ml-4"*/
                                        
                                        className="hover:bg-white bg-transparent text-white inline-block w-full px-4 py-3 mb-3 text-xl font-bold leading-loose text-center hover:text-[#2579bceb] transition-colors ease-in-out delay-0 duration-300 focus-within:outline outline-white focus:outline-white hover:shadow-lg  rounded-lg sm:w-auto sm:mb-0 sm:mr-4"
                                    >
                                        {rbutton}
                                    </Link>
                                ) : null}
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
                                fill="rgba(255,255,255,0.7)"
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

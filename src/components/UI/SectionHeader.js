import React from "react";

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle && !props.strapline) {
    return null;
  }
  return (
    <header
      className={
        "mb-8 last:mb-0" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.strapline && (
        <div className="text-sm uppercase font-bold tracking-wider mb-1 text-[#2579bceb]">
          {props.strapline}
        </div>
      )}

      {props.title && (
        <h1 className="text-3xl font-extrabold md:text-4xl dark:text-white">{props.title}</h1>
      )}

      {props.subtitle && (
        <h2 className="inline-block max-w-screen-md mt-4 text-lg font-medium md:text-xl md:leading-relaxed opacity-80 dark:text-white">
          {props.subtitle}
        </h2>
      )}
    </header>
  );
}

export default SectionHeader;

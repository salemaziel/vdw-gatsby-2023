import React from "react";
//import "./SectionHeader.scss";
//import "./SectionHeader.css"


function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle && !props.description && !props.list && !props.listTitle && !props.listItems) {
    return null;
  }

  return (
    <section
      className={
        "" + (props.className ? ` ${props.className}` : "")
      }
    >
        {props.title && (
          <h1
            className={
              "font-weight-bold font-bold text-theme-light-heading dark:text-theme-dark-heading" + 
              (props.subtitle && props.spaced ? " mb-4" : "") +
              (!props.subtitle ? " mb-0" : "") +
              (props.size ? ` h${props.size}` : "")
            }
          >
            {props.title}
          </h1>
        )}

        {props.subtitle && (
          <p className="inline-block max-w-full mb-0 text-left">{props.subtitle}</p>
        )}

        {props.description && (
        <div className="block my-4 font-bold text-black dark:text-white">
          {props.description}
        </div>
      )}
      {props.list && (
      <ul className="mx-auto my-4 text-center list-none">
      {props.listTitle && (
          <li className="font-bold text-center list-none">{props.listTitle}</li>
        )}
        {props.listItems && props.listItems.map((item, index) => (
          <li key={index} className="mx-auto my-4 text-center list-none">
            {item}
          </li>
        ))}
      </ul>
      )}


    </section>
  );
}

export default SectionHeader;

import React from "react";
//import "./SectionHeader.scss";
import "./SectionHeader.css"


function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle && !props.description && !props.list && !props.listTitle && !props.listItems) {
    return null;
  }

  return (
    <section
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
        {props.title && (
          <h1
            className={
              "font-weight-bold font-bold" + 
              (props.subtitle && props.spaced ? " mb-4" : "") +
              (!props.subtitle ? " mb-0" : "") +
              (props.size ? ` h${props.size}` : "")
            }
          >
            {props.title}
          </h1>
        )}

        {props.subtitle && (
          <p className="mb-0 SectionHeader__subtitle">{props.subtitle}</p>
        )}

        {props.description && (
        <div className="my-4 SectionHeader__description">
          {props.description}
        </div>
      )}
      {props.list && (
      <ul className="SectionHeader__list">
      {props.listTitle && (
          <li className="SectionHeader__listitem__title">{props.listTitle}</li>
        )}
        {props.listItems && props.listItems.map((item, index) => (
          <li key={index} className="SectionHeader__listitem">
            {item}
          </li>
        ))}
      </ul>
      )}


    </section>
  );
}

export default SectionHeader;

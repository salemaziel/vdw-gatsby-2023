import React from "react";

import Section from "@/components/Section";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import SectionHeader from "@/components/SectionHeader";
import Container from "../../UI/Container";

const SectionIntro = (props) => {
  return (
    <>
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container className="container mt-4 mb-2 text-left">
          <div className="items-center justify-center row">
            <div /*xs={12}* / md="auto" */ className="px-1 py-3 col">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                description={props.description}
                size={1}
                spaced={false}
                className="px-2"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SectionIntro;

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Button from "./Button2";
//import { Link } from "./../util/router";

import Link from '@/resolvers/Link';

function CtaSection2(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container py-10 md:py-0">
        <div className="relative">
          <div className="absolute bottom-0 right-0 w-32 h-32 text-blue-300 transform translate-x-12 translate-y-16 pattern-dots lg:w-48 lg:h-48" />
          <div className="absolute top-0 left-0 w-32 h-32 text-blue-300 transform -translate-x-12 -translate-y-16 pattern-dots lg:w-48 lg:h-48" />
          <div className="absolute inset-0 -m-6 transform rounded-xl rotate-2 bg-blue-50 bg-opacity-60" />
          <div className="absolute inset-0 -m-6 transform bg-blue-100 rounded-xl -rotate-2 bg-opacity-60" />
          <div className="relative p-12 text-center bg-[#2579bceb] rounded shadow-lg lg:py-16 lg:px-16">
            <div className="space-y-10">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                strapline={props.strapline}
              />
              <div className="text-center">
                <Button
                  component={Link}
                  to="/pricing"
                  size="xl"
                  variant="secondary"
                  endIcon={
                    <ArrowRightIcon className="inline-block w-5 h-5 opacity-70" />
                  }
                >
                  Let's get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection2;

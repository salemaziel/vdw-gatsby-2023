import React from "react";
import {
  AdjustmentsVerticalIcon,
  ChartPieIcon,
  GlobeAmericasIcon,
  BoltIcon,
  PuzzlePieceIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Section from "../../UI/Section";
import SectionHeader from "../../UI/SectionHeader";
import FeatureIcon from "../../UI/FeatureIcon";

function S2Features(props) {
  const features = [
    {
      title: "Customizable",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: AdjustmentsVerticalIcon,
      iconColor: "orange",
    },
    {
      title: "Rich Statistics",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: ChartPieIcon,
      iconColor: "red",
    },

    {
      title: "Works globally",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: GlobeAmericasIcon,
      iconColor: "emerald",
    },
    {
      title: "Lighting fast UI",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: BoltIcon,
      iconColor: "purple",
    },
    {
      title: "Components",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: PuzzlePieceIcon,
      iconColor: "blue",
    },
    {
      title: "Auto Auth",
      description:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
      icon: UsersIcon,
      iconColor: "pink",
    },
  ];

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container space-y-16">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {features.map((feature, index) => (
            <div
              className="p-5 text-center transition duration-200 ease-out group rounded-2xl"
              key={index}
            >
              <FeatureIcon
                color={feature.iconColor}
                size="large"
                className="mb-12"
              >
                <feature.icon />
              </FeatureIcon>
              <h4 className="mb-2 text-lg font-bold dark:text-white">{feature.title}</h4>
              <p className="leading-relaxed text-gray-600 dark:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default S2Features;

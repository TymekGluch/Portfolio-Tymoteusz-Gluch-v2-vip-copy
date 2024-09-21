import React from "react";
import { Technologies } from "../components/domain/homePage/Technologies";
import {
  TECHNOLOGIES_HEADING,
  TECHNOLOGIES_VARIANT,
} from "../components/domain/homePage/Technologies/Technologies.constants";
import { Section } from "../components/Section";
import {
  SECTION_COLOR_VARIANT,
  SECTION_COMPONENT,
} from "../components/Section/Section.constants";
import { AboutMe } from "../components/domain/homePage/AboutMe";
import { useFetchAboutMeData } from "../components/domain/homePage/AboutMe/AboutMe.hooks";

const HomePage: React.FC = () => {
  const { heading: aboutMeHeading, isLoading } = useFetchAboutMeData();

  return (
    <>
      <Section
        id="about-me"
        heading={isLoading ? "loading..." : aboutMeHeading}
        sectionIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="inherit"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        }
        colorVariant={SECTION_COLOR_VARIANT.DEFAULT}
        sectionComponent={SECTION_COMPONENT.HEADER}>
        <AboutMe />
      </Section>

      <Technologies
        headingTag={TECHNOLOGIES_HEADING.H2}
        variant={TECHNOLOGIES_VARIANT.MOBILE_SECTION}
        id="techonologies-i-use"
      />

      <Section
        id="careere"
        heading="Careere"
        sectionIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="inherit"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
        }
        colorVariant={SECTION_COLOR_VARIANT.TERTIARY}
        sectionComponent={SECTION_COMPONENT.SECTION}
      />

      <Section
        id="my-project"
        heading="My porject"
        sectionIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="inherit"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
            />
          </svg>
        }
        colorVariant={SECTION_COLOR_VARIANT.PRIMARY}
        sectionComponent={SECTION_COMPONENT.SECTION}></Section>

      <Section
        id="contact"
        heading="contact"
        sectionIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
            />
          </svg>
        }
        sectionComponent={SECTION_COMPONENT.SECTION}></Section>
    </>
  );
};

export { HomePage };

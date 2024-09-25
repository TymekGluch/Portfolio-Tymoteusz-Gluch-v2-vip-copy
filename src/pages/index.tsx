import { Technologies } from "../components/domain/homePage/Technologies";
import {
  TECHNOLOGIES_HEADING,
  TECHNOLOGIES_VARIANT,
} from "../components/domain/homePage/Technologies/Technologies.constants";
import { Section } from "../components/Section";
import { SECTION_COMPONENT } from "../components/Section/Section.constants";
import { AboutMe } from "../components/domain/homePage/AboutMe";
import { useFetchAboutMeData } from "../components/domain/homePage/AboutMe/AboutMe.hooks";
import UserIcon from "../assets/icons/user.svg?react";
import BriefcaseIcon from "../assets/icons/briefcase.svg?react";
import PaintBrushIcon from "../assets/icons/paintBrush.svg?react";
import EnvelopeIcon from "../assets/icons/envelopeOpen.svg?react";
import { COLOR_VARIANT } from "../constants";
import { CarerreTimeline } from "../components/domain/homePage/Carerre";
import { CARERRE_TIMELINE_VARIANT } from "../components/domain/homePage/Carerre/CarerreTimeline.constants";

const HomePage = () => {
  const { heading: aboutMeHeading, isLoading } = useFetchAboutMeData();

  return (
    <>
      <Section
        id="about-me"
        heading={isLoading ? "loading..." : aboutMeHeading}
        sectionIcon={<UserIcon />}
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
        sectionIcon={<BriefcaseIcon />}
        colorVariant={COLOR_VARIANT.TERTIARY}
        sectionComponent={SECTION_COMPONENT.SECTION}>
        <CarerreTimeline
          colorVariant={COLOR_VARIANT.TERTIARY}
          variant={CARERRE_TIMELINE_VARIANT.SQUERE}
          primaryColorVariant={COLOR_VARIANT.PRIMARY}
        />
      </Section>

      <Section
        id="my-project"
        heading="My porject"
        sectionIcon={<PaintBrushIcon />}
        colorVariant={COLOR_VARIANT.SECONDARY}
        sectionComponent={SECTION_COMPONENT.SECTION}
      />

      <Section
        id="contact"
        heading="contact"
        sectionIcon={<EnvelopeIcon />}
        sectionComponent={SECTION_COMPONENT.SECTION}
      />
    </>
  );
};

export { HomePage };

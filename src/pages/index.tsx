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
import { ALLOWED_HEADING_TAGS, COLOR_VARIANT } from "../constants";
import { CarerreTimeline } from "../components/domain/homePage/Carerre";
import { CARERRE_TIMELINE_VARIANT } from "../components/domain/homePage/Carerre/CarerreTimeline.constants";
import { useIsMobile } from "../hooks";

const HomePage = () => {
  const { heading: aboutMeHeading, isLoading } = useFetchAboutMeData();
  const isMobile = useIsMobile();

  const carerreVariant = isMobile
    ? CARERRE_TIMELINE_VARIANT.SQUERE
    : CARERRE_TIMELINE_VARIANT.CIRCLE;

  return (
    <>
      <Section
        id="about-me"
        heading={isLoading ? "loading..." : aboutMeHeading}
        sectionIcon={<UserIcon />}
        as={SECTION_COMPONENT.HEADER}>
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
        as={SECTION_COMPONENT.SECTION}>
        <CarerreTimeline
          colorVariant={COLOR_VARIANT.TERTIARY}
          headingComponent={ALLOWED_HEADING_TAGS.H3}
          variant={carerreVariant}
          primaryColorVariant={COLOR_VARIANT.PRIMARY}
        />
      </Section>

      <Section
        id="my-project"
        heading="My projects"
        sectionIcon={<PaintBrushIcon />}
        colorVariant={COLOR_VARIANT.SECONDARY}
        as={SECTION_COMPONENT.SECTION}
      />

      <Section
        id="contact"
        heading="contact"
        sectionIcon={<EnvelopeIcon />}
        as={SECTION_COMPONENT.SECTION}
      />
    </>
  );
};

export { HomePage };

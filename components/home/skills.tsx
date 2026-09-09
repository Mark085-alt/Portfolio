// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SKILL_ICONS: Record<string, string> = {
  "Business Analysis": "/skills/business-analysis.svg",
  "Requirements Gathering": "/skills/requirements-gathering.svg",
  "User Stories": "/skills/user-stories.svg",
  "Process Mapping": "/skills/process-mapping.svg",
  "Stakeholder Management": "/skills/stakeholder-management.svg",
  "Product Management": "/skills/product-management.svg",
  "Product Thinking": "/skills/product-thinking.svg",
  "Feature Planning": "/skills/feature-planning.svg",
  "Project Management": "/skills/project-management.svg",
  "Agile / Scrum": "/skills/agile-scrum.svg",
  "Sprint Planning": "/skills/sprint-planning.svg",
  Jira: "/skills/jira.svg",
  Figma: "/skills/figma.svg",
  Notion: "/skills/notion.svg",
  "Azure DevOps": "/skills/azure-devops.svg",
  SQL: "/skills/sql.svg",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">SKILLS</p>
      <h1 className="section-heading seq mt-2">My Skills</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        I turn complex business needs into clear product direction and
        actionable delivery plans.{" "}
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div
        className={`flex flex-wrap seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => {
          const icon = skill
            .split(/\s|\//)
            .filter(Boolean)
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <div
              key={skill}
              className="skill mr-4 mb-4 flex w-40 flex-col items-center text-center"
              title={skill}
            >
              {SKILL_ICONS[skill] ? (
                <Image
                  src={SKILL_ICONS[skill]}
                  alt={`${skill} icon`}
                  width={64}
                  height={64}
                />
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300 text-sm font-bold text-cyan-300">
                  {icon}
                </span>
              )}
              <span className="mt-2 text-sm leading-tight">{skill}</span>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-10">
            {renderSkillColumn("BUSINESS & STRATEGY", SKILLS.business)}
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6">
              {renderSkillColumn("DELIVERY & COLLABORATION", SKILLS.delivery)}
            </div>
            <div>{renderSkillColumn("TOOLS", SKILLS.tools)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

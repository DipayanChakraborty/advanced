import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ExperienceCard from "./ExperienceCard";

const DATA = [
  {
    title: "Intermediate",
    data: ["HTML5", "CSS3", "SASS", "JavaScript", "React", "C++"],
  },
  {
    title: "Basic",
    data: ["EJS", "RESTful API", "NextJS", "Github", "Bootstrap"],
  },
  {
    title: "Familiar With",
    data: ["NodeJS", "MongoDB", "ExpressJS", "TypeScript"],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {DATA.map((ele) => {
          return <ExperienceCard props={ele} />;
        })}
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import "./about.css";
import me2 from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import AboutCard from "./aboutCard";

const DATA = [
  {
    icon: <FaAward />,
    title: "Education",
    data: [
      {
        title: "RV College of Engineering, Bangalore",
        timeline: "2020-2024",
      },
      {
        title: "Mary Immaculate School, West Bengal",
        timeline: "2003-2019",
      },
    ],
  },
  {
    icon: <FaBookOpen />,
    title: "CourseWork",
    data: [
      {
        title: "Data Structures & Algorithms",
      },
      {
        title: "Joy of Computing in Python",
      },
      {
        title: "Management Information Systems",
      },
      {
        title: "Computer Networks",
      },
      {
        title: "Real time Operating Systems",
      },
      {
        title: "Web Programming",
      },
    ],
  },
  {
    icon: <VscFolderLibrary />,
    title: "Interests",
    data: [
      {
        title: "Sports",
      },
      {
        title: "Gym",
      },
      {
        title: "Rock and Metal music",
      },
      {
        title: "Geopolitics",
      },
    ],
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={me2} alt="About" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            {DATA.map((ele) => {
              return <AboutCard props={ele} />;
            })}
          </div>
          <p>
            Hello there! Welcome to my portfolio. <br /> After 2 years of
            coding, I've come to realize that being a programmer isn't just
            about writing code. It's about understanding requirements and
            translating them into code to shape the product. Instead of thinking
            in code, I approach it by considering the impact. I firmly believe
            my skills can be harnessed to scale a product and create a
            meaningful impact.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

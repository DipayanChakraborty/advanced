import React from "react";
import "./portfolio.css";
import PortfolioCard from "./portfolioCard";

const DATA = [
  {
    image: "https://i.postimg.cc/0yhdFY8V/E-commerce.png",
    title: "E-commerce Website",
    github: "https://github.com/DipayanC2012/E-Commerce",
    hosted_site: "https://e-commerce-aish.netlify.app/",
  },
  {
    image: "https://i.postimg.cc/MGkVdzD4/netflix.png",
    title: "Netflix Clone",
    github: "https://github.com/DipayanC2012/Netflix-Clone",
    hosted_site: "https://netflix-dip.netlify.app/",
  },
  {
    image: "https://i.postimg.cc/fTGyKvp9/wysa.png",
    title: "Wysa Project",
    github: "https://github.com/DipayanC2012/Wysa-Proj",
    hosted_site: "https://wysaproj.netlify.app/",
  },
  {
    image: "https://i.postimg.cc/43NF7hbh/image.png",
    title: "Recipe Finder",
    github: "https://github.com/DipayanC2012/Recipe-FInder",
    hosted_site: "https://recipefinder2012.netlify.app/",
  },
  {
    image: "https://i.postimg.cc/nzbSWdXt/image.png",
    title: "Hotel Booking Site",
    github: "https://github.com/DipayanC2012/Hotel",
    hosted_site: "https://luxury-hotel-kappa.vercel.app/",
  },
  {
    image: "https://i.postimg.cc/j5b6dRnN/expense-tracker.png",
    title: "Expense Tracker Site",
    github: "https://github.com/DipayanC2012/expense-tracker-website-ReactJS",
    hosted_site: "https://expensetrackerdc.netlify.app/",
  },

  {
    image: "https://i.postimg.cc/vHBrmqTP/Blog-Website.png",
    title: "Blog Website",
    github: "https://github.com/DipayanC2012/Blog_Websites",
    // hosted_site: "",
  },
  {
    image: "https://i.postimg.cc/Hs6RRh8d/Newsletter.png",
    title: "Newsletter SignUp",
    github: "https://github.com/DipayanC2012/Newsletter-signup",
    // hosted_site: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {DATA.map((ele) => {
          return <PortfolioCard props={ele} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;

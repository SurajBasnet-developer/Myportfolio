import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pjokes.png";
import IMG2 from "../../assets/strongpwwdg.png";
import IMG3 from "../../assets/gituser.png";
import IMG4 from "../../assets/covid.png";
import IMG5 from "../../assets/qr.png";
import IMG6 from "../../assets/weather.png";

const Portfolio = () => {
  const soloprojects = [
    {
      id: 1,
      title: "Programming Jokes",
      img: IMG1,
      description:
        "Programming Jokes app that generates a random jokes about Programming",
      technologies: "React",
      link: "https://surajbasnet-developer.github.io/ProgrammingJokes/",
      github: "https://github.com/SurajBasnet-developer/ProgrammingJokes",
    },
    {
      id: 2,
      title: "Strong Password Generator",
      img: IMG2,
      description:
        "Strong password generator is used for creating strong passwords",
      technologies: "React",
      link: "https://surajbasnet-developer.github.io/Strong-Password-Creator/",
      github:
        "https://github.com/SurajBasnet-developer/Strong-Password-Creator",
    },

    {
      id: 3,
      title: "GitHub User Search",
      img: IMG3,
      description: "Search the Github user accounts",
      technologies: "React",
      link: "https://surajbasnet-developer.github.io/Github-User-Search/",
      github: "https://github.com/SurajBasnet-developer/Github-User-Search",
    },

    {
      id: 4,
      title: "CovidTracker",
      img: IMG4,
      description: "Find the latest updates of COVID.",
      technologies: "React",
      link: "https://surajbasnet-developer.github.io/CovidTracker/",
      github: "https://github.com/SurajBasnet-developer/CovidTracker",
    },

    {
      id: 5,
      title: "QRCODE Generator",
      img: IMG5,
      description: "Create a QR code ",
      technologies: "React",
      link: "https://surajbasnet-developer.github.io/QRCODE/",
      github: "https://github.com/SurajBasnet-developer/QRCODE",
    },
    {
      id: 6,
      title: "Weather Information",
      img: IMG6,
      description: "Find the weather condition of different cities.",
      technologies: "CSS | JavaScript",
      link: "https://surajbasnet-developer.github.io/weatherApp/",
      github: "https://github.com/SurajBasnet-developer/weatherApp",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloprojects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title}></img>
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

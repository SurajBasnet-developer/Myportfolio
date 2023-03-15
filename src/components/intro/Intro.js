import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./intro.css";
import ME from "../../assets/ME.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon">
                <h5>Projects</h5>
                <small>25+ Completed Projects</small>
              </VscFolderLibrary>
            </article>
          </div>
          <p>
            Over the past few months, I have been working remotely, utilizing my
            skills in HTML, CSS, PHP and React to develop a range of projects,
            from landing pages to APIs.Working with senior can be challenging,
            but it has taught me how to remain productive and efficient, even in
            high-pressure situations, which are crucial attributes for success
            in the tech industry.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

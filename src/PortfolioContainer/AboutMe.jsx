import React from "react";

function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="../img/jj.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a software developer with over a year of experience in the tech
            industry. My passion for coding and problem-solving led me to
            develop a code generator application, showcasing my proficiency in
            software development. During my internship at Badger Technologies, I
            contributed to various projects and gained valuable industry
            experience. I am dedicated to learning new technologies and enjoy
            tackling challenging projects. My proactive mindset drives me to
            continuously enhance my skills and deliver scalable solutions. I am
            eager to collaborate on new opportunities and bring innovative ideas
            to the table.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

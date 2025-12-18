import React from "react";
import Resume from "../../pdf/Anubhav_.pdf";
import Info from "../../Components/Info";
import { RiDownloadFill } from "react-icons/ri";
import Stats from "../../Components/Stats";
import { skill } from "../../Components/Data";
import Skills from "../../Components/Skills";
import './about.css';
import { resume } from "../../Components/Data";
import ResumeItem from "../../Components/ResumeItem";
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about-personal">
          Hi, I’m <span className="main"> Anubhav Singh</span>, a 3rd-year <span className="main"> BTech- CSE</span> student with a strong interest in web development, problem-solving and building real-world applications. I enjoy working on projects that challenge my creativity and logic, from designing user-friendly interfaces to developing efficient backend functionality.

I am constantly learning new technologies, improving my development skills, and working on projects that help me grow. My goal is to become a capable developer who can create impactful and scalable digital solutions.
        </div>
        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">
              Personal Info
            </h3>
            <ul className="info-list grid">
              <Info></Info>
            </ul>
            <a href={Resume} className="button" target="blank" >Download Resume
<span className="button-icon"><RiDownloadFill /></span>

            </a>
          </div>
          <div className="stats grid">
            <Stats></Stats></div>
        </div>
      </section>
      <div className="separator">

      </div>
      <section className="skills">
        <h3 className="section-subtitle subtitle-center">
          My Skills
        </h3>
        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">
              Frontend Developer
            </h3>
            <div className="skills-items grid" >
              {skill.map((val)=>{
                if(val.category==='developer'){
                  return <Skills key={val.id} {...val}></Skills>
                }
              })}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-title">
              Backend Developer
            </h3>
            <div className="skills-items grid" >
              {skill.map((val)=>{
                if(val.category==='designer'){
                  return <Skills key={val.id} {...val}></Skills>
                }
              })}
            </div>
          </div>
           <div className="skills-group">
            <h3 className="skills-title">
         Programming Languages & Skills
            </h3>
            <div className="skills-items grid" >
              {skill.map((val)=>{
                if(val.category==='programming'){
                  return <Skills key={val.id} {...val}></Skills>
                }
              })}
            </div>
          </div>
        </div>
      </section>
         <div className="separator"></div>
         <section className="resume">
          <h3 className="section-subtitle subtitle-center">
          Education & Experience
        </h3>
        <div className="resume-container grid">
          <div className="resume-group grid">
            {
              resume.map((val)=>{
                if(val.category==='education'){
                  return (
                    <ResumeItem key={val.id} {...val} ></ResumeItem>
                  )
                }
              })
            }
          </div>
          <div className="resume-group grid">
            {
              resume.map((val)=>{
                if(val.category==='experience'){
                  return (
                    <ResumeItem key={val.id} {...val} ></ResumeItem>
                  )
                }
              })
            }
          </div>
        </div>
        
         </section>
    </main>
  );
};

export default About;

import Profile from "../../assets/home.jpg";
import Photo from "../../assets/Profimage.jpg";
import {Link} from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import './home.css'
const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Photo} alt="" className="home-img" />
      <div className="home-content">
        <h1 className="home-title">
          <span> I'm Anubhav Singh </span> <br />
          Web Developer
        </h1>


        <p className="home-description">
          I’m Anubhav Singh — a passionate frontend developer always striving to build clean, responsive and user-friendly web experiences. I enjoy turning ideas into polished interfaces using modern web technologies and continuous learning to improve my craft. My focus is on writing efficient code, building intuitive UI, and delivering meaningful digital experiences.
        </p>

  {     /*<div className="links">
<RiLinkedinBoxFill  className="icon"/>
 <RiGithubFill className="icon"></RiGithubFill>
        </div>*/}
        <Link to='/about' className="button">More About Me 
        <span className="button-icon">
          <RiArrowRightLine />
         
          </span></Link>
      </div>
      <div className="color-block"></div>
          <div className="color-blockr"></div>
    </section>
  );
};

export default Home;

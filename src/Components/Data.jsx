
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";


import photo1jpg from "../assets/photo1.jpg";
import html from "../assets/download.png";
import css from "../assets/css.png";
import js from "../assets/js.jpeg";
import react from "../assets/react.png";
import tc from "../assets/tc.png";
import c from "../assets/c.png";
import ce from "../assets/ce.jpeg";
import java from "../assets/java.png";
import node from "../assets/node.jpeg";
import express from "../assets/express.png";
import sql from "../assets/sql.png";
import mongo from "../assets/mongo.png";
export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];


/*========== INFO ==========*/
export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Anubhav',
  },

  {
    title: 'Last Name : ',
    description: 'Singh',
  },

  {
    title: 'Age : ',
    description: '20 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'Dewas',
  },

  {
    title:`Github :` ,
    description: <a href="https://github.com/anub1004"><span className="vi"> View Profile</span></a>,
  },

  {
    title: 'Email : ',
    description: 'anubhavsingh6260@gmail.com',
  },

  {
    title: 'Linkeln : ',
    description: <a href=""><span className="vi"> View Profile</span></a>,
  },

  {
    title: 'Langages : ',
    description: ' English,Hindi',
  },
];


/*========== STATS ==========*/
export const stats = [
  {
    no: '92%',
    title: '10th <br /> 2021',
  },

  {
    no: '89%',
    title: '12th <br /> 2023',
  },

  {
    no: '8.43',
    title: 'CGPA <br /> (Till 5th Sem)',
  },

  {
    no: ' BTech',
    title: ' 3rd Year (CSE) <br /> CDGI, Indore',
  },
];

export const skill = [
  {
    id: 1,
    img: html,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },
 {
    id: 2,
    img: css,
    title: 'CSS',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 3,
    img:js ,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: react,
    title: 'React',
    level: 'Basic',
    category: 'developer',
  },

  {
    id: 5,
    img: tc,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 6,
    img: c,
    title: 'C',
    level: 'Advanced',
    category: 'programming',
  },

  {
    id: 7,
    img: ce,
    title: 'C++',
    level: 'Basic',
    category: 'programming',
  },

  {
    id: 8,
    img: java,
    title: 'Java',
    level: 'Intermediate',
    category: 'programming',
  },

  {
    id: 9,
    img:node ,
    title: 'Node Js',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: express,
    title: 'Express Js',
    level: 'Basic',
    category: 'designer',
  },
{
    id: 11,
    img: sql,
    title: 'My SQL',
    level: 'Basic',
    category: 'designer',
  },
  {
    id: 12,
    img: mongo,
    title: 'Mongo Db',
    level: 'Basic',
    category: 'designer',
  },


]
/*========== SKILLS ==========*/

/*========== RESUME ==========*/
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

export const resume = [
 {
    id: 1,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2023 - Present",
    title: "Self Learning & Skill Development <span> Web Development </span>",
    desc: "Practicing and learning web technologies like HTML, CSS, JavaScript and improving development skills through personal projects.",
  },

  {
    id: 2,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2024 - Present",
    title: "Academic Projects <span> B.Tech CSE </span>",
    desc: "Working on college assignments, mini projects and building logical thinking with coding practice.",
  },

  {
    id: 3,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "Ongoing",
    title: "Personal Projects <span> Learning Phase </span>",
    desc: "Creating small projects to gain practical experience and exploring real world implementation of concepts.",
  },

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2023-Present',
    title: 'Engineering Degree <span> CDGI,Indore </span>',
    desc: 'Currently pursuing B.Tech -CSE (3rd Year). Developing core knowledge in programming, DSA, web development and CS fundamentals.',
  },

  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: ' 2022-2023',
    title: '12th <span> School For Excellence,Dewas </span>',
    desc: 'Completed 12th with focus on science stream and developed interest in computer and technology.',
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2020 - 2021',
    title: '10th <span> School For Excellence </span>',
    desc: 'Completed schooling with strong foundation in mathematics and reasoning ability.',
  },
];

import project from "../assets/project1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
/*========== PORTFOLIO ==========*//*
import projectImg1 from '..assets/project-1.jpg';
import projectImg2 from '..assets/project-2.jpg';
import projectImg3 from '..assets/project-3.jpg';
import projectImg4 from '..assets/project-4.jpg';
import projectImg5 from '..assets/project-5.jpg';*/

export const portfolio = [
  {
    id: 1,
    img: project,
    title: 'Coffee Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [
      {
        html:html,
        css:css,
      },
    ],
    link: 'a',
  },

  {
    id: 2,
    img: p2,
    title: 'Food Product Design',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [react,tc,js],
    link: 'a',
  },

  {
    id: 3,
    img: p3,
    title: 'Restaurant Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [html,css,js,java],
    link: 'a',
  },

  {
    id: 4,
    img:p4,
    title: 'Barbershop Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [react,css,js,java,node],
    link: 'a',
  },

  {
    id: 5,
    img: p5,
    title: 'Construction Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
   
    link: 'a',
  },
];


/*========== THEME ==========*/
import theme1 from "../assets/red.png";
import theme2 from "../assets/blueviolet.png";
import theme3 from "../assets/blue.png";
import theme4 from "../assets/magenta.png";
import theme5 from "../assets/yellowgreen.png";
import theme6 from "../assets/orange.png";
import theme7 from "../assets/yellow.png";
/*
import Theme1 from '..assets/red.png';
import Theme2 from '..assets/blueviolet.png';
import Theme3 from '..assets/blue.png';
import Theme4 from '..assets/magenta.png';
import Theme5 from '..assets/yellowgreen.png';
import Theme6 from '..assets/orange.png';
import Theme7 from '..assets/yellow.png';
*/
export const themes = [
  {
    img: theme1,
    hue: '4',
  },

  {
    img: theme2,
    hue: '271',
  },

  {
    img: theme3,
    hue: '225',
  },

  {
    img: theme4,
    hue: '339',
  },

  {
    img: theme5,
    hue: '80',
  },

  {
    img: theme6,
    hue: '19',
  },

  {
    img: theme7,
    hue: '42',
  },
];

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../layout/layout";
import ResumeDetail from "../components/ResumeDetail";
import SuperText from "../components/SuperText";
import EducationDetail from "../components/EducationDetail";
import { Project } from "styled-icons/octicons";
import ProjectDetail from "../components/ProjectDetail";

const Center = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Data = {
  skills: [
    `&bull;  &nbsp;<a>Languages:</a> Java, JavaScript/TypeScript, Python, C++, C, Swift`,
    `&bull;  &nbsp;<a>Web Development:</a> Node, React, Redux, Gatsby, GraphQL, Vue, Django`,
    `&bull;  &nbsp;<a>Database:</a> SQL, MongoDB, Firebase`,
    `&bull;  &nbsp;<a>Mobile App Development:</a> React Native(Cocoapods, Expo), Swift`,
    `&bull;  &nbsp;<a>Others:</a> Git, Google Cloud Platform, Amazon Web Service, Docker, UX/UI Design`
  ],
  experiences: [
    {
      title: `<a href="https://www.joatspace.com/" target="_blank">JOATSPACE</a>`,
      position: `Software Engineer Intern`,
      time: "June 2019 - Present",
      details: [
        `&bull; &nbsp;Worked as a part-time full-stack developer to implement a web dashboard application for admins to manage
      hundreds of service requests and user applications per day using <a>Node</a>, <a>React</a>, <a>Redux</a>, <a>Firebase</a> and <a>GCP</a>.`,
        `&bull; &nbsp;Designed and Developed automatic email service function with <a>Typescript</a> and <a>SendGrid</a> which processed 100+
      email requests from users each day.`,
        `&bull; &nbsp;Integrated messaging service in <a>GraphQL</a> and <a>WebSockets</a> to enable real-time communication between 500+ users.`
      ]
    },
    {
      title: `<a href="https://www.allocaterite.com/" target="_blank">AllocateRite LLC</a>`,
      position: `Software Engineer Intern`,
      time: "July 2017 - May 2018",
      details: [
        `&bull; &nbsp;Upgraded the official marketing website with thousands of daily visits using <a>Node</a>, <a>React</a>, <a>Redux</a> and <a>SCSS/SASS</a>
        deployed to <a>Amazon Web Service</a>`,
        `&bull; &nbsp;Built a mobile app with <a>Node</a>, <a>React Native</a>, <a>Expo</a>, <a>CocoaPods</a> and other JS libraries like <a>Plaid</a> which provides
        investment strategies and controls users’ bank account to invest according to the strategy.`,
        `&bull; &nbsp;Developed many asynchronous backend functions in <a>JavaScript</a> for mobile app which reduced service application
        loading time by around 50%.`
      ]
    },
    {
      title: `<a href="http://new.oversea.cnki.net/index/" target="_blank">CNKI.com, China Academic Journal Publishing House</a>`,
      position: `Product Manager`,
      time: "June 2019 - August 2019",
      details: [
        `&bull; &nbsp;Upgraded the General Library of Insurance Industry Knowledge Resources Database to the version 2.3 and improved the user experience.`,
        `&bull; &nbsp;Set up an information sharing platform to integrate resources from journals and Internet.`,
        `&bull; &nbsp;Formed an academic exchange center based on the platform for an insurance association.`
      ]
    },
    {
      title: `<a href="http://new.oversea.cnki.net/index/" target="_blank">CNKI.com, China Academic Journal Publishing House</a>`,
      position: `Associate Product Manager`,
      time: "June 2019 - August 2019",
      details: [
        `&bull; &nbsp;Participated in designing a big data search platform for People Opinion Data.`,
        `&bull; &nbsp;Designed a WeChat Mini Application for advertising and programmed the background operation code.`
      ]
    }
  ],
  education: [
    {
      school: `<a href="https://www.nyu.edu/" target="_blank">New York University</a>`,
      degree: `&bull; &nbsp;<a>Master of Science in Computer Engineering</a>, Spec. in Software Engineering`,
      courses: `&bull; &nbsp;<a>Notable Courses</a>: Computer System Architecture, Data Structure, Internet Architecture and Protocol, Principles of Database, Java`
    },
    {
      school: `<a href="https://www.bupt.edu.cn/" target="_blank">Beijing University of Posts and Telecommunications</a>`,
      degree: `&bull; &nbsp;<a>Bachelor of Engineering in Electronic Information Science and Technology</a>`,
      courses: `&bull; &nbsp;<a>Notable Prices:</a> Top 10 students scholarship in 2014, 2015, 2016`
    }
  ],
  projects: [
    {
      name: `SPARK Prediction: improve event search and recommendation based on visit history `,
      details: [
        `&bull; &nbsp;Developed an interactive web page with <a>HTML/JavaScript</a> for user to search events, update preference and view
      recommended events.`,
        `&bull; &nbsp;Proposed a web service using <a>Java Servlet</a> and <A>REST API</a> to fetch event data from TicketMaster API.`,
        `&bull; &nbsp;Utilized <a>MongoDB</a> to store user preference and event information and improved precision of recommendation by
      matching similar events based on categories.`,
        `&bull; &nbsp;Tested the web service and app with <a>unit tests/Junit</a> and load tests/JMeter.`
      ]
    },
    {
      name: `Notera: Mark and Recommend Database Project`,
      details: [
        `&bull; &nbsp;A web app where user can upload their notes with markdown format, mark as favorite and share to friends.`,
        `&bull; &nbsp;Implemented a web app with <a>React</a>, <a>Redux</a> for front-end, <a>MySQL</a> for Database as well as <a>JavaScript</a> for backend
    service functions.`
      ]
    },
    {
      name: `Personal Website`,
      details: [
        `&bull; &nbsp;My website that details my projects, experience, personal blog and my favorite things.`,
        `&bull; &nbsp;Used markdown docs as data source, fetched by <a>GraphQL</a> and built by <a>Gatsby</a>. Built the front-end by <a>React</a> and <a>SCSS/SASS</a> and deployed to <a>Google Cloud Platform</a>.`
      ]
    }
  ]
};

const ResumePage = () => {
  return (
    <Layout>
      <Link to="/">Back to About Me</Link>
      <SuperText size="2em" style={style.titleColor}>
        Resume
      </SuperText>
      <p style={style.name}>Hanyu Xu</p>
      <p style={style.email}>me@xuhanyu.com</p>

      <p style={style.subtitle}>Skills</p>
      <ul>
        {Data.skills.map(skill => (
          <p
            className="skill-detail"
            style={style.text}
            dangerouslySetInnerHTML={{ __html: skill }}
          />
        ))}
      </ul>

      <p style={style.subtitle}>Education</p>
      {Data.education.map(edu => (
        <EducationDetail value={edu} />
      ))}

      <p style={style.subtitle}>Experinece</p>
      {Data.experiences.map(experience => (
        <ResumeDetail value={experience} />
      ))}

      <p style={style.subtitle}>Projects</p>
      {Data.projects.map(project => (
        <ProjectDetail value={project} />
      ))}
    </Layout>
  );
};

const style = {
  titleColor: {
    color: "#ffbd50",
    paddingTop: "3rem"
  },
  name: {
    color: "#f29c9f",
    fontSize: "3rem",
    fontWeight: "bold",
    marginTop: "0rem",
    marginBottom: "0rem"
  },
  email: {
    color: "#83c192",
    fontWeight: "bold",
    marginTop: "0.5rem",
    marginBottom: "0rem"
  },
  subtitle: {
    color: "#af98e6",
    paddingTop: "1rem",
    marginBottom: "0rem",
    fontSize: "1.8rem",
    fontWeight: "bold"
  },
  text: {
    fontWeight: "bold"
  }
};

export default ResumePage;

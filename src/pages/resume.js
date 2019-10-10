import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../layout/layout";
import ResumeDetail from "../components/ResumeDetail";
import SuperText from "../components/SuperText";
import EducationDetail from "../components/EducationDetail";

const Center = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Data = {
  skills: [
    `&bull; Languages: Java, JavaScript/TypeScript, Python, C++, C, Swift`,
    `&bull; Web Development: Node, React, Redux, Gatsby, GraphQL, Vue, Django`,
    `&bull; Database: SQL, MongoDB, Firebase`,
    `&bull; Mobile App Development: React Native(Cocoapods, Expo), Swift`,
    `&bull; Others: Git, Google Cloud Platform, Amazon Web Service, Docker, UX/UI Design`
  ],
  experiences: [
    {
      title: `<a href="https://www.joatspace.com/" target="_blank">JOATSPACE</a>`,
      position: `Software Engineer Intern`,
      time: "June 2019 - Present",
      details: [
        `&bull; Worked as a part-time full-stack developer to implement a web dashboard application for admins to manage
      hundreds of service requests and user applications per day using <a>Node</a>, <a>React</a>, Redux, Firebase and GCP.`,
        `&bull; Designed and Developed automatic email service function with Typescript and SendGrid which processed 100+
      email requests from users each day.`,
        `&bull; Integrated messaging service in GraphQL and WebSockets to enable real-time communication between 500+ users.`
      ]
    },
    {
      title: `<a href="https://www.allocaterite.com/" target="_blank">AllocateRite LLC</a>`,
      position: `Software Engineer Intern`,
      time: "July 2017 - May 2018",
      details: [
        `&bull; Upgraded the official marketing website with thousands of daily visits using Node, React, Redux and SCSS/SASS and
        deployed to AWS`,
        `&bull; Built a mobile app with Node, React Native, Expo, CocoaPods and other JS libraries like Plaid which provides
        investment strategies and controls users’ bank account to invest according to the strategy.`,
        `&bull; Developed many asynchronous backend functions in JavaScript for mobile app which reduced service application
        loading time by around 50%.`
      ]
    },
    {
      title: `<a href="http://new.oversea.cnki.net/index/" target="_blank">CNKI.com, China Academic Journal Publishing House</a>`,
      position: `Product Manager`,
      time: "June 2019 - August 2019",
      details: [
        `&bull; Upgraded the General Library of Insurance Industry Knowledge Resources Database to the version 2.3 and improved the user experience.`,
        `&bull; Set up an information sharing platform to integrate resources from journals and Internet.`,
        `&bull; Formed an academic exchange center based on the platform for an insurance association.`
      ]
    },
    {
      title: `<a href="http://new.oversea.cnki.net/index/" target="_blank">CNKI.com, China Academic Journal Publishing House</a>`,
      position: `Associate Product Manager`,
      time: "June 2019 - August 2019",
      details: [
        `&bull; Participated in designing a big data search platform for People Opinion Data.`,
        `&bull; Designed a WeChat Mini Application for advertising and programmed the background operation code.`
      ]
    }
  ],
  education: [
    {
      school: `<a href="https://www.nyu.edu/" target="_blank">New York University</a>`,
      degree: `Master of Science in Computer Engineering, Spec. in Software Engineering`,
      courses: `Computer System Architecture, Data Structure, Internet Architecture and Protocol, Principles of Database, Java`
    },
    {
      school: `<a href="https://www.bupt.edu.cn/" target="_blank">Beijing University of Posts and Telecommunications</a>`,
      degree: `Bachelor of Engineering in Electronic Information Science and Technology`,
      courses: `Top 10 students scholarship in 2014, 2015, 2016`
    }
  ],
  Projects: [
    {
      name: ``,
      details: [``]
    }
  ]
};

const ResumePage = () => {
  return (
    <Layout>
      <Link to="/">Back to About Me</Link>
      <SuperText size="2em" style={style.titlecolor}>
        Resume
      </SuperText>
      <p>Hanyu Xu</p>
      <p>me@xuhanyu.com</p>

      <p>Skills</p>

      <ul>
        {Data.skills.map(skill => (
          <p dangerouslySetInnerHTML={{ __html: skill }} />
        ))}
      </ul>

      <p>Education</p>
      {Data.education.map(edu => (
        <EducationDetail value={edu} />
      ))}

      <p>Experinece</p>
      {Data.experiences.map(experience => (
        <ResumeDetail value={experience} />
      ))}

      <p>Projects</p>
    </Layout>
  );
};

const style = {
  titlecolor: {
    color: "#ffbd50",
    paddingTop: "3rem"
  }
};

export default ResumePage;

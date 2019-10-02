import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../layout/layout";
import ResumeDetail from "../components/ResumeDetail";
import SuperText from "../components/SuperText";

const Center = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Data = {
  skills: [
    "Languages: Java, JavaScript/TypeScript, Python, C++, C, Swift",
    "Web Development: Node, React, Redux, Gatsby, GraphQL, Vue, Django",
    "Database: SQL, MongoDB, Firebase",
    "Mobile App Development: React Native(Cocoapods, Expo), Swift",
    "Others: Git, Google Cloud Platform, Amazon Web Service, Docker, UX/UI Design"
  ],
  experiences: [
    {
      title: "",
      time: "",
      details: ["", ""]
    }
  ],
  education: []
};

const ResumePage = () => {
  return (
    <Layout>
      <Link to="/">Back to About Me</Link>
      <SuperText size="2em" id="resume-title">
        Resume
      </SuperText>
      <p>Hanyu Xu</p>
      <p>me@xuhanyu.com</p>
      <p>Skills</p>
      <ul>
        {Data.skills.map(skill => {
          return <li>{skill}</li>;
        })}
      </ul>
      <p>Experinece</p>

      <p>Software Engineer Intern at AllocateRite</p>
      <p></p>
      <p></p>
      <p>Education</p>
      <p>Projects</p>
    </Layout>
  );
};

export default ResumePage;

import { useEffect, useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaLightbulb,
  FaCertificate,
  FaBrain,
  FaTools,
  FaTrophy,
  FaUsers
} from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Listen for custom themeChanged event from Navbar
  useEffect(() => {
    const handleThemeChange = (e) => {
      setDarkMode(e.detail === "dark");
    };

    window.addEventListener("themeChanged", handleThemeChange);
    return () => window.removeEventListener("themeChanged", handleThemeChange);
  }, []);

  return (
    <div className={`skills-container ${isLoaded ? "loaded" : ""} ${darkMode ? "dark" : ""}`}>
      <h1 className="skills-title">My Skills</h1>

      {/* Primary Skills Section */}
      <div className="skills-grid">
        <div className="skills-box">
          <h2><FaCode /> Technical Skills</h2>
          <ul className="skills-list">
            <li><FaCode className="skill-icon" /> <strong>C++</strong>, <strong>Java</strong></li>
            <li><FaLaptopCode className="skill-icon" /> <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>ReactJS</strong></li>
            <li><FaLaptopCode className="skill-icon" /> <strong>Spring Boot</strong></li>
            <li><FaDatabase className="skill-icon" /> <strong>MySQL</strong></li>
            <li><FaTools className="skill-icon" /> <strong>Postman</strong>, <strong>JIRA</strong></li>
          </ul>
        </div>

        <div className="skills-box">
          <h2><FaLightbulb /> Soft Skills</h2>
          <ul className="skills-list">
            <li><FaBrain className="skill-icon" /> Problem Solving</li>
            <li><FaLightbulb className="skill-icon" /> Critical Thinking</li>
            <li><FaUsers className="skill-icon" /> Team Collaboration</li>
            <li><FaLightbulb className="skill-icon" /> Time Management</li>
            <li><FaLightbulb className="skill-icon" /> Adaptability</li>
          </ul>
        </div>

        <div className="skills-box">
          <h2><FaBrain /> Core Concepts</h2>
          <ul className="skills-list">
            <li>Object-Oriented Programming (OOP)</li>
            <li>Data Structures & Algorithms</li>
            <li>Database Management Systems (DBMS)</li>
            <li>Operating Systems (OS)</li>
            <li>Computer Networks</li>
            <li>Machine Learning (Basics)</li>
          </ul>
        </div>
      </div>

      {/* Secondary Skills Section */}
      <div className="skills-grid">
        <div className="extra-box">
          <h2><FaCertificate /> Certifications</h2>
          <div className="certification-item">
            <p>
              <FaCertificate className="cert-icon" />
              <strong> SQL Certification</strong> – HackerRank
            </p>
            <a href="https://www.hackerrank.com/certificates/95467ecd2f70" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
          <div className="certification-item">
            <p>
              <FaCertificate className="cert-icon" />
              <strong> Prompt Engineering</strong> – Naan Mudhalvan
            </p>
          </div>
        </div>

        <div className="extra-box leetcode-box">
          <h2><FaCode /> Coding Profile</h2>
          <div className="leetcode-stats">
            <p><strong>LeetCode:</strong> 190+ Problems Solved</p>
            <p><strong>CodeKaze 2024:</strong> Global Rank 1866</p>
          </div>
          <div className="leetcode-links">
            <a href="https://leetcode.com/u/Balasubaramaniyam/" target="_blank" rel="noopener noreferrer">
              LeetCode Profile
            </a>
            <a href="https://ninjasfiles.s3.amazonaws.com/event_certi_image406433c8ebe92b9cfba73ae1ee2911646e53d8.jpg" target="_blank" rel="noopener noreferrer">
              CodeKaze Certificate
            </a>
          </div>
        </div>
      </div>

     {/* Achievements Section */}
<div className="achievement-box">
  <h2><FaTrophy /> Achievements</h2>
  <ul className="achievement-list">
    <li>
      <span className="achievement-title"><FaTrophy /> Intra-College Competitions:</span>
      <ul className="skills-list" style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
        <li>
          1st place in Coding Competition &nbsp;
          <a
            href="https://your-certificate-link-coding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </li>
        <li>
          2nd place in SQL Challenge &nbsp;
          <a
            href="https://your-certificate-link-sql.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </li>
      </ul>
    </li>
    <li>
      <span className="achievement-title"><FaUsers /> Event Organizer:</span>
      Organized an inter-college event <strong>Code Alchemy</strong> (100+ participants) during <strong>Prayatna '25 </strong>
       <a
            href="https://drive.google.com/file/d/150BGoDUPJZe8yXwkMjgFxe4SbT_PKxqu/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
    </li>
  </ul>
</div>

    </div>
  );
}

export default Skills;

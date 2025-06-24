import { useEffect } from "react";
import "./About.css"; // Ensure the path to your CSS file is correct
import Photo from './Photo.jpeg'; // Correct relative import path to your photo

function About() {
  useEffect(() => {
    console.log("About component loaded");
  }, []);

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={Photo} alt="My Photo" className="about-photo" />
      <p>
        I am currently pursuing a Bachelor of Engineering in Computer Science
        Engineering at Madras Institute of Technology, Anna University, where I
        have maintained a CGPA of 9.1 until my 5th semester. My academic journey
        began at SVN Matric Higher Secondary School in Erode, where I achieved
        remarkable results: a percentage of 97.16% with a score of 583/600 in my
        Higher Secondary Education, and 99.2% with a score of 496/500 in my SSLC.
      </p>
      <p>
        I am passionate about programming and problem-solving, 
        with a strong foundation in programming languages like C++ and Java. 
        My technical expertise includes backend development using Spring Boot and frontend development with HTML, CSS, JavaScript, and ReactJS.
         I have a solid understanding of core computer science concepts such as Object-Oriented Programming, Data Structures, Database Management Systems, Operating Systems, Computer Networks, and Machine Learning. Additionally, I am proficient with tools like Postman and JIRA, and I bring strong soft skills in time management, problem-solving, and teamwork. I am eager to apply my skills to build impactful solutions and grow through real-world experience.
      </p>
    </div>
  );
}

export default About;

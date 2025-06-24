import { useEffect } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    document.querySelector(".projects-container")?.classList.add("loaded");
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-wrapper">

        {/* Smart Email Replier */}
        <div className="project-box">
          <div className="project-content">
            <h2>Smart Email Replier</h2>
            <p>
              Built a Chrome extension that integrates with Gmail to generate AI-powered, tone-adaptive email
              replies directly within the inbox, enhancing productivity.
            </p>
            <p><strong>Tools Used:</strong> Spring Boot, JavaScript, Gemini API, HTML, CSS</p>
          </div>
          <a
            href="https://github.com/BALASUBARAMANIYAM/Smart-Email-Replier"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> GitHub
          </a>
        </div>

        {/* Stock Market Trend Analysis */}
        <div className="project-box">
          <div className="project-content">
            <h2>Stock Market Trend Analysis</h2>
            <p>
              Designed and implemented a hybrid deep learning model (LSTM + TCN) to forecast stock market trends
              using historical price data and technical indicators such as RSI, MACD, and Bollinger Bands.
            </p>
            <p><strong>Tools Used:</strong> Python, TensorFlow, Keras, Pandas, Matplotlib, ReactJS</p>
          </div>
          <a
            href="https://github.com/BALASUBARAMANIYAM/STOCK-MARKET-TREND-ANALYSIS"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> GitHub
          </a>
        </div>

        {/* DealsHub – Smart Deal Aggregator */}
        <div className="project-box">
          <div className="project-content">
            <h2>DealsHub – Smart Deal Aggregator</h2>
            <p>
              A smart deal aggregation platform that automatically discovers and notifies users about personalized
              shopping deals from major e-commerce sites (Amazon/Flipkart), helping users save time and money effortlessly.
            </p>
            <p><strong>Tools Used:</strong> ReactJS, Spring Boot, MySQL, RapidAPI, HTML, CSS, JavaScript</p>
          </div>
          <a
            href="https://github.com/your-github-repo-dealshub"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="github-icon" /> GitHub
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;

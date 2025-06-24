import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200);
  }, []);

  return (
    <div className={`contact-container ${isLoaded ? "loaded" : ""}`}>
     <h1 className="contact-heading">Let&apos;s Connect &amp; Build Something Amazing</h1>
<p className="contact-quote">
   &quot;Have an idea or just want to say hi? Reach out through the links below!&quot;
</p>


      <div className="contact-details">
        <div className="contact-card">
          <p>
            <FaEnvelope className="icon" />
            <strong>Email: </strong>
            <a href="mailto:tsbalasubaramaniyam@gmail.com">
              tsbalasubaramaniyam@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <p>
            <FaLinkedin className="icon" />
            <strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/bala17/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/bala17
            </a>
          </p>
        </div>

        <div className="contact-card">
          <p>
            <FaGithub className="icon" />
            <strong>GitHub: </strong>
            <a
              href="https://github.com/BALASUBARAMANIYAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/BALASUBARAMANIYAM
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import "./Home.css";
import { Icon } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="home">
      <div className="profile-section">
        <img
          src="../../../public/assets/neo.jpg"
          alt="Profile"
          className="profile-picture"
        />
        <h1>Arjin Albay</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Hello! I'm Arjin, a passionate software developer with a knack for
          solving complex problems. I specialize in web development and enjoy
          working with modern technologies. In my free time, I love to learn new
          skills and share my knowledge with the community.
        </p>
        <div className="social-media">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size="large" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" size="large" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="twitter" size="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

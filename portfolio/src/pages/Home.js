import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3> Hi, My Name is Vikesh Kumar Kushwaha</h3>
        <div className="prompt">
          <p>A front-end developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/vikesh-kumar-kushwaha-b688b8187/" target="_blank"> <LinkedInIcon /></a>
          <EmailIcon />
         <a href="https://github.com/Vikesh667" target="_blank"><GithubIcon /></a>
        </div>
      </div>
     </div>
  );
}

export default Home;

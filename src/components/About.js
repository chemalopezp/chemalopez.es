import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Backend Engineer & Bot Crafter
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Jose M Lopez</span><br />
              <span>(412)209-5690</span><br />
              <span>chema.lopezp@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="/JoseLopez Resume.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

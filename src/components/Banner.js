import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Chema Lopez.</h1>
      <h3>
        I'm a San Francisco based bot developer. Bot builder & Tech manager
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;

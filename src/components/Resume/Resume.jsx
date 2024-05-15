import React from "react";
import "./Resume.module.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <embed
        src="/assets/resume/ArjinAlbay_CV.pdf"
        type="application/pdf"
        className="resume-pdf"
      />
    </div>
  );
};

export default Resume;

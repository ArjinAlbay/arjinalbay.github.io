import React from "react";
import "./Resume.css";

const Resume = () => {
  const pdfURL = "/assets/resume/ArjinAlbay_CV.pdf";
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

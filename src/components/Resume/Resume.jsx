import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./Resume.css";
// import { bookmarkPlugin } from "@react-pdf-viewer/bookmark";
// import "@react-pdf-viewer/bookmark/lib/styles/index.css";
const Resume = () => {
  return (
    <div className="resume-container">
      <a
        href="/assets/resume/ArjinAlbay_CV.pdf"
        download
        className="download-link"
      >
        Download Resume
      </a>

      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
      >
        <Viewer
          theme="dark"
          defaultScale={1.4}
          fileUrl="/assets/resume/ArjinAlbay_CV.pdf"
        />
      </Worker>
    </div>
  );
};
export default Resume;

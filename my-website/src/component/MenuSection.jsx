import HomeSvgIcon from "../svg/HomeSvgIcon";
import AboutMeIcon from "../svg/AboutMeIcon";
import ProjectsIcon from "../svg/ProjectsIcon";
import ArticlesIcon from "../svg/ArticlesIcon";
import React from "react";

function MenuSection() {
  return (
    <div className="flex h-full  items-center">
      <div className="flex flex-col items-center p-4 font-thin text-grayColor border-l-0 border-y border-r rounded-r-3xl border-grayColor">
        <HomeSvgIcon />
        <ArticlesIcon />
        <ProjectsIcon />
        <AboutMeIcon />
      </div>
    </div>
  );
}

export default MenuSection;

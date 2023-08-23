import { useState } from "react";
import { RouteWrapper } from "../../lib";

import "./Portfolio.css";

import testImage from "../../assets/img/test-1.png";

const PersonalPortfolioItems = [
  {
    title: "SysCaller",
    tags: ["C++", "ASM", "WinAPI"],
    content: (
      <>
        SysCaller is a single header library that allows for easy direct
        syscalls to be made. It achieves this by looking through the import
        table of ntdll.dll on disk and manually extracts the syscall ID of the
        function. There is also an option to look through the ntdll.dll that is
        already loaded in memory but if you're trying to avoid usermode hooks
        then this serves more as a way to detect such, not to as a way of
        retrieve the actual ID.
        <div className="image-container">
          <img src={testImage} height="100%" width="100%" draggable={false} />
          <p>
            This image shows parts of the disassembly of KiUserApcDispatcher
            from ntdll.dll
          </p>
        </div>
      </>
    ),
  },
  {
    title: "SysCaller",
    tags: ["bwadhasdas"],
    content: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </>
    ),
  },
];

const SchoolPortfolioItems = [
  {
    title: "Website",
    tags: ["ad"],
    content: <>test</>,
  },
  {
    title: "Website",
    tags: ["ad"],
    content: <>test</>,
  },
];

const ProjectComponent = ({ Title, Content, Tags }) => {
  return (
    <>
      <div className="project-container">
        <h3>{Title}</h3>
        <div className="project-tags">
          <h4>Tags:</h4>
          {Tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
        <div className="project-content">{Content}</div>
      </div>
    </>
  );
};

const Portfolio = () => {
  const [portfolioType, setPortfolioType] = useState("personal");

  const Component = (
    <>
      <div id="portfolio">
        <div className="button-container">
          <button
            onClick={() => {
              if (portfolioType !== "personal") setPortfolioType("personal");
            }}
          >
            Personal
          </button>
          <button
            onClick={() => {
              if (portfolioType !== "school") setPortfolioType("school");
            }}
          >
            School
          </button>
        </div>
        <div className="portfolio-container">
          {/*The only reason I am not doing an inline if else here is because this 
          solution allows for more categories to be added further on if one so pleases.*/}
          {portfolioType === "personal" ? (
            PersonalPortfolioItems.map((item) => (
              <ProjectComponent
                Title={item.title}
                Content={item.content}
                Tags={item.tags}
              />
            ))
          ) : (
            <></>
          )}
          {portfolioType === "school" ? (
            SchoolPortfolioItems.map((item) => (
              <ProjectComponent
                Title={item.title}
                Content={item.content}
                Tags={item.tags}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );

  return RouteWrapper({ Component: Component });
};

export default Portfolio;

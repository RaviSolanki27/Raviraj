import { TitleHead } from "../../Utils";
import { ProjectCard } from "../../Utils/ProjectCard";
import { projectdata } from "../../Data";

export const Work = () => {
  return (
    <div
      id="work"
      className="pt-24 sm:pt-40 md:pt-40 md:mt-20 lg:pt-48 lg:mt-48"
    >
      <TitleHead number={3} title="Some things I've built" />

      <div className="flex flex-wrap gap-3">
        {projectdata.map(
          (
            {
              external,
              github,
              description,
              tech1,
              tech2,
              tech3,
              tech4,
              tech5,
              tech6,
              tech7,
              title,
            },
            key
          ) => (
            <ProjectCard
              key={key}
              external={external}
              github={github}
              description={description}
              tech1={tech1}
              tech2={tech2}
              tech3={tech3}
              tech4={tech4}
              tech5={tech5}
              tech6={tech6}
              tech7={tech7}
              title={title}
            />
          )
        )}
      </div>
    </div>
  );
};

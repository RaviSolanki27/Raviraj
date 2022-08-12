type ProjectCardProps = {
  external?: string;
  github?: string;
  title?: string;
  description?: string;
  tech1?: string;
  tech2?: string;
  tech3?: string;
  tech4?: string;
  tech5?: string;
  tech6?: string;
  tech7?: string;
};

export const ProjectCard = ({
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
}: ProjectCardProps) => {
  return (
    <div className="project-card-div text-left rounded-md py-[2rem] px-[1.75rem] w-[270px] md:w-[330px] text-sm bg-slate-900">
      
        <div className="mb-[35px] flex justify-between">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00e5e8"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-folder h-10"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </span>
          <div className="flex items-end gap-3">
            {github && (
              <span>
                <a
                  className="project-svg"
                  href={github}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#eee5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github h-5"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </span>
            )}

            {external && (
              <span>
                <a
                  className="project-svg"
                  href={external}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#eee5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link h-6"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </span>
            )}
          </div>
        </div>
        <div className="roboto">
          <h6 className="mb-[10px] font-bold text-lg">{title}</h6>
          <p className="text-[#8892b0]" >{description}</p>
        </div>
        <div className="mt-[20px] text-sm text-[#8892b0] opacity-70">
          <ul className="flex flex-wrap gap-y-2 gap-x-4">
            {tech1 && <li>{tech1}</li>}
            {tech2 && <li>{tech2}</li>}
            {tech3 && <li>{tech3}</li>}
            {tech4 && <li>{tech4}</li>}
            {tech5 && <li>{tech5}</li>}
            {tech6 && <li>{tech6}</li>}
            {tech7 && <li>{tech7}</li>}
          </ul>
        </div>
      
    </div>
  );
};

import { useState } from "react";
import { companydata, workdata } from "../../Data";
import { TitleHead } from "../../Utils";
import { WorkCard } from "../../Utils/WorkCard";

export const Experience = () => {
  const [active, setActive] = useState(companydata[0]);

  const work = workdata.filter((item) => item.company === active);

  return (
    <div id="experience" className=" min-h-[38rem] pt-24 sm:pt-20 sm:mt-20 md:pt-40 md:mt-40 lg:pt-48 lg:mt-48 ">
      <TitleHead number={2} title="Where I've worked " />
      <div className="block gap-10 md:flex ">
        <div className=" mb-8 md:mb-0 overflow-auto md:overflow-visible" >
          <ul className="flex md:block md:text-left ">
            {companydata.map((item,key) => (
              <li key={key}
                onClick={() => setActive(item)}
                className={`compStyle  ${
                  item === active && "activeCompStyle"
                } `}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <WorkCard
            position={work[0].position}
            company={work[0].company}
            link={work[0].link}
            startMonth={work[0].startMonth}
            startYear={work[0].startYear}
            endYear={work[0].endyear}
            endMonth={work[0].endMonth}
            pr1={work[0].pr1 && work[0].pr1}
            pr2={work[0].pr2 && work[0].pr2}
            pr3={work[0].pr3 && work[0].pr3}
            pr4={work[0].pr4 && work[0].pr4}
          />
        </div>
      </div>
    </div>
  );
};

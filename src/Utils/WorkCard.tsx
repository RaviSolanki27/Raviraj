type WorkCardProp = {
  position: string;
  company: string;
  link?: string;
  startMonth: string;
  endMonth?: string;
  startYear?: number;
  endYear: number | string;
  pr1?: string;
  pr2?: string;
  pr3?: string;
  pr4?: string;
};

export const WorkCard = ({
  position,
  company,
  endMonth,
  link,
  endYear,
  startMonth,
  startYear,
  pr1,
  pr2,
  pr3,
  pr4,
}: WorkCardProp) => {
  return (
    <div className="">
      <h3 className="roboto text-left text-xl">
        <span className="">{position} </span>
        <span className="primary cursor-pointer glowText ">
          <a href={link} target="_blank">
            @{company}
          </a>
        </span>
      </h3>
      <p className="roboto text-left secondary text-sm my-2">
        {startMonth} &nbsp; {startYear} &nbsp; - &nbsp;{endMonth} &nbsp;{endYear}
      </p>
      {pr1 && (
        <p className="my-4 text-left flex gap-8 text-[#8892b0]">
          <span className="primary text-sm"> ➤ </span>
          <span className=" text-sm">{pr1}</span>
        </p>
      )}
      {pr2 && (
        <p className="my-4 text-left flex gap-8 text-[#8892b0]">
          <span className="primary text-sm"> ➤ </span>
          <span className=" text-sm">{pr2}</span>
        </p>
      )}
      {pr3 && (
        <p className="my-4 text-left flex gap-8 text-[#8892b0]">
          <span className="primary text-sm"> ➤ </span>
          <span className=" text-sm">{pr3}</span>
        </p>
      )}
      {pr4 && (
        <p className="my-4 text-left flex gap-8 text-[#8892b0]">
          <span className="primary text-sm"> ➤ </span>
          <span className=" text-sm">{pr4}</span>
        </p>
      )}
    </div>
  );
};

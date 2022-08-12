import "./common.css";
type TitleHeadProp = {
  number?: number;
  title?: string;
};

export const TitleHead = ({ number, title }: TitleHeadProp) => {
  return (
    <div className="text-[25px] text-left mb-10 flex">
      <span className="text-[#00e5e8]">0{number}.</span>
      <span className="title-nam font-medium text-3xl flex">
        <span className="title-font">&nbsp;{title}</span>
        <span>
          <span className="title-name"></span>
        </span>
      </span>
    </div>
  );
};

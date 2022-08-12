import { TitleHead } from "../../Utils";
import "./about.css";
import ravi from "../../Assets/ravi1.png";

export const About = () => {
  return (
    <div
      id="about"
      className="pt-24 sm:pt-40 md:pt-40 md:mt-20 lg:pt-48 lg:mt-48 "
    >
      <TitleHead number={1} title="About" />
      <div className="flex justify-between  flex-col lg:flex-row ">
        <div className="lg:w-[60%] text-left secondary">
          <p className="mb-5 text-[#8892b0] ">
            Hello! My name is Raviraj and I enjoy creating things that live on
            the internet. My interest in web development started back in 2020
            when I decided to try creating a landing page as a task given by my
            coach. That assignment taught a lot and I got interested in web
            development.
          </p>
          <p className="mb-5 text-[#8892b0] ">
            Fast-forward to today, and I’ve had the experience of working at a
            start-up, a huge corporation. My main focus is on building single
            page applications at&nbsp;
            <span>
              <a
                className="primary glowText"
                href="https://www.tatvasoft.com/"
                target="_blank"
              >
                Tatvasoft
              </a>
            </span>
            &nbsp;for a variety of clients.
          </p>
          <p className="mb-5 text-[#8892b0] ">
            I'm also exporing new technologies and frameworks.
          </p>
          <p className="mb-5 text-[#8892b0] ">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="grid grid-rows-3 grid-flow-col gap-4 text-xs sm:text-base ">
            <p>
              <span className="text-[aqua]"> ➤ </span> JavaScript (ES6+)
            </p>

            <p>
              <span className="text-[aqua]"> ➤ </span> React
            </p>

            <p>
              <span className="text-[aqua]"> ➤ </span> TypeScript
            </p>

            <p>
              <span className="text-[aqua]"> ➤ </span> Node.js
            </p>

            <p>
              <span className="text-[aqua]"> ➤ </span> Vuejs
            </p>

            <p>
              <span className="text-[aqua]"> ➤</span> Angular
            </p>
          </div>
        </div>

        <div className=" w-full  mt-16 lg:mt-0 lg:w-[28rem]">
          <div className="flex justify-center">
            <div className="profile-img  h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] ">
              <div className="flex justify-center items-center">
                <img
                  className="inner-img h-[240px] sm:h-[290px]"
                  src={ravi}
                  alt="raviraj"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <img
                  className="img-p"
                  src="https://avatars.githubusercontent.com/u/74584237?v=4"
                  alt=""
                /> */
}

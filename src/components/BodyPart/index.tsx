import { About } from "../About";
import { Banner } from "../Banner";
import { Contact } from "../Contact";
import { Experience } from "../Experience";
import { Footer } from "../Footer";
import { Work } from "../Work";
import "./bodypart.css";

export const Bodypart = () => {
  return (
    <div className="body-part   px-[25px] sm:px-[50px]  flex-col  w-full  md:w-[80%] lg:w-[61rem] xl:w-[70rem] ">
      <Banner />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

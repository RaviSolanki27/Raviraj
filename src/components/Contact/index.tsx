import { TitleHead } from "../../Utils";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="pt-24 sm:pt-40 md:pt-40 md:mt-20 lg:pt-48 lg:mt-48"
    >
      <TitleHead number={4} title="Contact" />
      <h3 className="roboto mt-[8rem] text-[#ccf6f0] text-3xl  md:text-6xl font-bold">Get In Touch</h3>
      <div className="w-full flex justify-center">
        <p className="roboto mt-7 w-[40rem]  md:text-lg text-[#8892b0]">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
      </div>
      <div className="mt-16">
        <button className="resume-btn glowText border-[#00e5e8] text-[#00e5e8] rounded border-2 p-4 mt-5 text-sm  ">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ravisolanki9322@gmail.com"
            target="_blank"
          >
            Say Hello
          </a>
        </button>
      </div>
    </div>
  );
};

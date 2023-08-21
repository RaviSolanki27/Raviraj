export const Banner = () => {
  return (
    <div className="text-left mt-40">
      <h6 className="primary my-4">Hi, my name is</h6>
      <div className="my-4 flex items-baseline">
        <h2 className="glowText roboto text-[#ccf6f0] text-5xl lg:text-8xl  ">
          R
        </h2>
        <h2 className="roboto text-[#ccf6f0] text-4xl   lg:text-7xl">
          aviraj Solanki.
        </h2>
      </div>
      <h2 className="my-4 roboto text-[#ccf6f0] opacity-70 text-3xl  lg:text-7xl">
        I build things for the web.
      </h2>
      <p className="secondary lg:w-[90%]  xl:w-[80%]">
        I’m a software engineer specializing in building creative digital
        experiences. Currently, I’m focused on building single page applications
        at&nbsp;
        <span>
          <a
            className="primary glowText"
            href="https://www.tatvasoft.com/"
            target="_blank"
          >
            Tatvasoft
          </a>
        </span>
        .
      </p>
    </div>
  );
};

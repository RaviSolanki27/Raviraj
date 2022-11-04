import "./common.css";

export const Loader = () => {
  return (
    <div className="loader-outer">
      <span className="initial text-6xl">R</span>
      <div className="main-div">
        <section className="container1">
          <div className="outdiv1">
            <div className="indiv1">
              <span className="one h6 span1"></span>
              <span className="two h3 span2"></span>
            </div>
          </div>

          <div className="outdiv2">
            <div className="indiv2">
              <span className="one h1 span3"></span>
              <span className="two h4 span4"></span>
            </div>
          </div>

          <div className="outdiv3">
            <div className="indiv3">
              <span className="one h5 span5"></span>
              <span className="two h2 span6"></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

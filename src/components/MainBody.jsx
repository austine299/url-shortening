import InputShortener from "./InputShortener";

function MainBody() {
  return (
    <div className="body-container">
      <div className="main-body">
        <div className="detail">
          <h1 className="detail-heading">More than just shorter links</h1>
          <p className="">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="signup login-signup-btn">Get started</button>
        </div>
        <div className="detail-img">
          <img
            className="illustration-img"
            src="images\illustration-working.svg"
            alt="img"
          />
        </div>
      </div>
      <div className="input-bg">
      <InputShortener />

      <div className="advance-container">
        <h1 className="advance-header">Advanced Statistic</h1>
        <p className="advance-p">
          Track how links are performing across the web with our advanced
          statistic dashboard.
        </p>
      </div>
      <div className="activity-container">
        <div className="container-text container-text1">
            <div className="icon-container">
            <img src="images\icon-brand-recognition.svg" alt="brand" />
            </div>
          <h1 className="">Detailed Records</h1>
        </div>
        <div className="container-text container-text2">
            <div className="icon-container">
            <img src="images\icon-detailed-records.svg" alt="detailed" />
            </div>
          <h1 className="">Detailed Records</h1>
        </div>
        <div className="container-text container-text3">
            <div className="icon-container">
            <img src="images\icon-fully-customizable.svg" alt="customize" />
            </div>
          <h1 className="">Detailed Records</h1>
        </div>
        <div className="hr"></div>
      </div>
      </div>
    </div>
  );
}

export default MainBody;

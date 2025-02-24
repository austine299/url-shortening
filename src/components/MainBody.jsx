import InputShortener from "./InputShortener";
import Footer from "./Footer";

function MainBody() {
  return (
    <div className="body-container">
      <div className="main-body">
        <div className="detail">
          <h1 className="detail-heading">More than just shorter links</h1>
          <p className="detail-p">
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
            <h1 className="activity-header">Detailed Records</h1>
            <p className="activiity-details">
              Boost your brand recognition with 
              each click. Generic links don't mean a thing. 
              Branded links help instil confidence in your 
              content

            </p>
          </div>
          <div className="container-text container-text2">
              <div className="icon-container">
              <img src="images\icon-detailed-records.svg" alt="detailed" />
              </div>
            <h1 className="activity-header">Detailed Records</h1>
            <p className="activiity-details">
              Gain insights into who is clicking 
              your links. knowing when and where people engage 
              with your content help inform better decisions.
            </p>
          </div>
          <div className="container-text container-text3">
              <div className="icon-container">
              <img src="images\icon-fully-customizable.svg" alt="customize" />
              </div>
            <h1 className="activity-header">Detailed Records</h1>
            <p className="activiity-details">
              improve brand awareness and content discoverability 
              through customizablelinks. 
              supercharging audience engagement.
            </p>
          </div>
          <div className="hr"></div>
        </div>

      </div>
        <div className="boost-links">
          <h1 className="">Boost your links today</h1>
          <button className="signup login-signup-btn">Get started</button>
        </div>
        <Footer/>
    </div>
  );
}

export default MainBody;


import "./style.css";
import React from "react";
import FPLogo from "../../Assets/FPLogo.jpeg";

function Home() {
  return (
    <div className="Home">

      {/* Landing Section */}
      <div className="landing-section">
        <div className="content">
          <h2 className="headline">
            Welcome to Free Pustakalya
          </h2>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum exercitationem molestias unde soluta nemo, distinctio veniam porro voluptatum tenetur ipsa voluptas minus minima autem, nihil provident, sunt rem voluptate nam aliquam! Est fugiat at illum qui molestias sapiente, ea pariatur voluptates placeat ipsa aliquam.
          </p>
          <button className="solid-button-yellow"
            style={{
              marginTop: '1.4em'
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Major Organizations Section */}
      <div className="organizations-gist-container center-content">
        <h4>
          Organizations we have partnered with
        </h4>
        <div className="organizations-list">
          <img src={FPLogo} alt="logo" className="org-logo" />
          <img src={FPLogo} alt="logo" className="org-logo" />
          <img src={FPLogo} alt="logo" className="org-logo" />
          <img src={FPLogo} alt="logo" className="org-logo" />
        </div>
      </div>

    </div>
  )
}

export default Home;
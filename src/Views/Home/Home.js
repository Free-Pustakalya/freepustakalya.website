
import "./style.css";
import React from "react";

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

    </div>
  )
}

export default Home;
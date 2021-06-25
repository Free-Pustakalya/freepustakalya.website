
import "./style.css";
import React, { useState } from "react";
import NewsCard from "../../Components/NewsCard/NewsCard";
import NewsData from "../../Data/NewsData";

function AboutUs() {

  const [newsData] = useState(NewsData.NewsData);

  return (
    <div className="AboutUs" style={{
      marginTop: '3em',
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '1400px'
    }}>

    <div className="sub-landing-section">
      {/* Code for about us page component */}
      <h1 className="headline">
        About Us
      </h1>
      
    </div>

    {/* In News Section */}
    <div className="InNews-Container" style={{
      marginTop: '3em'
    }}>
      <h2 style={{
        fontSize: '32px'
      }}>
        In News
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto'
      }}>
        {
          newsData.map((data, index) => (
            <NewsCard 
              NewsBanner={data.newsBannerPhotoURL}
              NewsTitle={data.newsTitle}
              NewsContent={data.newsContent}
              NewsLink={data.newsLink}
            />
          ))
        }
      </div>
    </div>

    </div>
  )
}

export default AboutUs;
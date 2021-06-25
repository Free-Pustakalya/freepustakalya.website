
import "./style.css";
import React from "react";

function NewsCard(NewsDetails) {
  return (
    <div className="NewsCard">
      <img src={NewsDetails.NewsBanner} 
        alt="news-banner"
        className="news-banner"
      />
      <div className="NewsCard-Body">
        <h2 className="NewsTitle">
          {NewsDetails.NewsTitle}
        </h2>
        <p className="NewsContent">
          {NewsDetails.NewsContent}
        </p>
        <button className="solid-button-yellow"
          onClick={() => {
            window.open(NewsDetails.NewsLink);
          }}  
        >
          Read More
        </button>
      </div>
    </div>
  )
}

export default NewsCard;

import "./style.css";
import React from 'react';

export default function NewsCard(NewsDetails) {
  return (
    <div className="NewsCard">
      <img src={NewsDetails.NewsImageBanner} 
        alt={NewsDetails.NewsTitle}
        className="news-card-image" 
      />
      <div className="news-card-body">
        <h3>{NewsDetails.NewsTitle}</h3>
        <p>{NewsDetails.NewsText}</p>
        <button className="primary-button"
          onClick={() => window.open(NewsDetails.NewsURL)}
          style={{
            width: '100%'
          }}
        >
          Read more
        </button>
      </div>
    </div>
  )
}
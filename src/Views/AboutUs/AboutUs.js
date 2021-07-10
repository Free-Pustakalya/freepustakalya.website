
// This page/view component is responsible for rendering the about us page.
// Sections this component is responsible for:
//  - Landing Section for About Us
//  - In news section
//  - Impact Number section
//  - Teams section
  //  - Team India section
  //  - Team Abroad section
  //  - Our partners & support section
  //  - Mentor & Advisor section

import React, { useState } from 'react';
import "./style.css";
import NewsData from "../../Data/NewsData/NewsData";
import NewsCard from "../../Components/NewsCard/NewsCard";

export default function AboutUs() {

  const [newsDataState] = useState(NewsData.NewsData);

  return (
    <div className="AboutUs">
      <div className="AboutUs-content page-center">
        <h1 className="massive-headline"
          style={{
            fontSize: '90px',
            marginRight: 'auto',
            marginLeft: 'auto',
            width: '60%',
            textAlign: 'center',
            fontWeight: '800',
            color: 'white'
          }}
        >
          About Us
        </h1>
      </div>

      {/* content division section */}
      <div className="content-section">
        <div className="content-container page-center">

          {/* About Us internal container */}
          <div className="content-about-us-container">
            <h2>
              About Free Pustakalya
            </h2>
            <p style={{
              marginTop: '1.6em',
              width: '46%',
              textAlign: 'justify'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo
              consequat. Lorem dolor sit amet, adipiscing elit, sed do
              tempor incididunt ut labore dolore magna Ut ad minim veniam, quis
              exercitation ullamco nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

      </div>


      {/* In News Section */}
      <div className="news-container page-center" style={{
        marginTop: '3.4em'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '32px'
        }}>
          In News
        </h2>
        <div className="news-card-container" style={{
          marginTop: '4.6em',
          display: 'grid',
          gridTemplateColumns: 'auto auto auto'
        }}>
          {
            newsDataState.map((news_data, index) => (
              <NewsCard NewsImageBanner={news_data.news_image} 
                NewsTitle={news_data.news_title}
                NewsText={news_data.news_text}
                NewsURL={news_data.news_url}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
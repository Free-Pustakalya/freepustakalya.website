
import React, { useState } from 'react';
import EventCard from '../../Components/EventCard/EventCard';
import RecentEventsData from '../../Data/RecentEventsData/RecentEventsData';
import "./style.css";

export default function Home() {

  const [recentEvents] = useState(RecentEventsData.RecentEventsData);

  return (
    <div className="Home">
      <div className="landing-container page-center">
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
          Learn more with Free Pustakalya
        </h1>
        <div className="button-layer" style={{
          marginTop: '1.6em',
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          marginRight: 'auto',
          marginLeft: 'auto', 
          width: '300px'
        }}>
          <button className="primary-button"
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              display: 'block'
            }}
          >
            Learn More
          </button>
          <button className="outline-button" style={{
            marginRight: 'auto',
            marginLeft: 'auto',
            display: 'block'
          }}>
            Connect with us
          </button>
        </div>
      </div>

      {/* content division section */}

      <div className="content-section">
        <div className="content-container page-center">
          
          {/* organizations we have partnered with */}
          <div className="content-partner-org-container" style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            alignItems: 'center'
          }}>
            <span>
              <h3>
                Organizations we have partnered with
              </h3>
            </span>
            <div className="org-logo-container">
              Images will be here
            </div>
          </div>

          {/* About Us internal container */}
          <div className="content-about-us-container">
            <h2>
              About Free Pustakalya
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo
              consequat. Lorem dolor sit amet, adipiscing elit, sed do
              tempor incididunt ut labore dolore magna Ut ad minim veniam, quis
              exercitation ullamco nisi ut aliquip ex ea commodo consequat.
            </p>

            <button className="solid-button" style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              display: 'block',
              marginTop: '1.2em '
            }}
            >
              Learn more
            </button>
          </div>

        </div>
      </div>

      <div className="recent-events-section">
        <div className="recent-events-content page-center">
          <h2 className="headline">Recent workshops & sessions we have done</h2>

          <div className="event-card-container" style={{
            marginTop: '2.4em',
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
            alignItems: 'center'
          }}>
            {
              recentEvents.map((data, index) => (
                <EventCard ImagePath={data.image_path}
                  EventTitle={data.event_title}
                  EventDate={data.event_date}
                  EventDay={data.event_day}
                  ExternalURL={data.external_url}
                  EventDescription={data.event_description}
                />
              ))  
            }
          </div>
        </div>
      </div>
    </div>
  )
}
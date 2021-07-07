
import React, { useState } from 'react';
import "./style.css";
import ReactModal from 'react-modal';

export default function EventCard(EventDetails) {

  const [eventCardModalState, setEventCardModalState] = useState(false);

  return (
    <div className="EventCard">
      <img src={EventDetails.ImagePath} alt="event-banner" />
      <div className="CardBody">
        <h3>{EventDetails.EventTitle}</h3>
        <p>{EventDetails.EventDate} / {EventDetails.EventDay}</p>
        <button className="primary-button" style={{
          display: 'grid',
          gridTemplateColumns: 'auto',
          width: '100%',
          marginTop: '1.2em'
        }}
        onClick={() => setEventCardModalState(true)}
        >
          View more
        </button>
      </div>

      <ReactModal
        isOpen={eventCardModalState}
        onRequestClose={() => setEventCardModalState(false)} 
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '960px',
            height: '800px',
            overflow: 'hidden',
            boxSizing: 'border-box'
          },
          content: {
            border: 'none'
          }
        }}
        >
          <div>
          <i class="fas fa-times"
            style={{
              float: 'right',
              display: 'block'
            }}
            onClick={() => setEventCardModalState(false)}
          ></i>
          </div>
          <h1>{EventDetails.EventTitle}</h1>
          <p>{EventDetails.EventDate} ({EventDetails.EventDay})</p>

          <img src={EventDetails.ImagePath} alt="event-banner" 
            style={{
              width: '80%',
              marginRight: 'auto',
              marginLeft: 'auto',
              display: 'block'
            }}
          />

          <h3 style={{
            marginTop: '2em'
          }}>Event Description</h3>
          <p>
            {EventDetails.EventDescription}
          </p>
      </ReactModal>

    </div>
  )
}
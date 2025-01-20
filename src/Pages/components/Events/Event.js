import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import  './Event.css';

function Event({ event }) {
  const { Event_name, place, image, desc, category, services, address, providing } = event;

  return (
<div className="grid grid-cols-1 md:grid-cols-[32%,8%,60%] gap-4  card-container">
  {/* Main Image */}
  <div className="main-image-container">
    {image && image.length > 0 && (
      <img
        className="main-image"
        src={`${image[0]}`}
        alt="Main"
      />
    )}
  </div>

  {/* Sub Images */}
  <div className="sub-images-container">
    {image && image.slice(1, 5).map((img, index) => (
      <div key={index} className="sub-image">
        <img src={`${img}`} alt={`Sub ${index}`} className="sub-image-img" />
      </div>
    ))}
  </div>

  {/* Event Details */}
  <div className="event-details">
    <h1 className="event-title">{Event_name}</h1>
    <div className="event-location">
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        {place}
      </p>
      <p>
        <FontAwesomeIcon icon={faHome} className="icon" />
        {address}
      </p>
    </div>
    <p className="event-description">{desc}</p>

    {/* Categories */}
    <div className="event-info">
      <p className="info-label">Categories:</p>
      <div className="info-list">
        {category.map((cat, index) => (
          <p key={index}>{`${cat},`}</p>
        ))}
      </div>
    </div>

    {/* Providing */}
    <div className="event-info">
      <p className="info-label">Providing:</p>
      <div className="info-list">
        {providing.map((provide, index) => (
          <p key={index}>{`${provide},`}</p>
        ))}
      </div>
    </div>

    {/* Services */}
    <div className="event-info">
      <p className="info-label">Services:</p>
      <div className="info-list">
        {services.map((serve, index) => (
          <p key={index}>{`${serve},`}</p>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}

export default Event;

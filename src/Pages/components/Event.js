import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome } from '@fortawesome/free-solid-svg-icons';

function Event({ event }) {
  const { Event_name, place, image, desc, category, services, address, providing } = event;
  const baseURL = 'http://localhost:8000/';

  return (
    <div className="grid grid-cols-1 md:grid-cols-[32%,8%,60%] gap-1 p-2 pr-3">
      {/* Main Image */}
      <div className="w-full  p-1">
        {image && image.length > 0 && (
          <img
            className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            src={`${baseURL}${image[0]}`}
            alt=""
          />
        )}
      </div>

      {/* Thumbnail Images */}
      <div className="w-[100px] grid grid-rows-4 border border-gray-200 gap-2 py-1">
        {image && image.slice(1, 5).map((image, index) => (
          <div key={index} className='border border-gray-200 w-[100px]'>
            <img src={`${baseURL}${image}`} alt='' className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      {/* Event Details */}
      <div className="flex flex-col flex-wrap items-start overflow-hidden text-slate-600 ">
        <h1 className="font-extrabold text-3xl text-slate-900 p-2">{Event_name}</h1>
        <div className="text-xs font-semibold  px-4 text-slate-600 flex space-x-2">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-sm text-blue-500" />
            {place}
          </p>
          <p>
            <FontAwesomeIcon icon={faHome} className="mr-2 text-blue-500" />
            {address}
          </p>
        </div>

        <p className="text-sm text-justify p-2 break-words space-x- text-sm">{desc}</p>

        <div>
          {/* Categories */}
          <div className="flex space-x-2 p-2 ">
            <p className="text-sm font-semibold">Categories:</p>
            <div className="flex flex-wrap space-x-2 text-sm">
              {category.map((cat, index) => (
                <p key={index} >{` ${cat},`}</p>
              ))}
            </div>
          </div>

          {/* Providing */}
          <div className="flex space-x-2 p-2">
            <p className="text-sm font-semibold">Providing:</p>
            <div className="flex flex-wrap space-x-2 text-sm ">
              {providing.map((provide, index) => (
                <p key={index}>{` ${provide},`}</p>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex space-x-2 p-2">
            <p className="text-sm font-semibold">Services:</p>
            <div className="flex flex-wrap space-x-2 text-sm">
              {services.map((serve, index) => (
                <div key={index}>
                  <p>{` ${serve},`}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Event;

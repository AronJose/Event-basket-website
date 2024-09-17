import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome } from '@fortawesome/free-solid-svg-icons';

function Event({ event }) {
  const { Event_name, place, image, desc, category, services, address } = event;
  const baseURL = 'http://localhost:8000/'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-80 md:h-90 p-1">
        {image && image.length > 0 && (
          <img
            className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            src={`${baseURL}${image[0]}`}
            alt=''
          />
        )}
      </div>
      <div className="flex flex-row justify-start">
        <div className="w-[100px] grid grid-rows-4 border border-gray-200 gap-2 py-1">
          {image && image.slice(1, 5).map((image, index) => (
            <div key={index} className='border border-gray-200 w-[100px]'>
              <img src={`${baseURL}${image}`} alt='' className="object-cover w-full h-full" />
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start p-4'>
          <h1 className='font-extrabold text-2xl text-slate-800'>{Event_name}</h1>
          <p className='text-sm px-2 '><FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2 text-sm text-gray-500' />{place}</p>
          <p className='text-sm px-2'><FontAwesomeIcon icon={faHome} className='mr-2 text-sm text-gray-500' />{address}</p>
          <p className='text-sm text-justify p-2'>{desc}</p>
          <div className='flex space-x-2 p-2'>
            <p className='text-sm font-semibold'>Categories:</p>
            <ul className='text-sm flex space-x-2'>
              {category.map((cat, index) => (
                <li key={index}>{` ${cat},`}</li>
              ))}
            </ul>
          </div>

          <p className='text-sm'>{services}</p>
        </div>
      </div>
    </div>
  );
}

export default Event;

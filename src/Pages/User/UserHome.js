import React from 'react';
import EventList from '../components/EventList';

function UserHome() {
  return (
    <div className='container mx-auto md:h-[1000px] '>
      <div className='mt-[30px] text-black bg-white rounded md:h-[1000px]'>
        <div className='grid grid-cols-[1fr,.5fr] gap-4 bg-white md:h-[1000px]'>
          <div className='bg-gray-200 border'>
            <EventList/>
          </div>
          <div className='bg-red-200 border'>2</div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;

import React, { useState } from 'react';
import EventList from '../components/EventList';
import SubHeader from '../../Components/SubHeader';

function UserHome() {
  const [query, setQuery] = useState({})
  return (
    <div className='container mx-auto md:h-[1000px] '>
      <div className='mt-[10px] text-black bg-white rounded md:h-[1000px]'>
        <SubHeader query={query} setQuery={setQuery}/>
        <div className='grid grid-cols-[1fr,.5fr] gap-4 bg-white md:h-[1000px] md:mt-[10px]'>
          <div className='bg-gray-200 border'>
            <EventList query={query} setQuery={setQuery}/>
          </div>
          <div className='bg-red-200 border'>2</div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;

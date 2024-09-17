import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import SubHeader from '../../Components/SubHeader';

function UserHome() {
  const [query, setQuery] = useState({})
  useEffect(() =>{
console.log('rendered')
  },[])
  return (
    <div className='md:h-screen rounded-lg'>
      <div className=' text-black bg-white  '>
        <SubHeader query={query} setQuery={setQuery}/>
        <div className='grid grid-cols-[1fr,.5fr] gap-4 bg-white md:mt-[10px]'>
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

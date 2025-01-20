import React, { useEffect, useState } from 'react';
import EventList from '../components/Events/EventList';
import SubHeader from '../../Components/SubHeader'


function UserHome() {
  const [query, setQuery] = useState({})
  useEffect(() =>{
  },[])
  return (
    <div className='md:h-screen rounded-lg'>
      <div className=' text-black bg-white  '>
        <SubHeader query={query} setQuery={setQuery}/>
          <div className='bg-gray-200 border'>
            <EventList query={query} setQuery={setQuery}/>
          </div>
         
      </div>
    </div>
  );
}

export default UserHome;

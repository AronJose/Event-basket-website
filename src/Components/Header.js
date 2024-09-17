import React, { useState, useEffect } from 'react';
import party from '../Assets/1.webp';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Select from 'react-select';
import profilePic from '../Assets/profile.jpeg';

const navItems = [
  { label: "Home", value: 'home', path: '/' },
  { label: "Convention Hall", value: 'Convention Hall', path: '/Convention Hall' },
  { label: "Caters", value: 'Caters', path: '/Caters' },
  { label: "Portraiture", value: 'Portraiture', path: '/Portraiture' },
  { label: "Party", value: 'Party', path: '/Party' }
];

function Header() {
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
  const [active, setActive] = useState('home');

  const navigate = useNavigate();
  const authToken = cookies.authToken;

  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'home';
    setActive(currentPath);
  }, [location.pathname]);

  const logout = () => {
    removeCookie('authToken');
    navigate("/");
  };

  const handleSelectChange = (selectedOption) => {
    if (selectedOption.value === 'logout') {
      logout();
    } else if (selectedOption.value === 'profile') {
      navigate('/profile');
    }
  };

  const dropdownOptions = [
    { value: 'profile', label: 'Profile' },
    { value: 'logout', label: 'Logout' }
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      border: 'none',
      boxShadow: 'none',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    }),
    placeholder: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: '5px',
      left: '0',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    option: (provided) => ({
      ...provided,
      padding: '10px',
    }),
  };

  return (
    <div className='z-50 fixed top-0 left-0 w-full bg-white drop-shadow-2xl h-[70px] grid grid-cols-[1fr,auto,2fr] gap-4 font-serif'>
      <div className='flex justify-self-center items-center md:text-2xl text-lg font-extrabold overline decoration-blue-500'>
        <img src={party} alt='Party Logo' className='w-[40px] h-[40px] rounded-full ml-[50px] md:ml-0' />
        EventsBasket
      </div>
      <div className='w-[100px] flex justify-self-start items-center'></div>
      <div className='flex gap-4 justify-self-center items-center '>
        {navItems.map((item, index) => (
          <Link
            key={index}
            onClick={() => setActive(item.value)}
            className={`font-semibold ${active === item.value ? 'text-blue-600' : 'text-gray-600'} md:text-lg hover:text-blue-600`}
            to={item.path}>
            {item.label}
          </Link>
        ))}
        {authToken ? (
          <>
            <Link
              onClick={() => setActive('addEvent')}
              className={`font-semibold text-gray-600 md:text-lg hover:text-blue-600 border-solid border-2 border-blue-500 rounded-lg md:w-[100px] ${active === 'addEvent' ? 'bg-blue-700 text-white hover:bg-gray-600 hover:text-white' : ''}`}
              to="/addEvent">
              Add Event
            </Link>
            <Select
              options={dropdownOptions}
              onChange={handleSelectChange}
              styles={customStyles}
              placeholder={
                <div className="flex items-center">
                  <img src={profilePic} alt="Profile" className="w-[40px] h-[40px] rounded-full" />
                </div>
              }
              isSearchable={false}
            />
          </>
        ) : (
          <Link className='font-semibold text-gray-600 md:text-lg hover:text-blue-600 md:ml-5 border-solid border-2 border-blue-500 rounded-lg w-[100px]' to="/login">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;

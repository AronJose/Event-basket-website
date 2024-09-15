import React from 'react'
import party from '../Assets/1.webp';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Select from 'react-select';
import profilePic from '../Assets/profile.jpeg'

function Header() {

  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

  const navigate = useNavigate();

  const authToken = cookies.authToken;

  const logout = () => {
    
    removeCookie('authToken');
    navigate("/");
  }

  const handleSelectChange = (selectedOption) => {
    if (selectedOption.value === 'logout') {
      logout();
    } else if (selectedOption.value === 'profile') {
      navigate('/profile');
    }
  };

  const dropdownOptions = [
    { value: 'profile', label: 'Profile' },
    { value: 'logout', label: 'Logout' },
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
    <div className='bg-white drop-shadow-2xl h-[70px] grid grid-cols-[1fr,auto,2fr] gap-4 font-serif'>
      <div className='flex justify-self-center items-center md:text-2xl text-lg font-extrabold overline decoration-green-500'>
        <img src={party} alt='' className='w-[40px] h-[40px] rounded-full ml-[50px] md:ml-0' />
        EventsBasket
      </div>
      <div className='w-[100px] flex justify-self-start items-center'></div>
      <div className='flex gap-4 justify-self-center items-center '>
        <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600' to="/home"><span>Home</span></Link>
        <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600' to="#"><span>Convention Hall</span></Link>
        <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600' to="#"><span>Caters</span></Link>
        <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600' to="#"><span>Portraiture</span></Link>
        <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600' to="#"><span>Decorations</span></Link>
        <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600' to="#"><span>Party</span></Link>

        {
          authToken ? <>
            <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600  border-solid border-2 border-green-500 rounded-lg md:w-[100px]' to="/add-event">
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
          </> :
            <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600 md:ml-5 border-solid border-2 border-green-500 rounded-lg w-[100px]' to="/login"><span>Sign in</span></Link>

        }
      </div>
    </div>
  )
}

export default Header;

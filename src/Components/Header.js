import React from 'react'
import party from '../Assets/1.webp';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Header() {

  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
  console.log(useCookies(['authToken']),"Token");
    
  const navigate = useNavigate();
    
  const logout = () => {
    removeCookie('authToken');
    navigate("/");
  }

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
        <Link className='font-semibold text-gray-600 md:text-lg hover:text-green-600 md:ml-5 border-solid border-2 border-green-500 rounded-lg w-[100px]' to="#"><span>Sign in</span></Link>
      </div>
    </div>
  )
}

export default Header;

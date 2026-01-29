import React from 'react'
import ProfileInfo from '../cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {

  const navigate = useNavigate;

  const onLogout = () =>{
    navigate("/login");

  };

  return (
    <div className='bg-white flex item-center justify-between px-4 py-2 drop-shadow'>
        <h2 className='text-xl font-medium text-black py-2' >Notes</h2>

        <SearchBar/>

        <ProfileInfo onLogout={onLogout} />

    </div>
  )
}

export default Navbar
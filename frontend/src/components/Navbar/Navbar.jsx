import React from 'react'
import { useState } from 'react'
import ProfileInfo from '../cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {

  const[searchQuery,setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onClearSearch = ()=>{
    setSearchQuery("");
    
  }

  const onLogout = () =>{
    navigate("/login");

  };

  return (
    <div className='bg-white flex item-center justify-between px-4 py-2 drop-shadow'>
        <h2 className='text-xl font-medium text-black py-2' >Notes</h2>

        <SearchBar
        value={searchQuery}
        onClearSearch={onClearSearch}
        onChange={(e)=>setSearchQuery(e.target.value)} 
        />

        <ProfileInfo onLogout={onLogout} />

    </div>
  )
}

export default Navbar
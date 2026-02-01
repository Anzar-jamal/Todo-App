import React, { useState } from 'react'
import {FaRegEye , FaRegEyeSlash} from "react-icons/fa6"

const PasswordInput = ({value, onChange , placeholder}) => {
    const[isShowPassword,setIsShowpassword] = useState(false);

    const toggleShowPassword = ()=>{
        setIsShowpassword(!isShowPassword);
    };


  return (
    <div className='flex items-center bg-transparent mb-3  border-[0.2px] border-gray-400 rounded px-5' >

        <input 
        value={value}
        onChange={onChange}
        type={isShowPassword? "text" : "password"}
        placeholder={placeholder || "password"}
        className="w-full text-sm bg-transparent  py-3 rounded mr-3 outline-none "
        />

        {
            isShowPassword?
            <FaRegEye
            size={22}
            className='text-primary cursor-pointer'
            onClick={toggleShowPassword}
            />

            :

            <FaRegEyeSlash
            size={22}
            className='text-slate-400 cursor-pointer'
            onClick={toggleShowPassword} 
            />
        }

        

    </div>
  )
}

export default PasswordInput
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/input/PasswordInput';
import { validateEmail } from '../../utils/helper';
import { Link } from 'react-router-dom';

const Signup = () => {

  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState(null);

  const handleSignup = (e) =>{
    e.preventDefault();

    if(!name){
      setError("please enter your name");
      return;
    }

    if(!validateEmail(email)){
      setError("please enter a valid email");
      return;
    }

    if(!password){
      setError("please enter the password");
      return;
    }

    setError("");
  }

  return (
    <div>

    <Navbar/>

    <div className='flex items-center justify-center mt-20' >
        <div className='w-96 border border-gray-400 rounded bg-white px-7 py-10' >
            <form onSubmit={()=> {}}>
                <h4 className='text-2xl mb-7'>Signup</h4>

                <input 
                type="text" 
                placeholder='name'   
                className='input-box' 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />

                <input 
                type="text" 
                placeholder='email'   
                className='input-box' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <PasswordInput
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />

                {
                    error && <p className='text-red-500 text-xs pb-1'>{error}</p>
                }

                <button type='submit' onClick={handleSignup} className='btn-primary' >
                    Login
                </button>

                <p className='text-sm text-center mt-4'>
                    Already registred ?{" "}
                    <Link to='/login' className='font-medium text-primary underline'>
                        Login
                    </Link>
                </p>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Signup
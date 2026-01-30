import React from 'react'

const AddEditNotes = () => {
  return (
    <div className='flex flex-col gap-2' >
        <label className='input-label'>Title</label>
        <input
         type="text"
         className=' text-2xl text-slate-950 outline-none'
         placeholder='Go to the gym at 5'
          />
    </div>
  )
}

export default AddEditNotes
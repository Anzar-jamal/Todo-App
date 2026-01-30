import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'

const Home = () => {
  return (
    <>
      <Navbar/>

      <div className='container mx-auto' >

        <div className='grid grid-cols-3 gap-4 mt-8'>

        
            <NoteCard 
            title="Meeting on 7th april" 
            date="3rd april 2024"
            content="meeting on 7th april rescheduled due to some business requirement changes"
            tags="#Meeting"
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
            />
            <NoteCard 
            title="Meeting on 7th april" 
            date="3rd april 2024"
            content="meeting on 7th april rescheduled due to some business requirement changes"
            tags="#Meeting"
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
            />
            <NoteCard 
            title="Meeting on 7th april" 
            date="3rd april 2024"
            content="meeting on 7th april rescheduled due to some business requirement changes"
            tags="#Meeting"
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
            />
            <NoteCard 
            title="Meeting on 7th april" 
            date="3rd april 2024"
            content="meeting on 7th april rescheduled due to some business requirement changes"
            tags="#Meeting"
            isPinned={true}
            onEdit={()=>{}}
            onDelete={()=>{}}
            onPinNote={()=>{}}
            />
            

          </div>  
        <button 
        className='w-14 h-14 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-9 bottom-9'
        onClick={()=>{}} >
          <MdAdd 
          className='text-[32px] text-white' 
          />
        </button>



        <AddEditNotes />

      </div>
    </>
  )
}

export default Home
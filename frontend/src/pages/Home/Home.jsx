import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from "react-modal"
Modal.setAppElement('#root');

const Home = () => {

  const [openAddEditModal,setOpenAddEditModal] = useState({
    isShown:false,
    type:"add",
    data: null,
  });


  
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
           
            

          </div>  
        <button 
        className='w-14 h-14 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-9 bottom-9'
        onClick={()=>{setOpenAddEditModal({isShown:true,type:"add",data:null})}} >
          <MdAdd 
          className='text-[32px] text-white' 
          />
        </button>


        <Modal
        className="w-[40%] max-h-3/4 bg-white mx-auto mt-24 p-8 overflowX-scroll "
        isOpen={openAddEditModal.isShown}
        onRequestClose={()=>{}}
        style={{
          overlay:{
            backgroundColor:"rgba(0,0,0,0.2"
          }
        }}
        >

          <AddEditNotes 
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={()=>setOpenAddEditModal({isShown:false,type:"add",data:null})}  />
        </Modal>

      </div>
    </>
  )
}

export default Home
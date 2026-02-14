import React, { useState } from 'react'
import TagInput from '../../components/input/TagInput'
import { MdClose } from 'react-icons/md'

const AddEditNotes = ({type,noteData,onClose}) => {

  const[tags,setTags] = useState([]);
  const[title,setTitle] = useState("");
  const[content,setContent] = useState("")

  const [error,setError] = useState("");

// Add note
  const addNewNote = async ()=>{}

// Edit Note  
  const EditNote = async ()=>{}

  const handleAddNote = ()=>{
    if(!title){
      setError("please enter title")
      return;
    }

    if(!content){
      setError("please enter content")
      return;
    }

    setError("");

    if(type=="edit"){
      EditNote();

    }
    else{
      addNewNote();
    }
  }




  return (
    <div className=' relative' >


      <button className='w-10 h-10 rounded-full flex cursor-pointer items-center absolute justify-center -right-3 -top-3 hover:bg-slate-200 hover:text-3xl transition-all duration-500' >
        <MdClose className=' text-slate-300 text-2xl' onClick={onClose} />
      </button>
      
      <div className='flex flex-col gap-2' >
          <label className='input-label'>Title</label>
          <input
            type="text"
            className=' text-2xl text-slate-950 outline-none'
            placeholder='Go to the gym at 5'
            onChange={(e)=>setTitle(e.target.value)}
            value={title}

            />    
      </div>

      <div className='flex flex-col gap-2 mt-4' >

        <label className='input-label'>Contnet</label>
        <textarea 
        className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
        type='text'
        placeholder='content'
        onChange={(e)=>setContent(e.target.value)}
        value={content}
        rows={7}
        />

      </div>

      <div className="mt-3 ">
        <label htmlFor="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />

      </div>

      {
        error && <p className='text-red-500 text-xs pt-4' >{error}</p>
      }

      <button className='btn-primary font-medium mt-5 p-3'
      onClick={handleAddNote}
      > ADD
      </button>

    </div>  
  )
}

export default AddEditNotes
import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({tags,setTags}) => {
    const[inputValue,setInputValue] = useState("");
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    };

    const addNewTag = ()=>{
        if(inputValue.trim()!==""){
            setTags([...tags,inputValue.trim()])
            
            
        }
        
    };

    const handleKeyDown = (e)=>{
        if(e.key ==="Enter"){

            addNewTag();
            setInputValue("");
            
        } 
    };

    const handleRemoveTag = (tagToRemove)=>{
        setTags(tags.filter((tag)=>tag!==tagToRemove))
    }

  return (
    <div>

        {
            tags?.length > 0 &&
            (
                <div className='flex items-center gap-2 flex-wrap mt-2' >
                    {
                        tags.map((tag,index)=>(
                            <span key={index} >
                                #{tag}
                            <button>
                                <MdClose onClick={()=>handleRemoveTag(tag)}  />
                            </button>
                            </span>
                        ))
                    }
                </div>
            )
        }



        <div className='flex items-center gap-4 mt-3' >
            <input 
                type="text" 
                value={inputValue}
                className='text-sm border px-3 py-2 rounded outline-none bg-transparent'
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown}
                placeholder='Add Tags' />

            <button className='w-8 h-8 flex items-center justify-center rounded border bg-white border-blue-700 hover:bg-blue-700' 
            onClick={addNewTag}
             >
                <MdAdd className='text-2xl text-blue-700 hover:text-white' />
            </button>    

        </div>
    </div>
  )
}

export default TagInput
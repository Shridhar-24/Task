import React from 'react'
import { getRow } from '../utils/getRow';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai'
import { addRow } from '../utils/addRow';

const Form = ({ type,options,setOptions }) => {

  const onChange = (e,index)=>{                                         //updating the target input field in the options state
    const updatedOptions = options.map((option,i) => index === i ?
     Object.assign(option,{ [e.target.name] : e.target.value}):option)  
    setOptions(updatedOptions);
  }
  const removeRow=(index)=>{
    const filteredOptions = [...options];
    filteredOptions.splice(index,1);
    setOptions(filteredOptions);
  }

  return (
    <div >
    <div className='container'>
        {options.map((row,index)=>
        (
          <div className='field' key ={index}>
            <h5>Option number {index+1}</h5>
              <div className='row'>
              {getRow(type,row).map((field,ind)=>                     //get row is a function which provide an array of object each object cointains all the fileds of a input based on answer type
              ( <input key={ind} type={field.type}                    //we are using every field to populate a given input field based on the selected answer type
              placeholder ={field.placeholder} name ={field.name} value={field.value || ''}  onChange ={e => onChange(e,index) }/>))}
              {options.length >1 && <AiFillDelete size={20} className='deleteBtn' onClick={()=>removeRow(index)}/>}
            </div>
         </div>
        )
        )}      
    </div>
    <IoIosAddCircleOutline className='addBtn' size={30} onClick={()=>{addRow(type,setOptions,options)}}/>
    </div>
  )
}
export default Form
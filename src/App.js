import React, { useEffect, useState } from 'react'
import './App.css';
import Select from 'react-select';
import { data } from './utils/data';
import Form from './components/Form';
import toast,{ Toaster } from 'react-hot-toast'
import { setInitialOptions } from './utils/setInitialOptions';

const App = () => {
    const [ question,setQuestion ] = useState('');
    const [ ansType,setAnsType ] = useState(null);
    const [ options,setOptions ] = useState([]);

    useEffect(() => {
        setInitialOptions(ansType,setOptions);
    }, [ansType])
    
    const handleChange = (event)=>{
     setAnsType(event)
    }

    const handleSubmit = ()=> {
        toast.success("Successfully Added")
        console.log('question:',question,'Type:',ansType.label,'Options:',options)
        setQuestion('');
        setAnsType(null);
        setOptions([]);
    }

  return (
    <div className='task-field'>
        <Toaster />
        <h1>Add Question</h1>
        <input
         placeholder='Question title' value={question} onChange={ (event)=>setQuestion(event.target.value) }/>
        <Select className='spinner'
        options={data}
        value = {ansType}
        onChange ={handleChange}/>
        {ansType && ansType.value && <Form options={ options } type={ansType} setOptions={setOptions}/>}
        <button type = 'button' onClick={ handleSubmit }>
        Submit
        </button>
    </div>
  )
}

export default App
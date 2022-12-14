export const addRow = (type,setOptions,options)=>{
    if(type){
      if(type.value === 'number'){
          setOptions([...options,{placeHolder: '',min:'',max:''}])
      }
      else if(type.value === 'textArea'){
          setOptions([...options,{placeHolder: '',min:'',max:'',rows:''}])
      }
      else if(type.value === 'radio'||type.value ==='select'||type.value ==='checkBox'||type.value ==='text'){
          setOptions([...options,{placeHolder: ''}])
      }
      else if(type.value === 'slider'){
          setOptions([...options,{placeHolder: '',min:'',max:''}])
      }
      else {
          setOptions([])
      }
  }
  }
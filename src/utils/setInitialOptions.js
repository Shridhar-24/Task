export const setInitialOptions =(ansType,setOptions)=>{
    if(ansType){
        if(ansType.value === 'number'){
            setOptions([{placeHolder: '',min:'',max:''}])
        }
        else if(ansType.value === 'textArea'){
            setOptions([{placeHolder: '',min:'',max:'',rows:''}])
        }
        else if(ansType.value === 'radio'||ansType.value ==='select'||ansType.value ==='checkBox'||ansType.value ==='text'){
            setOptions([{placeHolder: ''}])
        }
        else if(ansType.value === 'slider'){
            setOptions([{placeHolder: '',min:'',max:''}])
        }
        else {
            setOptions([])
        }
    }
}
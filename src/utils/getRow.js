export const getRow = (type,row) =>{
    if(type.value === 'number'){
        return [{type:'number',placeholder:'placeholder',name:'placeHolder',value:row.placeHolder},
                {type:'number',placeholder:'min',name:'min',value:row.min},
                {type:'number',placeholder:'max',name:'max',value:row.max}
                ]
    }

    else if(type.value === 'textArea'){
        return [{type:'text',placeholder:'placeholder',name:'placeHolder',value:row.placeHolder},
                {type:'number',placeholder:'min',name:'min',value:row.min},
                {type:'number',placeholder:'max',name:'max',value:row.max},
                {type:'number',placeholder:'rows',name:'rows',value:row.rows}
                ]
    }
    else if(type.value === 'slider'){
        return [{type:'number',placeholder:'placeholder',name:'placeHolder',value:row.placeHolder},
                {type:'number',placeholder:'min',name:'min',value:row.min},
                {type:'number',placeholder:'max',name:'max',value:row.max}
                ]
    }

    else if(type.value === 'radio'||type.value ==='select'||type.value ==='checkBox'||type.value ==='text'){
        return [{type:'text',placeholder:'placeholder',name:'placeHolder',value:row.placeholder}]
    }
}
    

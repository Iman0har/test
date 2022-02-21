import {Sort_Alphabetically, Sort_Alphabetically_Desc,Sort_by_date,Sort_by_date_desc,
    Sort_by_quality,Sort_by_quality_desc,Filter_explicit,Add_Result}

from './Actiontypes'


export const Add_result =(result)=>{
    return {type:Add_Result,payload:result}
}
export const Sort_alpha =()=>{

    return{type : Sort_Alphabetically}
}
export const Sort_alpha_desc =()=>{

    return{type : Sort_Alphabetically_Desc}
}

export const Date_sort =()=>{

    return {type:Sort_by_date}
}
export const Date_sort_desc =()=>{

    return {type:Sort_by_date_desc}
}

export const Quality_sort =()=>{
    return {type : Sort_by_quality}
}
export const Quality_sort_desc =()=>{
    return {type : Sort_by_quality_desc}
}

export const Filter =()=>{

    return {type:Filter_explicit}
}
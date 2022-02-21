import { Sort_Alphabetically,Sort_Alphabetically_Desc,Sort_by_date,Sort_by_date_desc,Sort_by_quality,Sort_by_quality_desc,
    Filter_explicit,Add_Result

} from './Actiontypes'


const init={
    result:[]
}

export const Reducer = (store = init,action)=>{


switch (action.type){
    case Add_Result:
    return {...store,result:action.payload}    

    case  Sort_Alphabetically:
     return {...store,result:[...Sort_Alpha (store.result)]}

case  Sort_Alphabetically_Desc:
    return {...store,result:[...Sort_AlphaD (store.result)]}



}}



const Sort_Alpha=(data)=>{
    let array = data.sort((x,y)=>{
        return x.title>y.title?1:x.title<y.title?-1:0
    })
    return array
}
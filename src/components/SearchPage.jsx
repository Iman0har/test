import axios from "axios"


import{ Sort_alpha,Sort_alpha_desc,Date_sort,Date_sort_desc,Filter,Quality_sort,Quality_sort_desc} from "../redux/Actions"
import{Link} from 'react-router-dom'

import { Navbar } from "./Navbar"
import { useSelector } from "react-redux"

export const SearchPage = ()=>{

const data = useSelector((store) => store.result);
    return (<div>


    
      <Navbar input ={query}/>


      <div id="sorting">

          <button id="sort-alphabetically" >
            
          </button>
          <button id="sort-alphabetically-desc"></button>
          <button id="sort-by-date"></button>
          <button id="sort-by-date-desc"></button>
          <button id="sort-by-quality"></button>
          <button id="sort-by-quality-desc "></button>
          <button id=" filter-explicit"></button>
         
       
      </div>

      <div id="search-result">
          {data.map((elem,ind)=>{
              return <div  className="result" key={i}> 

                  <p>{elem.title}</p>
                  <p>{elem.author}</p>
                  <p>{elem.url}</p>
                  <p>{elem.description}</p>
                  
                  <p>{elem.creation_date}</p>
                   </div>

          })}

      </div>
    </div>  )} 

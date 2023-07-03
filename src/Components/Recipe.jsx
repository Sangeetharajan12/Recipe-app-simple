import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Recipelist from "./Recipelist";
const Recipe=()=>{
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?s=A");
    const [item,setItem]=useState();
    const [show,setShow]=useState(false);
    const [search,setSearch]=useState("");

    useEffect(()=>{
                fetch(url).then(res=>res.json()).then(data=>{
                    console.log(data.meals);
                    setItem(data.meals);
                    setShow(true);
                })
    },[url])


     
    const searchRecipe=(evt)=>{
        if(evt.key=="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            
        }
    }
    return(
        
        <div className="main">
            <div className="heading">
                <h1>Search your Food Recipe</h1>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" 
                onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}></input>
            </div>
            <div className="container">
                
                {
                    show ? <Recipelist data={item}/> :"Not Found"
                }

            </div>
            </div>
    )
}
export default Recipe;
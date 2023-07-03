import React from "react";

const Recipelist=({data})=>{
    console.log(data)
    
    return(
        <>
        {
            (!data) ? "Not Found" : data.map(item=>{
                return(
               <div className="card" key={item.idMeal} >
            <img src={item.strMealThumb} alt=""/>
            <h3>{item.strMeal}</h3>
            
            <div className="des">
            <h2><h2>Descripton:</h2>{item.strInstructions}</h2>
            </div>
        </div>

                        )            })
        }
        
        </>
    );
}
export default Recipelist;
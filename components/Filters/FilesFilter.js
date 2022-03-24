import React from "react";


export const FilesFilter = ( {column})=>{

    const { filterVal , setFilter} = column

    return(<span>
        Search :
        <input value={filterVal} onChange={(e)=> setFilter(e.target.value)}></input>

    </span>)


}
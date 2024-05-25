import { useState, useEffect } from "react"

function UseEffect(){

    let [count , setCount]= useState(0)
    useEffect(()=>{
        console.log(Math.floor(Math.random()*10 ));
    });
    return(
        <>
            <div>
                <p>
                    you clicked {count} times
                    <button onClick={()=>setCount(count+1)}>Click here</button>
                </p>
            </div>


        </>
    )
}

export default UseEffect
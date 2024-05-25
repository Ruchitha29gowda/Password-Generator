import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  let [password, setPassword] = useState("");
  let [charAllowed, setCharAllowed]= useState(false);
  let [numAllowed, setNumAllowed]= useState(false);
  let [length, setLength]=useState(5);

  let passGen = useCallback(()=>{
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let pass = "";

    if(charAllowed){
      str="!@#$%^&*()_+-"
    }
    if(numAllowed){
      str="0123456789"
    }

    for(let i=0; i<=length; i++){
      let ch = Math.floor(Math.random()*str.length +1);
      pass+= str.charAt(ch);
    }

    setPassword(pass)
  },[length,charAllowed,numAllowed,setPassword]);


  useEffect(()=>{passGen()},[length,charAllowed,numAllowed])


  return (
    <>
    <section id='bg'>
      <div id='container'>
        <h1>Password Generator</h1>
        <div id='c1'>
          <input id='pass' type="text" placeholder='password' value={password}/>
          <button>Copy</button>
        </div>
        <div id='c2'>
          <p>
          <input type="range" id='scale' value={length} min={5} max={50} onChange={(e)=>{setLength(e.target.value)}}/>
          Length: ({length})
          </p>

          <div className="a1">
            <p className='p'>
              Characters:
              <input className='cb' type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
            </p>
          </div>
          <div className="a1">
            <p className='p'>
              Numbers:
              <input className='cb' type="checkbox" defaultChecked={numAllowed} onChange={()=>{setNumAllowed((prev)=>!prev)}} />
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App

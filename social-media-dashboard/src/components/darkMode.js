import React, {useEffect,useState} from 'react'

function DarkMode() {
  const [mode,setMode] = useState(() => localStorage.getItem('mode'))

useEffect(() => {
  if (mode === 'dark'){
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
    }else{
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
  }
}, [mode]);
  
  return (
    <label >
      <input type="checkbox" onClick={() => setMode(mode =>(mode === 'dark' ? 'light' : 'dark'))}></input>
      <span className="slider round">
      </span>
    </label>
    /*<button onClick={() => setMode(mode =>(mode === 'dark' ? 'light' : 'dark'))}>{mode === 'dark' ? 'light' : 'dark'} Mode</button>*/
  )
}

export default DarkMode

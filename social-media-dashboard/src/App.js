import React, {useEffect,useState} from 'react';
import './App.css';
import Big from './components/bigBox/bigBox';
import Small from './components/smallBox/smallBox';
import data from './sample-data'




function App() {
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
    <div className='App'>
        <nav>
          <h1>Social Media Dashboard <br/> <span id="tot">Total Followers: 23,004</span></h1>
          <div className="button-content">
            <h5>Dark Mode</h5>
            <label className="switch">
              <input type="checkbox" onClick={() => setMode(mode =>(mode === 'dark' ? 'light' : 'dark'))}></input>
              <span className="slider round">
              </span>
            </label>
          </div>
        </nav>
        <div className="bigBox-content">
        <Big followers={data.platforms[0].facebook.followers} difference={data.platforms[0].facebook.difference} username={data.platforms[0].facebook.name} folSub="followers" smMedia={Object.keys(data.platforms[0])[0]}/>
        <Big followers={data.platforms[1].twitter.followers} difference={data.platforms[1].twitter.difference} username={data.platforms[1].twitter.name} folSub="followers" smMedia={Object.keys(data.platforms[1])[0]}/>
        <Big followers={data.platforms[2].instagram.followers} difference={data.platforms[2].instagram.difference} username={data.platforms[2].instagram.name} folSub="followers" smMedia={Object.keys(data.platforms[2])[0]}/>
        <Big followers={data.platforms[3].youtube.followers} difference={data.platforms[3].youtube.difference} username={data.platforms[3].youtube.name} folSub="subscribers" smMedia={Object.keys(data.platforms[3])[0]}/>
        </div>
        <h2>Overview - Today</h2>
        <div className="smallBox-content">
          <Small platform={data.events[0].platform} type={data.events[0].type} amount={data.events[0].amount} modifier={data.events[0].modifier} smMedia={Object.keys(data.platforms[0])[0]}/>
          <Small platform={data.events[1].platform} type={data.events[1].type} amount={data.events[1].amount} modifier={data.events[1].modifier} smMedia={Object.keys(data.platforms[0])[0]}/>
          <Small platform={data.events[2].platform} type={data.events[2].type} amount={data.events[2].amount} modifier={data.events[2].modifier} smMedia={Object.keys(data.platforms[2])[0]}/>
          <Small platform={data.events[3].platform} type={data.events[3].type} amount={data.events[3].amount} modifier={data.events[3].modifier} smMedia={Object.keys(data.platforms[2])[0]}/>
          <Small platform={data.events[4].platform} type={data.events[4].type} amount={data.events[4].amount} modifier={data.events[4].modifier} smMedia={Object.keys(data.platforms[1])[0]}/>
          <Small platform={data.events[5].platform} type={data.events[5].type} amount={data.events[5].amount} modifier={data.events[5].modifier} smMedia={Object.keys(data.platforms[1])[0]}/>
          <Small platform={data.events[6].platform} type={data.events[6].type} amount={data.events[6].amount} modifier={data.events[6].modifier} smMedia={Object.keys(data.platforms[3])[0]}/>
          <Small platform={data.events[7].platform} type={data.events[7].type} amount={data.events[7].amount} modifier={data.events[7].modifier} smMedia={Object.keys(data.platforms[3])[0]}/>
        </div>
    </div>
  )
} 
export default App;

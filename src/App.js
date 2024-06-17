import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
const App=(props)=>{
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0);
  return (
    <div>
    <Router>
    <LoadingBar
        shadow={true}
        height={3}
        color='#f11946'
        progress={progress}
      />
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={5} country="in" category = "general"/>}/>
          <Route exact path='/general' element={<News setProgress ={setProgress} apiKey={apiKey} key='general' pageSize={5} country="in" category = "general"/>}/>
          <Route exact path='/business' element={<News setProgress ={setProgress} apiKey={apiKey} key='business' pageSize={5} country="in" category = "business"/>}/>
          <Route exact path='/health' element={<News setProgress ={setProgress} apiKey={apiKey} key='health' pageSize={5} country="in" category = "health"/>}/>
          <Route exact path='/sports' element={<News setProgress ={setProgress} apiKey={apiKey} key='sports' pageSize={5} country="in" category = "sports"/>}/>
          <Route exact path='/technology' element={<News setProgress ={setProgress} apiKey={apiKey} key='technology' pageSize={5} country="in" category = "technology"/>}/>
          <Route exact path='/entertainment' element={<News setProgress ={setProgress} apiKey={apiKey} key='entertainment' pageSize={5} country="in" category = "entertainment"/>}/>
          <Route exact path='/science' element={<News setProgress ={setProgress} apiKey={apiKey} key='science' pageSize={5} country="in" category = "science"/>}/>
          </Routes>
      </Router>
      </div>
  );
}
export default App;

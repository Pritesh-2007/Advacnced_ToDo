import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Todoroutes from './routes/Todoroutes';
import Header from './components/Header';
import Sidebar from './components/SideBar';

const App = () => {
  const[issidebar,setissidebar]=useState(false);
  const togglebr=()=>{
    setissidebar(!issidebar);
  }
  return (
    <Router>
      <div className="app">
        <Header toglesidebar={togglebr} isbar={issidebar} />
        <Sidebar isbar={issidebar} />
        <div className={` flex relative top-6 px-8 transition-all duration-1000 ease-in-out ${issidebar?`w-3/4 left-72 `:`w-full left-0`}`}>
          <Todoroutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
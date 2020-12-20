import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

import './App.css';
import Widgets from './Widgets';


const App = () => {
  return (
    <div className="app">
      
      <Sidebar/>

      <Feed/>

      <Widgets/>
    </div>
  );
}
export default App;
